<?php

namespace RealDriss\Payment\Services\Gateways;

use RealDriss\Payment\Enums\PaymentMethodEnum;
use RealDriss\Payment\Enums\PaymentStatusEnum;
use RealDriss\Payment\Services\Abstracts\StripePaymentAbstract;
use RealDriss\Payment\Supports\StripeHelper;
use Exception;
use Illuminate\Http\Request;
use Stripe\Charge;
use Stripe\Exception\ApiErrorException;
use Stripe\Stripe;

class StripePaymentService extends StripePaymentAbstract
{
    /**
     * Make a payment
     *
     * @param Request $request
     *
     * @return mixed
     * @throws ApiErrorException
     */
    public function makePayment(Request $request)
    {
        $this->amount = $request->input('amount');
        $this->currency = $request->input('currency', config('plugins.payment.payment.currency'));
        $this->currency = strtoupper($this->currency);
        $description = $request->input('description');

        Stripe::setApiKey(setting('payment_stripe_secret'));
        Stripe::setClientId(setting('payment_stripe_client_id'));

        $amount = $this->amount;

        $multiplier = StripeHelper::getStripeCurrencyMultiplier($this->currency);

        if ($multiplier > 1) {
            $amount = (int)($amount * $multiplier);
        }

        $charge = Charge::create([
            'amount'      => $amount,
            'currency'    => $this->currency,
            'source'      => $this->token,
            'description' => $description,
        ]);

        $this->chargeId = $charge['id'];

        return $this->chargeId;
    }

    /**
     * Use this function to perform more logic after user has made a payment
     *
     * @param string $chargeId
     * @param Request $request
     *
     * @return mixed
     */
    public function afterMakePayment($chargeId, Request $request)
    {
        try {
            $payment = $this->getPaymentDetails($chargeId);
            if ($payment && ($payment->paid || $payment->status == 'succeeded')) {
                $paymentStatus = PaymentStatusEnum::COMPLETED;
            } else {
                $paymentStatus = PaymentStatusEnum::FAILED;
            }
        } catch (Exception $exception) {
            $paymentStatus = PaymentStatusEnum::FAILED;
        }

        $orderIds = (array)$request->input('order_id', []);

        do_action(PAYMENT_ACTION_PAYMENT_PROCESSED, [
            'amount'          => $request->input('amount'),
            'currency'        => $request->input('currency'),
            'charge_id'       => $chargeId,
            'order_id'        => $orderIds,
            'customer_id'     => $request->input('customer_id'),
            'customer_type'   => $request->input('customer_type'),
            'payment_channel' => PaymentMethodEnum::STRIPE,
            'status'          => $paymentStatus,
        ]);

        return $chargeId;
    }
}
