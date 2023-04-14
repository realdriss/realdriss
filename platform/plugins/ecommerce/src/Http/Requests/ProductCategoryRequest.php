<?php

namespace RealDriss\Ecommerce\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class ProductCategoryRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'  => 'required',
            'order' => 'required|integer|min:0',
        ];
    }
}
