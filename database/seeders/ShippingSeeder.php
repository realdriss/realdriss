<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Ecommerce\Models\Shipping;
use RealDriss\Ecommerce\Models\ShippingRule;
use Illuminate\Support\Facades\DB;

class ShippingSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Shipping::truncate();
        ShippingRule::truncate();
        DB::table('ec_shipping_rule_items')->truncate();

        Shipping::create(['title' => 'All']);

        ShippingRule::create([
            'name'        => 'Delivery',
            'shipping_id' => 1,
            'type'        => 'base_on_price',
            'from'        => 0,
            'to'          => null,
            'price'       => 0,
        ]);
    }
}
