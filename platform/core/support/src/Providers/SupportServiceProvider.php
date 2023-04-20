<?php

namespace RealDriss\Support\Providers;

use File; // Illuminate\Support\Facades\File 
use Illuminate\Support\ServiceProvider;

class SupportServiceProvider extends ServiceProvider
{
    public function register()
    {
        File::requireOnce(__DIR__ . '/../../helpers/common.php');
    }
}
