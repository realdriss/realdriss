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
        $this->uploadFiles('news');

        $posts = [
            [
                'name'        => '4 Expert Tips On How To Choose The Right Men’s Wallet',
                'description' => 'You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.',
            ],
            [
                'name'        => 'Sexy Clutches: How to Buy & Wear a Designer Clutch Bag',
                'description' => 'There isn’t much a girl can’t handle with the right accessories. That’s why the perfect women’s clutch bag is a wardrobe essential for first dates and spring weddings.',
            ],
            [
                'name'        => 'The Top 2020 Handbag Trends to Know',
                'description' => 'For the handbag obsessives, let\'s dive into the latter a little more. This year will bring a fresh array of bag designs, and already we\'ve gotten a sneak peek of what both spring and fall 2020 collections have to offer/',
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
                'name' => 'Jquery',
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
            $item['image'] = 'news/' . ($index + 1) . '.jpg';

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
