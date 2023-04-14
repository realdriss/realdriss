<?php

namespace RealDriss\Base\Providers;

use RealDriss\Base\Events\BeforeEditContentEvent;
use RealDriss\Base\Events\CreatedContentEvent;
use RealDriss\Base\Events\DeletedContentEvent;
use RealDriss\Base\Events\SendMailEvent;
use RealDriss\Base\Events\UpdatedContentEvent;
use RealDriss\Base\Listeners\BeforeEditContentListener;
use RealDriss\Base\Listeners\CreatedContentListener;
use RealDriss\Base\Listeners\DeletedContentListener;
use RealDriss\Base\Listeners\SendMailListener;
use RealDriss\Base\Listeners\UpdatedContentListener;
use Illuminate\Support\Facades\Event;
use File;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        SendMailEvent::class          => [
            SendMailListener::class,
        ],
        CreatedContentEvent::class    => [
            CreatedContentListener::class,
        ],
        UpdatedContentEvent::class    => [
            UpdatedContentListener::class,
        ],
        DeletedContentEvent::class    => [
            DeletedContentListener::class,
        ],
        BeforeEditContentEvent::class => [
            BeforeEditContentListener::class,
        ],
    ];

    public function boot()
    {
        parent::boot();

        Event::listen(['cache:cleared'], function () {
            File::delete([storage_path('cache_keys.json'), storage_path('settings.json')]);
        });
    }
}
