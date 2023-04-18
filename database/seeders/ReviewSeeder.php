<?php

namespace Database\Seeders;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Ecommerce\Models\Customer;
use RealDriss\Ecommerce\Models\Product;
use RealDriss\Ecommerce\Models\Review;
use Faker\Factory;

class ReviewSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        Review::truncate();

        $totalProducts = Product::count();
        $totalCustomers = Customer::count();

        for ($i = 0; $i < 10; $i++) {
            Review::create([
                'product_id'  => $faker->numberBetween(1, $totalProducts),
                'customer_id' => $faker->numberBetween(1, $totalCustomers),
                'star'        => $faker->numberBetween(1, 5),
                'comment'     => $faker->text(150),
                'status'      => BaseStatusEnum::PUBLISHED,
            ]);
        }
    }
}
