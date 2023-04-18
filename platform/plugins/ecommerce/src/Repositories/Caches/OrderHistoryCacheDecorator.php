<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\OrderHistoryInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class OrderHistoryCacheDecorator extends CacheAbstractDecorator implements OrderHistoryInterface
{
}
