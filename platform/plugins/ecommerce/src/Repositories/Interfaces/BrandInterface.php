<?php

namespace RealDriss\Ecommerce\Repositories\Interfaces;

use RealDriss\Support\Repositories\Interfaces\RepositoryInterface;

interface BrandInterface extends RepositoryInterface
{
    /**
     * @param array $condition
     * @return mixed
     */
    public function getAll(array $condition = []);
}
