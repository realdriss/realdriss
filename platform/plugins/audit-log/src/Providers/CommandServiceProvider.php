<?php

namespace RealDriss\AuditLog\Providers;

use RealDriss\AuditLog\Commands\ActivityLogClearCommand;
use RealDriss\AuditLog\Commands\CleanOldLogsCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                ActivityLogClearCommand::class,
                CleanOldLogsCommand::class,
            ]);
        }
    }
}
