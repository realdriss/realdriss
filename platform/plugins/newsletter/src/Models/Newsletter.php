<?php

namespace RealDriss\Newsletter\Models;

use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Traits\EnumCastable;
use RealDriss\Newsletter\Enums\NewsletterStatusEnum;

class Newsletter extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'newsletters';

    /**
     * @var array
     */
    protected $fillable = [
        'email',
        'name',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => NewsletterStatusEnum::class,
    ];
}
