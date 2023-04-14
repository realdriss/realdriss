<?php

namespace RealDriss\Contact\Models;

use RealDriss\Base\Models\BaseModel;

class ContactReply extends BaseModel
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'contact_replies';

    /**
     * The date fields for the model.clear
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'message',
        'contact_id',
    ];
}
