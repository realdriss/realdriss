<?php

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Ecommerce\Models\Product;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductAttributeSetInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductVariationInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductVariationItemInterface;
use RealDriss\Ecommerce\Supports\RenderProductAttributeSetsOnSearchPageSupport;
use RealDriss\Ecommerce\Supports\RenderProductSwatchesSupport;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

if (!function_exists('render_product_swatches')) {
    /**
     * @param Product $product
     * @param array $params
     * @return string
     * @throws Throwable
     */
    function render_product_swatches($product, array $params = [])
    {
        Theme::asset()->container('footer')
            ->add('change-product-swatches', 'vendor/core/plugins/ecommerce/js/change-product-swatches.js', [
                'jquery',
            ]);

        $selected = $product->defaultProductAttributes ? $product->defaultProductAttributes->pluck('id')
            ->toArray() : [];

        $params = array_merge([
            'selected' => $selected,
            'view'     => 'plugins/ecommerce::themes.attributes.swatches-renderer',
        ], $params);

        $support = app(RenderProductSwatchesSupport::class);

        return $support->setProduct($product)->render($params);
    }
}

if (!function_exists('render_product_swatches_filter')) {
    /**
     * @param array $params
     * @return mixed
     * @throws Throwable
     */
    function render_product_swatches_filter(array $params = [])
    {
        return app(RenderProductAttributeSetsOnSearchPageSupport::class)->render($params);
    }
}

if (!function_exists('get_ecommerce_attribute_set')) {
    /**
     * @return LengthAwarePaginator|\Illuminate\Database\Eloquent\Collection|Collection|mixed
     */
    function get_ecommerce_attribute_set()
    {
        $attributeSets = app(ProductAttributeSetInterface::class)
            ->advancedGet([
                'condition' => [
                    'status'        => BaseStatusEnum::PUBLISHED,
                    'is_searchable' => 1,
                ],
                'order_by'  => [
                    'order' => 'ASC',
                ],
                'with'      => [
                    'attributes',
                ],
            ]);
        return $attributeSets;
    }
}

if (!function_exists('get_parent_product')) {
    /**
     * Helper get parent of product variation
     * @param int $variationId
     * @param array $with
     * @return Product
     */
    function get_parent_product($variationId, array $with = ['slugable'])
    {
        return app(ProductVariationInterface::class)->getParentOfVariation($variationId, $with);
    }
}

if (!function_exists('get_parent_product_id')) {
    /**
     * Helper get parent of product variation ID
     * @param int $variationId
     * @return int
     */
    function get_parent_product_id($variationId)
    {
        $parent = get_parent_product($variationId);

        return $parent ? $parent->id : null;
    }
}

if (!function_exists('get_product_info')) {
    /**
     * @param int $variationId
     * @return Collection
     */
    function get_product_info($variationId)
    {
        return app(ProductVariationItemInterface::class)->getVariationsInfo([$variationId]);
    }
}

if (!function_exists('get_product_attributes')) {
    /**
     * @param int $productId
     * @return Collection
     */
    function get_product_attributes($productId)
    {
        return app(ProductVariationItemInterface::class)->getProductAttributes($productId);
    }
}
