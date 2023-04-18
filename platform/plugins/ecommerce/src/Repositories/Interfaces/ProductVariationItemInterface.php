<?php

namespace RealDriss\Ecommerce\Repositories\Interfaces;

use RealDriss\Support\Repositories\Interfaces\RepositoryInterface;

interface ProductVariationItemInterface extends RepositoryInterface
{
    /**
     * @param array $versionIds
     * @return mixed
     */
    public function getVariationsInfo(array $versionIds);

    /**
     * @param int $productId
     * @return mixed
     */
    public function getProductAttributes($productId);
}
