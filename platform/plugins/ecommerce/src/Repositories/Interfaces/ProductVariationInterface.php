<?php

namespace RealDriss\Ecommerce\Repositories\Interfaces;

use RealDriss\Ecommerce\Models\Product;
use RealDriss\Ecommerce\Models\ProductVariation;
use RealDriss\Support\Repositories\Interfaces\RepositoryInterface;

interface ProductVariationInterface extends RepositoryInterface
{
    /**
     * @param int $configurableProductId
     * @param array $attributes
     * @return null|ProductVariation
     */
    public function getVariationByAttributes($configurableProductId, array $attributes);

    /**
     * @param int $configurableProductId
     * @param array $attributes
     * @return array
     */
    public function getVariationByAttributesOrCreate($configurableProductId, array $attributes);

    /**
     * @param $configurableProductId
     * @param array $attributes
     */
    public function correctVariationItems($configurableProductId, array $attributes);

    /**
     * Get the configurable(parent) product of variation product.
     * @param int $variationId id of variation product
     * @param array $with
     * @return Product  Product model
     */
    public function getParentOfVariation($variationId, array $with = []);

    /**
     * @param int $productId
     * @return array
     */
    public function getAttributeIdsOfChildrenProduct($productId);
}
