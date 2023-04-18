<?php

namespace RealDriss\DevTool\Providers;

use RealDriss\DevTool\Commands\LocaleCreateCommand;
use RealDriss\DevTool\Commands\LocaleRemoveCommand;
use RealDriss\DevTool\Commands\Make\ControllerMakeCommand;
use RealDriss\DevTool\Commands\Make\FormMakeCommand;
use RealDriss\DevTool\Commands\Make\ModelMakeCommand;
use RealDriss\DevTool\Commands\Make\RepositoryMakeCommand;
use RealDriss\DevTool\Commands\Make\RequestMakeCommand;
use RealDriss\DevTool\Commands\Make\RouteMakeCommand;
use RealDriss\DevTool\Commands\Make\TableMakeCommand;
use RealDriss\DevTool\Commands\PackageCreateCommand;
use RealDriss\DevTool\Commands\PackageRemoveCommand;
use RealDriss\DevTool\Commands\RebuildPermissionsCommand;
use RealDriss\DevTool\Commands\TestSendMailCommand;
use RealDriss\DevTool\Commands\TruncateTablesCommand;
use RealDriss\DevTool\Commands\PackageMakeCrudCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                TableMakeCommand::class,
                ControllerMakeCommand::class,
                RouteMakeCommand::class,
                RequestMakeCommand::class,
                FormMakeCommand::class,
                ModelMakeCommand::class,
                RepositoryMakeCommand::class,
                PackageCreateCommand::class,
                PackageMakeCrudCommand::class,
                PackageRemoveCommand::class,
                TestSendMailCommand::class,
                TruncateTablesCommand::class,
                RebuildPermissionsCommand::class,
                LocaleRemoveCommand::class,
                LocaleCreateCommand::class,
            ]);
        }
    }
}
