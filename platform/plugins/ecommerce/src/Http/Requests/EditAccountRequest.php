<?php

namespace RealDriss\Ecommerce\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class EditAccountRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'  => 'required|max:255',
            'phone' => 'max:20|sometimes',
            'dob'   => 'max:20|sometimes',
        ];
    }
}
