<?php

namespace RealDriss\Ecommerce\Http\Requests;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class ProductTagRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'   => 'required',
            'status' => Rule::in(BaseStatusEnum::values()),
        ];
    }
}
