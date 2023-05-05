<?php

namespace Database\Seeders;

use RealDriss\Base\Supports\BaseSeeder;
use RealDriss\Blog\Models\Category;
use RealDriss\Blog\Models\Post;


class FrontierSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->truncateKeyTables();
        $this->activateAllPlugins();
    }
}
