<?php

namespace RealDriss\Testimonial\Models;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Traits\EnumCastable;

class Testimonial extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'testimonials';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'company',
        'content',
        'image',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];
}
