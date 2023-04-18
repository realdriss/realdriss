<?php

namespace RealDriss\Backup\Http\Requests;

use RealDriss\Support\Http\Requests\Request;

class BackupRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
        ];
    }
}
