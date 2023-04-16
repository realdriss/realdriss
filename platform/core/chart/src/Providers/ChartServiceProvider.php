<?php

namespace RealDriss\Chart\Providers;

use RealDriss\Base\Traits\LoadAndPublishDataTrait;
// EO RealDriss namespaced classes.

use Illuminate\Support\ServiceProvider;

class ChartServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function boot()
    {
        $this->setNamespace('core/chart')
            ->loadAndPublishViews();
    }
}
