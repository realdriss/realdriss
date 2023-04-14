<?php

namespace RealDriss\Backup\Providers;

use RealDriss\Backup\Commands\BackupCreateCommand;
use RealDriss\Backup\Commands\BackupListCommand;
use RealDriss\Backup\Commands\BackupRemoveCommand;
use RealDriss\Backup\Commands\BackupRestoreCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                BackupCreateCommand::class,
                BackupRestoreCommand::class,
                BackupRemoveCommand::class,
                BackupListCommand::class,
            ]);
        }
    }
}
