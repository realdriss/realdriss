<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\ProductVariationItemInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class ProductVariationItemCacheDecorator extends CacheAbstractDecorator implements ProductVariationItemInterface
{
    /**
     * {@inheritDoc}
     */
    public function getVariationsInfo(array $versionIds)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProductAttributes($productId)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
