<?php

namespace RealDriss\Ecommerce\Models;

use RealDriss\Base\Models\BaseModel;
use RealDriss\Ecommerce\Repositories\Interfaces\ShippingRuleItemInterface;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ShippingRule extends BaseModel
{

    /**
     * @var string
     */
    protected $table = 'ec_shipping_rules';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'price',
        'currency_id',
        'type',
        'from',
        'to',
        'shipping_id',
    ];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];


    /**
     * @return HasMany
     */
    public function items()
    {
        return $this->hasMany(ShippingRuleItem::class);
    }

    protected static function boot()
    {
        parent::boot();

        self::deleting(function (ShippingRule $shippingRule) {
            app(ShippingRuleItemInterface::class)->deleteBy(['shipping_rule_id' => $shippingRule->id]);
        });
    }
}
