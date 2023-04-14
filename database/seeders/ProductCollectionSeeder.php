<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Ecommerce\Models\ProductCollection;
use Illuminate\Support\Str;

class ProductCollectionSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProductCollection::truncate();

        $productCollections = [
            [
                'name' => 'New Arrival',
            ],
            [
                'name' => 'Best Sellers',
            ],
            [
                'name' => 'Special Offer',
            ],
        ];

        ProductCollection::truncate();

        foreach ($productCollections as $item) {
            $item['slug'] = Str::slug($item['name']);

            ProductCollection::create($item);
        }
    }
}
