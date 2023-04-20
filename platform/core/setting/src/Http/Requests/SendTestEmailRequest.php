<?php

namespace RealDriss\Setting\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class SendTestEmailRequest extends Request
{

    /**
     * Get the validation rules that apply to the send test email request.
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
        ];
    }
}
