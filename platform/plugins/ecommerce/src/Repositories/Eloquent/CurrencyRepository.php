<?php

namespace RealDriss\Ecommerce\Repositories\Eloquent;

use RealDriss\Ecommerce\Repositories\Interfaces\CurrencyInterface;
use RealDriss\Support\Repositories\Eloquent\RepositoriesAbstract;

class CurrencyRepository extends RepositoriesAbstract implements CurrencyInterface
{
    /**
     * {@inheritDoc}
     */
    public function getAllCurrencies()
    {
        $data = $this->model
            ->orderBy('order', 'ASC');

        return $this->applyBeforeExecuteQuery($data)->get();
    }
}
