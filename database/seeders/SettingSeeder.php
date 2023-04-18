<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Blog\Models\Category;
use RealDriss\Blog\Models\Post;
use RealDriss\Blog\Models\Tag;
use RealDriss\Setting\Models\Setting as SettingModel;
use RealDriss\Slug\Models\Slug;
use SlugHelper;

class SettingSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SettingModel::insertOrIgnore([
            [
                'key'   => SlugHelper::getPermalinkSettingKey(Post::class),
                'value' => 'news',
            ],
            [
                'key'   => SlugHelper::getPermalinkSettingKey(Category::class),
                'value' => 'category',
            ],
            [
                'key'   => SlugHelper::getPermalinkSettingKey(Tag::class),
                'value' => 'tags',
            ],
            [
                'key'   => 'payment_cod_status',
                'value' => 1,
            ],
            [
                'key'   => 'payment_cod_description',
                'value' => 'Please pay money directly to the vendor, if you use Cash On Delivery payment method(COD).',
            ],
            [
                'key'   => 'payment_bank_transfer_status',
                'value' => 1,
            ],
            [
                'key'   => 'payment_bank_transfer_description',
                'value' => 'Please send money to our bank account: ACB - 1990 404 19.',
            ],
            [
                'key'   => 'plugins_ecommerce_customer_new_order_status',
                'value' => '0',
            ],
            [
                'key'   => 'plugins_ecommerce_admin_new_order_status',
                'value' => '0',
            ],
            [
                'key'   => 'ecommerce_store_name',
                'value' => 'RealDriss',
            ],
            [
                'key'   => 'ecommerce_store_phone',
                'value' => '+2547-9906-6109',
            ],
            [
                'key'   => 'ecommerce_store_address',
                'value' => 'Pioneer Business Center',
            ],
            [
                'key'   => 'USA',
                'value' => 'New York',
            ],
            [
                'key'   => 'Kenya',
                'value' => 'Eldoret',
            ],
            [
                'key'   => 'ecommerce_store_country',
                'value' => 'KE',
            ],
        ]);

        Slug::where('reference_type', Post::class)->update(['prefix' => 'news']);
        Slug::where('reference_type', Category::class)->update(['prefix' => 'news']);
        Slug::where('reference_type', Tag::class)->update(['prefix' => 'tags']);
    }
}
