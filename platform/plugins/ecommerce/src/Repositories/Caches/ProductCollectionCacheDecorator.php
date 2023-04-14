<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\ProductCollectionInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class ProductCollectionCacheDecorator extends CacheAbstractDecorator implements ProductCollectionInterface
{
    /**
     * {@inheritDoc}
     */
    public function createSlug($name, $id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}
