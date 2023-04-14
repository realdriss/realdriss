<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\DiscountInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class DiscountCacheDecorator extends CacheAbstractDecorator implements DiscountInterface
{
    /**
     * {@inheritDoc}
     */
    public function getAvailablePromotions()
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getProductPriceBasedOnPromotion(array $productIds = [], array $productCollections = [])
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
