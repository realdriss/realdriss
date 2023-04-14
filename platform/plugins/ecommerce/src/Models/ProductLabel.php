<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Traits\EnumCastable;

class ProductLabel extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ec_product_labels';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'color',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];
}
