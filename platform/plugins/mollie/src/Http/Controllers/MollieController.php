<?php

namespace Botble\Mollie\Http\Controllers;

use Botble\Base\Http\Controllers\BaseController;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Payment\Enums\PaymentStatusEnum;
use Botble\Payment\Supports\PaymentHelper;
use Illuminate\Http\Request;
use Mollie;
use Mollie\Api\Exceptions\ApiException;
use Mollie\Api\Types\PaymentStatus;
use Throwable;

class MollieController extends BaseController
{
    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws Throwable
     */
    public function paymentCallback(Request $request, BaseHttpResponse $response)
    {
        try {
            $result = Mollie::api()->payments->get($request->input('id'));
        } catch (ApiException $exception) {
            return $response
                ->setError()
                ->setNextUrl(PaymentHelper::getCancelURL())
                ->setMessage($exception->getMessage());
        }

        $status = PaymentStatusEnum::PENDING;

        switch ($result->status) {
            case PaymentStatus::STATUS_OPEN:
            case PaymentStatus::STATUS_AUTHORIZED:
                $status = PaymentStatusEnum::PENDING;
                break;
            case PaymentStatus::STATUS_PAID:
                $status = PaymentStatusEnum::COMPLETED;
                break;
            case PaymentStatus::STATUS_CANCELED:
            case PaymentStatus::STATUS_EXPIRED:
            case PaymentStatus::STATUS_FAILED:
                $status = PaymentStatusEnum::FAILED;
                break;
        }

        $orderIds = (array)$result->metadata->order_id;

        do_action(PAYMENT_ACTION_PAYMENT_PROCESSED, [
            'amount'          => $request->input('amount'),
            'currency'        => $result->amount->currency,
            'charge_id'       => $result->id,
            'payment_channel' => MOLLIE_PAYMENT_METHOD_NAME,
            'status'          => $status,
            'customer_id'     => $request->input('customer_id'),
            'customer_type'   => $request->input('customer_type'),
            'payment_type'    => 'direct',
            'order_id'        => $orderIds,
        ]);

        if (!$result->isPaid()) {
            return $response
                ->setError()
                ->setNextUrl(PaymentHelper::getCancelURL())
                ->setMessage(__('Error when processing payment via Mollie!'));
        }

        return $response
            ->setNextUrl(PaymentHelper::getRedirectURL())
            ->setMessage(__('Checkout successfully!'));
    }
}
