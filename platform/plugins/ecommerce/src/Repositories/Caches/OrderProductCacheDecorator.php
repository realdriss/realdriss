<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\OrderProductInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class OrderProductCacheDecorator extends CacheAbstractDecorator implements OrderProductInterface
{
}
