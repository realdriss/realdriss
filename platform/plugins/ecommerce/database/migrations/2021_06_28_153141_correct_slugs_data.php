<?php

use RealDriss\Ecommerce\Models\Product;
use RealDriss\Slug\Models\Slug;
use Illuminate\Database\Migrations\Migration;

class CorrectSlugsData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Slug::join('ec_products', 'ec_products.id', '=', 'slugs.reference_id')
            ->where('reference_type', Product::class)
            ->where('ec_products.is_variation', 1)
            ->delete();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
