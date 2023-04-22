<?php

namespace RealDriss\ACL\Http\Requests;

use RealDriss\Support\Http\Requests\Request;
use Illuminate\Support\Facades\Auth;

class UpdatePasswordRequest extends Request
{

    /**
     * Get the validation rules that apply to the update password request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'password'              => 'required|min:6|max:60',
            'password_confirmation' => 'same:password',
        ];

        if (Auth::user() && Auth::user()->isSuperUser()) {
            return $rules;
        }

        return ['old_password' => 'required|min:6|max:60'] + $rules;
    }
}
