<?php

namespace RealDriss\Table\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class FilterRequest extends Request
{
    /**
     * @return array
     */
    public function rules()
    {
        return [
            'class' => 'required',
        ];
    }
}
