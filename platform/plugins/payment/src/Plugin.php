<?php

namespace RealDriss\Payment;

use RealDriss\PluginManagement\Abstracts\PluginOperationAbstract;
use Illuminate\Support\Facades\Schema;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('payments');
    }
}
