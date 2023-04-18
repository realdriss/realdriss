<?php

namespace RealDriss\AuditLog\Providers;

use RealDriss\AuditLog\Events\AuditHandlerEvent;
use RealDriss\AuditLog\Listeners\AuditHandlerListener;
use RealDriss\AuditLog\Listeners\CreatedContentListener;
use RealDriss\AuditLog\Listeners\DeletedContentListener;
use RealDriss\AuditLog\Listeners\LoginListener;
use RealDriss\AuditLog\Listeners\UpdatedContentListener;
use RealDriss\Base\Events\CreatedContentEvent;
use RealDriss\Base\Events\DeletedContentEvent;
use RealDriss\Base\Events\UpdatedContentEvent;
use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        AuditHandlerEvent::class   => [
            AuditHandlerListener::class,
        ],
        Login::class               => [
            LoginListener::class,
        ],
        UpdatedContentEvent::class => [
            UpdatedContentListener::class,
        ],
        CreatedContentEvent::class => [
            CreatedContentListener::class,
        ],
        DeletedContentEvent::class => [
            DeletedContentListener::class,
        ],
    ];
}
