<?php

namespace RealDriss\PluginManagement\Providers;

use RealDriss\PluginManagement\Commands\PluginActivateAllCommand;
use RealDriss\PluginManagement\Commands\PluginActivateCommand;
use RealDriss\PluginManagement\Commands\PluginAssetsPublishCommand;
use RealDriss\PluginManagement\Commands\PluginDeactivateCommand;
use RealDriss\PluginManagement\Commands\PluginRemoveCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                PluginAssetsPublishCommand::class,
            ]);
        }

        $this->commands([
            PluginActivateCommand::class,
            PluginDeactivateCommand::class,
            PluginRemoveCommand::class,
            PluginActivateAllCommand::class,
        ]);
    }
}
