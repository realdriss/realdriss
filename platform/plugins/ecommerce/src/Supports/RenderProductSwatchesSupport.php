<?php

namespace RealDriss\Ecommerce\Supports;

use RealDriss\Ecommerce\Models\Product;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductRepository;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductVariationItemInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductVariationInterface;
use Exception;
use Throwable;

class RenderProductSwatchesSupport
{
    /**
     * @var Product
     */
    protected $product;

    /**
     * @var ProductRepository
     */
    protected $productRepository;

    /**
     * RenderProductSwatchesSupport constructor.
     * @param ProductInterface $productRepository
     */
    public function __construct(ProductInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * @param Product $product
     * @return $this
     */
    public function setProduct($product)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * @param array $params
     * @return string
     * @throws Exception
     * @throws Throwable
     */
    public function render(array $params = [])
    {
        $params = array_merge([
            'selected' => [],
            'view'     => 'plugins/ecommerce::themes.attributes.swatches-renderer',
        ], $params);

        $product = $this->product;

        $attributeSets = $this->productRepository->getRelatedProductAttributeSets($this->product);

        $attributes = $this->productRepository->getRelatedProductAttributes($this->product)->sortBy('order');

        $productVariations = app(ProductVariationInterface::class)->allBy([
            'configurable_product_id' => $product->id,
        ]);

        $productVariationsInfo = app(ProductVariationItemInterface::class)
                    ->getVariationsInfo($productVariations->pluck('id')->toArray());

        $selected = $params['selected'];

        return view($params['view'], compact('attributeSets', 'attributes', 'product', 'selected', 'productVariationsInfo', 'productVariations'))->render();
    }
}
