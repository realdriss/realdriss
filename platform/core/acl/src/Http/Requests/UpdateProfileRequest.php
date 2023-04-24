<?php

namespace RealDriss\ACL\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class UpdateProfileRequest extends Request
{

    /**
     * Get the validation rules that apply to the update profile request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username'   => 'required|max:30|min:4',
            'first_name' => 'required|max:60|min:2',
            'last_name'  => 'required|max:60|min:2',
            'email'      => 'required|max:60|min:6|email',
        ];
    }
}
