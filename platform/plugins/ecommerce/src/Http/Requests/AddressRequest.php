<?php

namespace Botble\Ecommerce\Http\Requests;

use Botble\Support\Http\Requests\Request;
use EcommerceHelper;
use Illuminate\Support\Arr;
use Illuminate\Validation\Rule;

class AddressRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name'       => 'required|max:255',
            'email'      => 'email|nullable|max:60',
            'phone'      => 'required|numeric',
            'state'      => 'required|max:120',
            'city'       => 'required|max:120',
            'address'    => 'required|max:120',
            'is_default' => 'integer|min:0|max:1',
        ];

        if (count(EcommerceHelper::getAvailableCountries()) > 1) {
            $rules['country'] = 'required|' . Rule::in(array_keys(EcommerceHelper::getAvailableCountries()));
        } else {
            $this->merge(['country' => Arr::first(array_keys(EcommerceHelper::getAvailableCountries()))]);
        }

        if (EcommerceHelper::isZipCodeEnabled()) {
            $rules['zip_code'] = 'required|max:20';
        }

        return $rules;
    }
}
