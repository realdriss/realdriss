<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\ProductAttributeSetInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class ProductAttributeSetCacheDecorator extends CacheAbstractDecorator implements ProductAttributeSetInterface
{
    /**
     * {@inheritDoc}
     */
    public function getByProductId($productId)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getAllWithSelected($productId)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
