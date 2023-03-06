<?php

namespace Database\Seeders;

use Botble\Base\Supports\BaseSeeder;
use Botble\Ecommerce\Models\FlashSale;
use Botble\Ecommerce\Models\Product;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class FlashSaleSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FlashSale::truncate();
        DB::table('ec_flash_sale_products')->truncate();

        $productIds = Product::where('is_variation', 0)->pluck('id')->all();

        for ($i = 1; $i <= 3; $i++) {
            $flashSale = FlashSale::create([
                'name'     => 'Winter Sale ' . $i,
                'end_date' => now()
                    ->addDays(rand(15, 50))
                    ->addHours(rand(1, 23))
                    ->addMinutes(rand(1, 59))
                    ->toDateString(),
            ]);

            $product = Product::find(Arr::random($productIds));

            $price = $product->price;

            if ($product->front_sale_price !== $product->price) {
                $price = $product->front_sale_price;
            }

            $flashSale->products()->attach([$product->id => ['price' => $price - ($price * rand(10, 70) / 100), 'quantity' => rand(6, 20), 'sold' => rand(1, 5)]]);
        }
    }
}
