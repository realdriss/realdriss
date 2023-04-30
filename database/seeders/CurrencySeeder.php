<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Ecommerce\Models\Currency;

class CurrencySeeder extends BaseSeeder
{
    public function run()
    {
        Currency::truncate();

        $currencies = [
            [
                'title'            => 'KES',
                'symbol'           => 'Ksh. ',
                'is_prefix_symbol' => true,
                'order'            => 0,
                'decimals'         => 2,
                'is_default'       => 1,
                'exchange_rate'    => 1,
            ],
            [
                'title'            => 'USD',
                'symbol'           => '$',
                'is_prefix_symbol' => true,
                'order'            => 1,
                'decimals'         => 2,
                'is_default'       => 0,
                'exchange_rate'    => 0.009,
            ],
        ];

        foreach ($currencies as $currency) {
            Currency::create($currency);
        }
    }
}
