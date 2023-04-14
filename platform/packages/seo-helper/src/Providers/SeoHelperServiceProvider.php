<?php

namespace RealDriss\SeoHelper\Providers;

use RealDriss\Base\Supports\Helper;
use RealDriss\Base\Traits\LoadAndPublishDataTrait;
use RealDriss\SeoHelper\Contracts\SeoHelperContract;
use RealDriss\SeoHelper\Contracts\SeoMetaContract;
use RealDriss\SeoHelper\Contracts\SeoOpenGraphContract;
use RealDriss\SeoHelper\Contracts\SeoTwitterContract;
use RealDriss\SeoHelper\SeoHelper;
use RealDriss\SeoHelper\SeoMeta;
use RealDriss\SeoHelper\SeoOpenGraph;
use RealDriss\SeoHelper\SeoTwitter;
use Illuminate\Support\ServiceProvider;

/**
 * @since 02/12/2015 14:09 PM
 */
class SeoHelperServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(SeoMetaContract::class, SeoMeta::class);
        $this->app->bind(SeoHelperContract::class, SeoHelper::class);
        $this->app->bind(SeoOpenGraphContract::class, SeoOpenGraph::class);
        $this->app->bind(SeoTwitterContract::class, SeoTwitter::class);

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->setNamespace('packages/seo-helper')
            ->loadAndPublishConfigurations(['general'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->publishAssets();

        $this->app->register(EventServiceProvider::class);

        $this->app->booted(function () {
            $this->app->register(HookServiceProvider::class);
        });
    }
}
