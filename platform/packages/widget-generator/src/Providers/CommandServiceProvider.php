<?php

namespace RealDriss\WidgetGenerator\Providers;

use RealDriss\WidgetGenerator\Commands\WidgetCreateCommand;
use RealDriss\WidgetGenerator\Commands\WidgetRemoveCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                WidgetCreateCommand::class,
                WidgetRemoveCommand::class,
            ]);
        }
    }
}
