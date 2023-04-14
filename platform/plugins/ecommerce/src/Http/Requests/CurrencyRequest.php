<?php

namespace RealDriss\Ecommerce\Http\Requests;

use RealDriss\Support\Http\Requests\Request;
use Illuminate\Support\Arr;
use Route;

class CurrencyRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'title'  => 'required|string',
            'code'   => 'required|string|unique:ec_currencies,code',
            'symbol' => 'required|string|unique:ec_currencies,symbol',
            'order'  => 'required|integer|min:0',
        ];

        $id = Arr::get(Route::current()->parameters(), 'id');

        if (!empty($id)) {
            $rules['code'] = 'required|string|max:30|unique:ec_currencies,code,' . $id;
            $rules['symbol'] = 'required|string|max:30|unique:ec_currencies,symbol,' . $id;
        }

        return $rules;
    }
}
