<?php

namespace RealDriss\SocialLogin\Providers;

use RealDriss\Base\Supports\Helper;
use RealDriss\Base\Traits\LoadAndPublishDataTrait;
use RealDriss\SocialLogin\Facades\SocialServiceFacade;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;

class SocialLoginServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->setNamespace('plugins/social-login')
            ->loadAndPublishConfigurations(['permissions', 'general'])
            ->loadMigrations()
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->loadRoutes(['web'])
            ->publishAssets();

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-social-login',
                'priority'    => 5,
                'parent_id'   => 'cms-core-settings',
                'name'        => 'plugins/social-login::social-login.menu',
                'icon'        => null,
                'url'         => route('social-login.settings'),
                'permissions' => ['social-login.settings'],
            ]);
        });

        AliasLoader::getInstance()->alias('SocialService', SocialServiceFacade::class);

        $this->app->register(HookServiceProvider::class);
    }
}
