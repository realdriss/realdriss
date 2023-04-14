<?php

namespace RealDriss\Page\Providers;

use RealDriss\Page\Listeners\RenderingSiteMapListener;
use RealDriss\Theme\Events\RenderingSiteMapEvent;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        RenderingSiteMapEvent::class => [
            RenderingSiteMapListener::class,
        ],
    ];
}
