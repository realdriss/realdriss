<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Traits\EnumCastable;

class Tax extends BaseModel
{
    use EnumCastable;

    /**
     * @var string
     */
    protected $table = 'ec_taxes';

    /**
     * @var array
     */
    protected $fillable = [
        'title',
        'percentage',
        'priority',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];
}
