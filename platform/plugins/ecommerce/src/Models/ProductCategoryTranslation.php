<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Models\BaseModel;

class ProductCategoryTranslation extends BaseModel
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ec_product_categories_translations';

    /**
     * @var array
     */
    protected $fillable = [
        'lang_code',
        'ec_product_categories_id',
        'name',
        'description',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;
}
