<?php

namespace RealDriss\Payment\Supports;

use RealDriss\Payment\Enums\PaymentMethodEnum;
use RealDriss\Payment\Enums\PaymentStatusEnum;
use RealDriss\Payment\Repositories\Interfaces\PaymentInterface;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;

class PaymentHelper
{
    /**
     * @return string
     */
    public static function getRedirectURL($checkoutToken = null): string
    {
        return apply_filters(PAYMENT_FILTER_REDIRECT_URL, $checkoutToken, route('public.index'));
    }

    /**
     * @return string
     */
    public static function getCancelURL($checkoutToken = null): string
    {
        return apply_filters(PAYMENT_FILTER_CANCEL_URL, $checkoutToken, route('public.index'));
    }

    /**
     * Store payment on local
     *
     * @param array $args
     * @return mixed
     */
    public static function storeLocalPayment(array $args = [])
    {
        $data = array_merge([
            'user_id' => Auth::check() ? Auth::id() : 0,
        ], $args);

        $paymentChannel = Arr::get($data, 'payment_channel', PaymentMethodEnum::COD);

        $orderIds = (array) $data['order_id'];

        return app(PaymentInterface::class)->create([
            'account_id'      => Arr::get($data, 'account_id'),
            'amount'          => $data['amount'],
            'currency'        => $data['currency'],
            'charge_id'       => $data['charge_id'],
            'order_id'        => Arr::first($orderIds),
            'customer_id'     => Arr::get($data, 'customer_id'),
            'customer_type'   => Arr::get($data, 'customer_type'),
            'payment_channel' => $paymentChannel,
            'status'          => Arr::get($data, 'status', PaymentStatusEnum::PENDING),
        ]);
    }
}
