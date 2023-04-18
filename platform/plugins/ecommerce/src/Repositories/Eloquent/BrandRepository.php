<?php

namespace RealDriss\Ecommerce\Repositories\Eloquent;

use RealDriss\Ecommerce\Repositories\Interfaces\BrandInterface;
use RealDriss\Support\Repositories\Eloquent\RepositoriesAbstract;

class BrandRepository extends RepositoriesAbstract implements BrandInterface
{
    /**
     * {@inheritDoc}
     */
    public function getAll(array $condition = [])
    {
        $data = $this->model
            ->where($condition)
            ->orderBy('is_featured', 'DESC')
            ->orderBy('name', 'ASC');

        return $this->applyBeforeExecuteQuery($data)->get();
    }
}
