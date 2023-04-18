<?php

namespace RealDriss\Payment\Http\Requests;

use RealDriss\Payment\Enums\PaymentStatusEnum;
use RealDriss\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class UpdatePaymentRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'status' => Rule::in(PaymentStatusEnum::values()),
        ];
    }
}
