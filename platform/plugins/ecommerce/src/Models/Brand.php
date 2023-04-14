<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Traits\EnumCastable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Brand extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ec_brands';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'website',
        'logo',
        'description',
        'order',
        'is_featured',
        'status',
    ];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];

    /**
     * @return HasMany
     */
    public function products()
    {
        return $this->hasMany(Product::class, 'brand_id')->where('is_variation', 0);
    }
}
