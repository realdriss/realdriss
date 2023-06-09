<?php

namespace RealDriss\Ecommerce\Http\Requests;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class ProductAttributeSetsRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'       => 'required|max:255',
            'slug'        => 'required|max:255',
            'description' => 'max:400|nullable|string',
            'order'       => 'required|integer|min:0|max:127',
            'status'      => Rule::in(BaseStatusEnum::values()),
        ];
    }
}
