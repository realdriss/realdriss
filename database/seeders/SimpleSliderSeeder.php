<?php

namespace Database\Seeders;

use Botble\Base\Supports\BaseSeeder;
use Botble\SimpleSlider\Models\SimpleSlider;
use Botble\SimpleSlider\Models\SimpleSliderItem;
use Illuminate\Support\Arr;
use MetaBox;

class SimpleSliderSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->uploadFiles('sliders');

        SimpleSlider::truncate();
        SimpleSliderItem::truncate();

        SimpleSlider::create([
            'name'        => 'Home slider',
            'key'         => 'home-slider',
            'description' => 'The main slider on homepage',
        ]);

        $items = [
            [
                'title'       => 'Woman Fashion',
                'description' => 'Get up to 50% off Today Only!',
                'button_text' => 'Shop now',
            ],
            [
                'title'       => 'Man Fashion',
                'description' => '50% off in all products',
                'button_text' => 'Discover now',
            ],
            [
                'title'       => 'Summer Sale',
                'description' => 'Taking your Viewing Experience to Next Level',
                'button_text' => 'Shop now',
            ],
        ];

        foreach ($items as $index => $item) {
            $item['order'] = $index + 1;
            $item['simple_slider_id'] = 1;
            $item['image'] = 'sliders/' . ($index + 1) . '.jpg';
            $item['link'] = '/products';

            $sliderItem = SimpleSliderItem::create(Arr::except($item, ['button_text']));

            MetaBox::saveMetaBoxData($sliderItem, 'button_text', $item['button_text']);
        }
    }
}
