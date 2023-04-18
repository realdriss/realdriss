<?php

namespace RealDriss\Ecommerce\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class ApplyCouponRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'coupon_code' => 'required|max:255',
        ];
    }
}
