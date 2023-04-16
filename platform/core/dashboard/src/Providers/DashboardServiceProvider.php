<?php

namespace RealDriss\Dashboard\Providers;

use RealDriss\Base\Supports\Helper;
use RealDriss\Base\Traits\LoadAndPublishDataTrait;
use RealDriss\Dashboard\Models\DashboardWidget;
use RealDriss\Dashboard\Models\DashboardWidgetSetting;
use RealDriss\Dashboard\Repositories\Caches\DashboardWidgetCacheDecorator;
use RealDriss\Dashboard\Repositories\Caches\DashboardWidgetSettingCacheDecorator;
use RealDriss\Dashboard\Repositories\Eloquent\DashboardWidgetRepository;
use RealDriss\Dashboard\Repositories\Eloquent\DashboardWidgetSettingRepository;
use RealDriss\Dashboard\Repositories\Interfaces\DashboardWidgetInterface;
use RealDriss\Dashboard\Repositories\Interfaces\DashboardWidgetSettingInterface;
// EO RealDriss namespaced classes.

use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

/**
 * @since 02/07/2016 09:50 AM
 */
class DashboardServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(DashboardWidgetInterface::class, function () {
            return new DashboardWidgetCacheDecorator(
                new DashboardWidgetRepository(new DashboardWidget)
            );
        });

        $this->app->bind(DashboardWidgetSettingInterface::class, function () {
            return new DashboardWidgetSettingCacheDecorator(
                new DashboardWidgetSettingRepository(new DashboardWidgetSetting)
            );
        });

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->setNamespace('core/dashboard')
            ->loadRoutes(['web'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->publishAssets()
            ->loadMigrations();

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()
                ->registerItem([
                    'id'          => 'cms-core-dashboard',
                    'priority'    => 0,
                    'parent_id'   => null,
                    'name'        => 'core/base::layouts.dashboard',
                    'icon'        => 'fa fa-home',
                    'url'         => route('dashboard.index'),
                    'permissions' => [],
                ]);
        });
    }
}
