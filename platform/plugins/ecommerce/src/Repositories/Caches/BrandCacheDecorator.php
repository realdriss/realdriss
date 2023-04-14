<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\BrandInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class BrandCacheDecorator extends CacheAbstractDecorator implements BrandInterface
{
    /**
     * {@inheritDoc}
     */
    public function getAll(array $condition = [])
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
