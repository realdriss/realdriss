<?php

namespace RealDriss\Menu\Providers;

use RealDriss\Base\Events\DeletedContentEvent;
use RealDriss\Menu\Listeners\DeleteMenuNodeListener;
use RealDriss\Menu\Listeners\UpdateMenuNodeUrlListener;
use RealDriss\Slug\Events\UpdatedSlugEvent;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        UpdatedSlugEvent::class    => [
            UpdateMenuNodeUrlListener::class,
        ],
        DeletedContentEvent::class => [
            DeleteMenuNodeListener::class,
        ],
    ];
}
