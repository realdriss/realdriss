<?php

namespace RealDriss\Newsletter\Providers;

use RealDriss\Newsletter\Events\SubscribeNewsletterEvent;
use RealDriss\Newsletter\Listeners\SubscribeNewsletterListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        SubscribeNewsletterEvent::class => [
            SubscribeNewsletterListener::class,
        ],
    ];
}
