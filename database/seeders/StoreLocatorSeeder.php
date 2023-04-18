<?php

namespace Database\Seeders;

use RealDriss\Ecommerce\Models\StoreLocator;
use Illuminate\Database\Seeder;

class StoreLocatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        StoreLocator::truncate();

        StoreLocator::create([
            'name'                 => 'RealDriss',
            'email'                => 'sales@info.com',
            'phone'                => '+2547-9906-6109',
            'address'              => 'Pioneer Business Center',
            'state'                => 'UG',
            'city'                 => 'Eldoret',
            'country'              => 'KE',
            'is_primary'           => 1,
            'is_shipping_location' => 1,
        ]);
    }
}
