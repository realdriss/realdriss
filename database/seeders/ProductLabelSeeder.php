<?php

namespace Database\Seeders;

use Botble\Ecommerce\Models\ProductLabel;
use Illuminate\Database\Seeder;

class ProductLabelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProductLabel::truncate();

        $productCollections = [
            [
                'name'  => 'Hot',
                'color' => '#ec2434',
            ],
            [
                'name'  => 'New',
                'color' => '#00c9a7',
            ],
            [
                'name'  => 'Sale',
                'color' => '#fe9931',
            ],
        ];

        foreach ($productCollections as $item) {
            ProductLabel::create($item);
        }
    }
}
