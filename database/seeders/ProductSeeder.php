<?php

namespace Database\Seeders;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Ecommerce\Models\Order;
use RealDriss\Ecommerce\Models\OrderAddress;
use RealDriss\Ecommerce\Models\OrderHistory;
use RealDriss\Ecommerce\Models\OrderProduct;
use RealDriss\Ecommerce\Models\Product;
use RealDriss\Ecommerce\Models\ProductVariation;
use RealDriss\Ecommerce\Models\ProductVariationItem;
use RealDriss\Ecommerce\Models\Shipment;
use RealDriss\Ecommerce\Models\ShipmentHistory;
use RealDriss\Ecommerce\Models\Wishlist;
use RealDriss\Payment\Models\Payment;
use RealDriss\Slug\Models\Slug;
use Faker\Factory;
use File;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use SlugHelper;

class ProductSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->uploadFiles('products');

        $faker = Factory::create();

        // define unique product props.
        $products = [
            [
                'id'          => 1,
                'name'        => 'Smart Home Speaker',
                'price'       => $faker->numberBetween(200, 500),
                'is_featured' => true,
            ],
            [
                'id'          => 2,
                'name'        => 'Headphone Ultra Bass',
                'price'       => $faker->numberBetween(200, 500),
                'sale_price'  => $faker->numberBetween(150, 200),
                'is_featured' => true,
            ],
            [
                'id'          => 3,
                'name'        => 'Boxed - Bluetooth Headphone',
                'price'       => $faker->numberBetween(200, 500),
                'sale_price'  => $faker->numberBetween(50, 60),
                'is_featured' => true,
            ],
            [
                'id'          => 4,
                'name'        => 'Chikie - Bluetooth Speaker',
                'price'       => $faker->numberBetween(70, 90),
                'is_featured' => true,
            ],
            [
                'id'          => 5,
                'name'        => 'Camera Hikvision HK-35VS8',
                'price'       => $faker->numberBetween(40, 50),
                'sale_price'  => $faker->numberBetween(50, 60),
                'is_featured' => true,
            ],
            [
                'id'          => 6,
                'name'        => 'Camera Samsung SS-24',
                'price'       => $faker->numberBetween(50, 60),
                'is_featured' => true,
            ],
            [
                'id'          => 7,
                'name'        => 'Leather Watch Band',
                'price'       => $faker->numberBetween(110, 130),
                'sale_price'  => $faker->numberBetween(90, 100),
                'is_featured' => true,
            ],
            [
                'id'          => 8,
                'name'        => 'Apple iPhone 13 Plus',
                'price'       => $faker->numberBetween(110, 130),
                'sale_price'  => $faker->numberBetween(90, 100),
                'is_featured' => true,
            ],
            [
                'id'          => 9,
                'name'        => 'Macbook Pro 2015',
                'price'       => $faker->numberBetween(110, 130),
                'sale_price'  => $faker->numberBetween(90, 100),
                'is_featured' => true,
            ],
            [
                'id'          => 10,
                'name'        => 'Macbook Air 12 inch',
                'price'       => $faker->numberBetween(200, 500),
                'sale_price'  => $faker->numberBetween(150, 200),
                'is_featured' => true,
            ],
        ];

        Product::truncate();
        DB::table('ec_product_with_attribute_set')->truncate();
        DB::table('ec_product_with_attribute')->truncate();
        DB::table('ec_product_variations')->truncate();
        DB::table('ec_product_variation_items')->truncate();
        DB::table('ec_product_collection_products')->truncate();
        DB::table('ec_product_label_products')->truncate();
        DB::table('ec_product_category_product')->truncate();
        DB::table('ec_product_related_relations')->truncate();
        Slug::where('reference_type', Product::class)->delete();
        Wishlist::truncate();
        Order::truncate();
        OrderAddress::truncate();
        OrderProduct::truncate();
        OrderHistory::truncate();
        Shipment::truncate();
        ShipmentHistory::truncate();
        Payment::truncate();

        foreach ($products as $key => $item) {
            $item['description'] = '<p>Great description.</p>';
            $item['content'] = '<p>Format the content neatly.</p>';
            $item['status'] = BaseStatusEnum::PUBLISHED;
            $item['sku'] = 'HS-' . $faker->numberBetween(100, 200);
            $item['brand_id'] = $faker->numberBetween(1, 7);
            $item['tax_id'] = 1;
            $item['views'] = $faker->numberBetween(1000, 200000);
            $item['quantity'] = $faker->numberBetween(10, 20);
            $item['length'] = $faker->numberBetween(10, 20);
            $item['wide'] = $faker->numberBetween(10, 20);
            $item['height'] = $faker->numberBetween(10, 20);
            $item['weight'] = $faker->numberBetween(500, 900);
            $item['with_storehouse_management'] = true;

            $images = [
                'products/' . ($key + 1) . '.jpg',
            ];

            for ($i = 1; $i <= 10; $i++) {
                if (File::exists(database_path('seeders/files/products/' . ($key + 1) . '-' . $i . '.jpg'))) {
                    $images[] = 'products/' . ($key + 1) . '-' . $i . '.jpg';
                }
            }

            $item['images'] = json_encode($images);

            $product = Product::create($item);

            Slug::create([
                'reference_type' => Product::class,
                'reference_id'   => $product->id,
                'key'            => Str::slug($product->name),
                'prefix'         => SlugHelper::getPrefix(Product::class),
            ]);

            $product->productCollections()->sync([$faker->numberBetween(1, 3)]);

            if ($product->id % 3 == 0) {
                $product->productLabels()->sync([$faker->numberBetween(1, 3)]);
            }

            $product->categories()->sync([
                $faker->numberBetween(1, 14),
                $faker->numberBetween(1, 14),
                $faker->numberBetween(1, 14),
            ]);

            $product->tags()->sync([
                $faker->numberBetween(1, 6),
                $faker->numberBetween(1, 6),
                $faker->numberBetween(1, 6),
            ]);
        }

        $countProducts = count($products);

        foreach ($products as $key => $item) {
            $product = Product::find($key + 1);
            if (!$product) {
                continue;
            }

            $product->productAttributeSets()->sync([1, 2]);
            $product->productAttributes()->sync([$faker->numberBetween(1, 5), $faker->numberBetween(6, 10)]);

            $product->crossSales()->sync([
                $this->random(1, $countProducts, [$product->id]),
                $this->random(1, $countProducts, [$product->id]),
                $this->random(1, $countProducts, [$product->id]),
                $this->random(1, $countProducts, [$product->id]),
            ]);

            for ($j = 0; $j < $faker->numberBetween(1, 5); $j++) {
                $variation = Product::create([
                    'name'                       => $product->name,
                    'status'                     => BaseStatusEnum::PUBLISHED,
                    'sku'                        => $product->sku . '-A' . $j,
                    'quantity'                   => $product->quantity,
                    'weight'                     => $product->weight,
                    'height'                     => $product->height,
                    'wide'                       => $product->wide,
                    'length'                     => $product->length,
                    'price'                      => $product->price,
                    'sale_price'                 => $product->id % 4 == 0 ? ($product->price - $product->price * $faker->numberBetween(10,
                            30) / 100) : null,
                    'brand_id'                   => $product->brand_id,
                    'with_storehouse_management' => $product->with_storehouse_management,
                    'is_variation'               => true,
                    'images'                     => json_encode([isset($product->images[$j]) ? $product->images[$j] : Arr::first($product->images)]),
                ]);

                $productVariation = ProductVariation::create([
                    'product_id'              => $variation->id,
                    'configurable_product_id' => $product->id,
                    'is_default'              => $j == 0,
                ]);

                if ($productVariation->is_default) {
                    $product->update([
                        'sku'        => $variation->sku,
                        'sale_price' => $variation->sale_price,
                    ]);
                }

                ProductVariationItem::create([
                    'attribute_id' => $faker->numberBetween(1, 5),
                    'variation_id' => $productVariation->id,
                ]);

                ProductVariationItem::create([
                    'attribute_id' => $faker->numberBetween(6, 10),
                    'variation_id' => $productVariation->id,
                ]);
            }
        }
    }

    /**
     * @param int $from
     * @param int $to
     * @param array $exceptions
     * @return int
     */
    protected function random($from, $to, array $exceptions = [])
    {
        sort($exceptions); // lets us use break; in the foreach reliably
        $number = rand($from, $to - count($exceptions)); // or mt_rand()

        foreach ($exceptions as $exception) {
            if ($number >= $exception) {
                $number++; // make up for the gap
            } else /*if ($number < $exception)*/ {
                break;
            }
        }

        return $number;
    }
}
