<?php

namespace RealDriss\Payment\Http\Requests;

use RealDriss\Payment\Enums\PaymentMethodEnum;
use RealDriss\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class CheckoutRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'payment_method' => 'required|' . Rule::in(PaymentMethodEnum::values()),
            'amount'         => 'required|min:0',
        ];
    }
}
