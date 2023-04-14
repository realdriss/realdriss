<?php

namespace RealDriss\Contact\Http\Requests;

use RealDriss\Contact\Enums\ContactStatusEnum;
use RealDriss\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class EditContactRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'status' => Rule::in(ContactStatusEnum::values()),
        ];
    }
}
