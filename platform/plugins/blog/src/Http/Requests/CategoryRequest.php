<?php

namespace RealDriss\Blog\Http\Requests;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class CategoryRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'        => 'required|max:120',
            'description' => 'max:400',
            'order'       => 'required|integer|min:0|max:127',
            'status'      => Rule::in(BaseStatusEnum::values()),
        ];
    }
}
