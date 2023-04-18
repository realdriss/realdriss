<?php

namespace RealDriss\Ecommerce\Repositories\Caches;

use RealDriss\Ecommerce\Repositories\Interfaces\CurrencyInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class CurrencyCacheDecorator extends CacheAbstractDecorator implements CurrencyInterface
{
    /**
     * {@inheritDoc}
     */
    public function getAllCurrencies()
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
