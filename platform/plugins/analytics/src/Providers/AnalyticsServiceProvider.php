<?php

namespace RealDriss\Analytics\Providers;

use RealDriss\Analytics\Analytics;
use RealDriss\Analytics\AnalyticsClient;
use RealDriss\Analytics\AnalyticsClientFactory;
use RealDriss\Analytics\Facades\AnalyticsFacade;
use RealDriss\Base\Traits\LoadAndPublishDataTrait;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use RealDriss\Analytics\Exceptions\InvalidConfiguration;

class AnalyticsServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(AnalyticsClient::class, function () {
            return AnalyticsClientFactory::createForConfig(config('plugins.analytics.general'));
        });

        $this->app->bind(Analytics::class, function () {
            if (empty(setting('analytics_view_id', config('plugins.analytics.general.view_id')))) {
                throw InvalidConfiguration::viewIdNotSpecified();
            }

            if (!setting('analytics_service_account_credentials')) {
                throw InvalidConfiguration::credentialsIsNotValid();
            }

            return new Analytics(
                $this->app->make(AnalyticsClient::class),
                setting('analytics_view_id', config('plugins.analytics.general.view_id'))
            );
        });

        AliasLoader::getInstance()->alias('Analytics', AnalyticsFacade::class);
    }

    public function boot()
    {
        $this->setNamespace('plugins/analytics')
            ->loadAndPublishConfigurations(['general', 'permissions'])
            ->loadRoutes(['web'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->publishAssets();

        $this->app->booted(function () {
            $this->app->register(HookServiceProvider::class);
        });
    }
}
