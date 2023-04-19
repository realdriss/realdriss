<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Ecommerce\Models\Address;
use RealDriss\Ecommerce\Models\Customer;
use Faker\Factory;

class CustomerSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->uploadFiles('customers');

        $faker = Factory::create();

        Customer::truncate();
        Address::truncate();

        $customer = Customer::create([
            'name'     => 'Godwin Waswa',
            'email'    => 'godwnwaswa@gmail.com',
            'password' => bcrypt('godwin@18'),
            'phone'    => "0794057230",
            'avatar'   => 'customers/godwin.jpg',
        ]);

        $customer->confirmed_at = now();
        $customer->save();

        Address::create([
            'name'        => $customer->name,
            'phone'       => $customer->phone,
            'email'       => $customer->email,
            'country'     => "KE",
            'state'       => "Uasin Gishu",
            'city'        => "Eldoret",
            'address'     => "Pioneer BC",
            'zip_code'    => $faker->postcode,
            'customer_id' => $customer->id,
            'is_default'  => true,
        ]);

        for ($i = 0; $i < 3; $i++) {
            $customer = Customer::create([
                'name'     => $faker->name,
                'email'    => $faker->unique()->safeEmail,
                'password' => bcrypt('realdriss@2023'),
                'phone'    => $faker->e164PhoneNumber,
                'avatar'   => 'customers/' . ($i + 1) . '.jpg',
            ]);

            $customer->confirmed_at = now();
            $customer->save();

            Address::create([
                'name'        => $customer->name,
                'phone'       => $customer->phone,
                'email'       => $customer->email,
                'country'     => "KE",
                'state'       => $faker->state,
                'city'        => $faker->city,
                'address'     => $faker->streetAddress,
                'zip_code'    => $faker->postcode,
                'customer_id' => $customer->id,
                'is_default'  => true,
            ]);
        }
    }
}
