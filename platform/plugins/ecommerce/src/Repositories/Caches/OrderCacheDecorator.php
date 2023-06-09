<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\OrderInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class OrderCacheDecorator extends CacheAbstractDecorator implements OrderInterface
{
    /**
     * {@inheritDoc}
     */
    public function getRevenueData($startDate, $endDate, $select = ['*'])
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function countRevenueByDateRange($startDate, $endDate)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
