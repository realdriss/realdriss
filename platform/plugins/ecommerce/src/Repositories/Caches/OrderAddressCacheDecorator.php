<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\OrderAddressInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class OrderAddressCacheDecorator extends CacheAbstractDecorator implements OrderAddressInterface
{
}
