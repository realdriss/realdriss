<?php

namespace RealDriss\Ecommerce\Services\Products;

use RealDriss\Ecommerce\Models\Product;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductRepository;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductInterface;

class UpdateDefaultProductService
{
    /**
     * @var ProductRepository
     */
    protected $productRepository;

    /**
     * UpdateDefaultProductService constructor.
     * @param ProductInterface $productRepository
     */
    public function __construct(ProductInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * @param Product $product
     * @return mixed
     */
    public function execute(Product $product)
    {
        $parent = $product->original_product;

        $data = [
            'sku',
            'quantity',
            'allow_checkout_when_out_of_stock',
            'with_storehouse_management',
            'stock_status',
            'sale_type',
            'price',
            'sale_price',
            'start_date',
            'end_date',
            'length',
            'wide',
            'height',
            'weight',
            'barcode',
            'length_unit',
            'wide_unit',
            'height_unit',
            'weight_unit',
        ];

        foreach ($data as $item) {
            $parent->{$item} = $product->{$item};
        }

        if ($parent->sale_price > $parent->price) {
            $parent->sale_price = null;
        }

        if ($parent->sale_type == 0) {
            $parent->start_date = null;
            $parent->end_date = null;
        }

        $parent->save();

        return $parent;
    }
}
