<?php

namespace RealDriss\ACL\Providers;

use RealDriss\ACL\Events\RoleAssignmentEvent;
use RealDriss\ACL\Events\RoleUpdateEvent;
use RealDriss\ACL\Listeners\LoginListener;
use RealDriss\ACL\Listeners\RoleAssignmentListener;
use RealDriss\ACL\Listeners\RoleUpdateListener;
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
        RoleUpdateEvent::class     => [
            RoleUpdateListener::class,
        ],
        RoleAssignmentEvent::class => [
            RoleAssignmentListener::class,
        ],
        Login::class               => [
            LoginListener::class,
        ],
    ];
}
