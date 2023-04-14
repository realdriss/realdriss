<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\CustomerInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class CustomerCacheDecorator extends CacheAbstractDecorator implements CustomerInterface
{
}
