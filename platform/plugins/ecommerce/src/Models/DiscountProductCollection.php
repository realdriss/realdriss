<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Models\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DiscountProductCollection extends BaseModel
{

    /**
     * @var string
     */
    protected $table = 'ec_discount_product_collections';

    /**
     * @var array
     */
    protected $fillable = [
        'discount_id',
        'product_collection_id',
    ];

    /**
     * @return BelongsTo
     */
    public function productCollections()
    {
        return $this->belongsTo(ProductCollection::class, 'product_collection_id')->withDefault();
    }
}
