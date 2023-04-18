<?php

namespace RealDriss\Translation\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class LocaleRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'locale' => 'required',
        ];
    }
}
