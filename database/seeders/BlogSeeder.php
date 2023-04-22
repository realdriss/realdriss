<?php

namespace Database\Seeders;

use RealDriss\ACL\Models\User;
use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Blog\Models\Category;
use RealDriss\Blog\Models\Post;
use RealDriss\Blog\Models\Tag;
use RealDriss\Slug\Models\Slug;
use Faker\Factory;
use Illuminate\Support\Str;
use SlugHelper;

class BlogSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->uploadFiles('posts');

        $posts = [
            [
                'name'        => '4 Expert Tips On How To Choose The Right Men’s Wallet',
                'description' => 'Captivating description.',
            ],
            [
                'name'        => 'Sexy Clutches: How to Buy & Wear a Designer Clutch Bag',
                'description' => 'Captivating description.',
            ],
            [
                'name'        => 'The Top 2020 Handbag Trends to Know',
                'description' => 'Captivating description.',
            ],
        ];

        $tags = [
            [
                'name' => 'General',
            ],
            [
                'name' => 'Design',
            ],
            [
                'name' => 'Software',
            ],
        ];

        $categories = [
            [
                'name'       => 'Ecommerce',
                'is_default' => true,
            ],
            [
                'name' => 'Fashion',
            ],
            [
                'name' => 'Electronic',
            ],
        ];

        Post::truncate();
        Category::truncate();
        Tag::truncate();
        Slug::where('reference_type', Post::class)->delete();
        Slug::where('reference_type', Category::class)->delete();
        Slug::where('reference_type', Tag::class)->delete();

        foreach ($tags as $item) {
            $item['author_id'] = 1;
            $item['author_type'] = User::class;
            $tag = Tag::create($item);

            Slug::create([
                'reference_type' => Tag::class,
                'reference_id'   => $tag->id,
                'key'            => Str::slug($tag->name),
                'prefix'         => SlugHelper::getPrefix(Tag::class),
            ]);
        }

        foreach ($categories as $item) {
            $item['author_id'] = 1;
            $item['author_type'] = User::class;

            $category = Category::create($item);

            Slug::create([
                'reference_type' => Category::class,
                'reference_id'   => $category->id,
                'key'            => Str::slug($category->name),
                'prefix'         => SlugHelper::getPrefix(Category::class),
            ]);
        }

        $faker = Factory::create();

        foreach ($posts as $index => $item) {
            $item['content'] = '<p>I love Ice Spice</p>';
            $item['author_id'] = 1;
            $item['author_type'] = User::class;
            $item['views'] = $faker->numberBetween(100, 2500);
            $item['is_featured'] = true;
            $item['image'] = 'posts/' . ($index + 1) . '.jpg';

            $post = Post::create($item);

            $post->categories()->sync([$faker->numberBetween(1, 4)]);

            $post->tags()->sync([1, 2, 3, 4, 5]);

            Slug::create([
                'reference_type' => Post::class,
                'reference_id'   => $post->id,
                'key'            => Str::slug($post->name),
                'prefix'         => SlugHelper::getPrefix(Post::class),
            ]);
        }
    }
}
