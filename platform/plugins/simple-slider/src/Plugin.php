<?php

namespace RealDriss\SimpleSlider;

use Illuminate\Support\Facades\Schema;
use RealDriss\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('simple_sliders');
        Schema::dropIfExists('simple_slider_items');
    }
}
