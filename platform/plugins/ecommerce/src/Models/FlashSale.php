<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Models\BaseModel;
use RealDriss\Base\Traits\EnumCastable;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class FlashSale extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ec_flash_sales';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'end_date',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];

    /**
     * @var string[]
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'end_date',
    ];

    /**
     * @return BelongsToMany
     */
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'ec_flash_sale_products', 'flash_sale_id', 'product_id')
            ->withPivot(['price', 'quantity', 'sold']);
    }

    /**
     * @param string $value
     * @return string|null
     */
    public function getEndDateAttribute($value)
    {
        if (!$value) {
            return $value;
        }

        return Carbon::parse($value)->format('Y/m/d');
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function scopeNotExpired($query)
    {
        return $query->where('end_date', '>=', now()->toDateString());
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function scopeExpired($query)
    {
        return $query->where('end_date', '<', now()->toDateString());
    }
}
