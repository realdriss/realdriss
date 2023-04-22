<?php

namespace RealDriss\ACL\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class RoleCreateRequest extends Request
{

    /**
     * Get the validation rules that apply to the role create request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'        => 'required|max:60|min:3',
            'description' => 'required|max:255',
        ];
    }
}
