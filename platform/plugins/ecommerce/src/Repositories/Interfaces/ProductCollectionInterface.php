<?php

namespace RealDriss\Ecommerce\Repositories\Interfaces;

use RealDriss\Support\Repositories\Interfaces\RepositoryInterface;

interface ProductCollectionInterface extends RepositoryInterface
{
    /**
     * @param string $name
     * @param int $id
     * @return mixed
     */
    public function createSlug($name, $id);
}
