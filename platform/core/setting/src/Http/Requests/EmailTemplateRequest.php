<?php

namespace RealDriss\Setting\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class EmailTemplateRequest extends Request
{

    /**
     * Get the validation rules that apply to the email template request.
     * @return array
     */
    public function rules()
    {
        return [
            'email_subject' => $this->has('email_subject_key') ? 'required|string' : '',
            'email_content' => 'required|string',
        ];
    }
}
