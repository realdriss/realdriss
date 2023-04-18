<?php

namespace RealDriss\SimpleSlider\Providers;

use Illuminate\Routing\Events\RouteMatched;
use RealDriss\Base\Traits\LoadAndPublishDataTrait;
use RealDriss\SimpleSlider\Models\SimpleSlider;
use RealDriss\SimpleSlider\Models\SimpleSliderItem;
use RealDriss\SimpleSlider\Repositories\Caches\SimpleSliderItemCacheDecorator;
use RealDriss\SimpleSlider\Repositories\Eloquent\SimpleSliderItemRepository;
use RealDriss\SimpleSlider\Repositories\Interfaces\SimpleSliderItemInterface;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use RealDriss\SimpleSlider\Repositories\Caches\SimpleSliderCacheDecorator;
use RealDriss\SimpleSlider\Repositories\Eloquent\SimpleSliderRepository;
use RealDriss\SimpleSlider\Repositories\Interfaces\SimpleSliderInterface;
use RealDriss\Base\Supports\Helper;
use Language;

class SimpleSliderServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(SimpleSliderInterface::class, function () {
            return new SimpleSliderCacheDecorator(new SimpleSliderRepository(new SimpleSlider));
        });

        $this->app->bind(SimpleSliderItemInterface::class, function () {
            return new SimpleSliderItemCacheDecorator(new SimpleSliderItemRepository(new SimpleSliderItem));
        });

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->setNamespace('plugins/simple-slider')
            ->loadAndPublishConfigurations(['permissions'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->loadRoutes(['web'])
            ->loadMigrations()
            ->publishAssets();

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-simple-slider',
                'priority'    => 100,
                'parent_id'   => null,
                'name'        => 'plugins/simple-slider::simple-slider.menu',
                'icon'        => 'far fa-image',
                'url'         => route('simple-slider.index'),
                'permissions' => ['simple-slider.index'],
            ]);
        });

        $this->app->booted(function () {
            if (defined('LANGUAGE_MODULE_SCREEN_NAME')) {
                Language::registerModule([SimpleSlider::class]);
            }

            $this->app->register(HookServiceProvider::class);
        });
    }
}
