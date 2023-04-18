<?php

namespace RealDriss\SimpleSlider\Http\Requests;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class SimpleSliderRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'        => 'required',
            'key'         => 'required',
            'description' => 'max:1000',
            'status'      => Rule::in(BaseStatusEnum::values()),
        ];
    }
}
