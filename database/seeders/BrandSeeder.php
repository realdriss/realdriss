<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Ecommerce\Models\Brand;
use RealDriss\Slug\Models\Slug;
use Illuminate\Support\Str;
use SlugHelper;

class BrandSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->uploadFiles('brands');

        $brands = [
            [
                'name' => 'Exotic',
            ],
            [
                'name' => 'Local',
            ],
            [
                'name' => 'N-Vidia',
            ],
            [
                'name' => 'Beats',
            ],
            [
                'name' => 'Samsung',
            ],
            [
                'name' => 'Apple',
            ],
            [
                'name' => 'Tecno',
            ],
        ];

        Brand::truncate();
        Slug::where('reference_type', Brand::class)->delete();

        foreach ($brands as $key => $item) {
            $item['order'] = $key;
            $item['is_featured'] = true;
            $item['logo'] = 'brands/' . ($key + 1) . '.png';
            $brand = Brand::create($item);

            Slug::create([
                'reference_type' => Brand::class,
                'reference_id'   => $brand->id,
                'key'            => Str::slug($brand->name),
                'prefix'         => SlugHelper::getPrefix(Brand::class),
            ]);
        }
    }
}
