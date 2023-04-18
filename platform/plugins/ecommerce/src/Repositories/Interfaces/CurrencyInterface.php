<?php

namespace RealDriss\Ecommerce\Repositories\Interfaces;

use RealDriss\Support\Repositories\Interfaces\RepositoryInterface;
use Illuminate\Support\Collection;

interface CurrencyInterface extends RepositoryInterface
{
    /**
     * @return Collection
     */
    public function getAllCurrencies();
}
