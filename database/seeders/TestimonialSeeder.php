<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Testimonial\Models\Testimonial;
use Faker\Factory;

class TestimonialSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->uploadFiles('testimonials');

        $testimonials = [
            [
                'name'    => 'Donald H. Hilixer',
                'company' => 'Founder, Hilix',
            ],
            [
                'name'    => 'Rosalina D. William',
                'company' => 'Founder, Qux co.',
            ],
            [
                'name'    => 'John Becker',
                'company' => 'CEO, Highlands coffee',
            ],
        ];

        Testimonial::truncate();

        $faker = Factory::create();

        foreach ($testimonials as $index => $item) {
            $item['image'] = 'testimonials/' . ($index + 1) . '.jpg';
            $item['content'] = $faker->realText(50);

            Testimonial::create($item);
        }
    }
}
