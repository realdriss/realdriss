<?php

namespace RealDriss\Base\Providers;

use RealDriss\Base\Commands\ClearLogCommand;
use RealDriss\Base\Commands\InstallCommand;
use RealDriss\Base\Commands\PublishAssetsCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->commands([
            ClearLogCommand::class,
            InstallCommand::class,
            PublishAssetsCommand::class,
        ]);
    }
}
