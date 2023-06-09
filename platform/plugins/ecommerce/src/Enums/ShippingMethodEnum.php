<?php

namespace RealDriss\Ecommerce\Enums;

use RealDriss\Base\Supports\Enum;

/**
 * @method static ShippingMethodEnum DEFAULT()
 */
class ShippingMethodEnum extends Enum
{
    public const DEFAULT = 'default';

    /**
     * @var string
     */
    public static $langPath = 'plugins/ecommerce::shipping.methods';
}
