<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Ecommerce\Models\ProductAttribute;
use RealDriss\Ecommerce\Models\ProductAttributeSet;

class ProductAttributeSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProductAttributeSet::truncate();

        ProductAttributeSet::create([
            'title'                     => 'Color',
            'slug'                      => 'color',
            'display_layout'            => 'visual',
            'is_searchable'             => true,
            'is_use_in_product_listing' => true,
            'order'                     => 0,
        ]);

        ProductAttributeSet::create([
            'title'                     => 'Size',
            'slug'                      => 'size',
            'display_layout'            => 'text',
            'is_searchable'             => true,
            'is_use_in_product_listing' => true,
            'order'                     => 1,
        ]);

        ProductAttribute::truncate();

        $productAttributes = [
            [
                'attribute_set_id' => 1,
                'title'            => 'Green',
                'slug'             => 'green',
                'color'            => '#5FB7D4',
                'is_default'       => true,
                'order'            => 1,
            ],
            [
                'attribute_set_id' => 1,
                'title'            => 'Blue',
                'slug'             => 'blue',
                'color'            => '#333333',
                'is_default'       => false,
                'order'            => 2,
            ],
            [
                'attribute_set_id' => 1,
                'title'            => 'Red',
                'slug'             => 'red',
                'color'            => '#DA323F',
                'is_default'       => false,
                'order'            => 3,
            ],
            [
                'attribute_set_id' => 2,
                'title'            => 'S',
                'slug'             => 's',
                'is_default'       => true,
                'order'            => 1,
            ],
            [
                'attribute_set_id' => 2,
                'title'            => 'M',
                'slug'             => 'm',
                'is_default'       => true,
                'order'            => 2,
            ],
            [
                'attribute_set_id' => 2,
                'title'            => 'L',
                'slug'             => 'l',
                'is_default'       => true,
                'order'            => 3,
            ],
        ];

        foreach ($productAttributes as $item) {
            ProductAttribute::create($item);
        }
    }
}
