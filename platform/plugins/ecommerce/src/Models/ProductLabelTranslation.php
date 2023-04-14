<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Models\BaseModel;

class ProductLabelTranslation extends BaseModel
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'ec_product_labels_translations';

    /**
     * @var array
     */
    protected $fillable = [
        'lang_code',
        'ec_product_labels_id',
        'name',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;
}
