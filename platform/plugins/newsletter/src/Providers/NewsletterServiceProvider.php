<?php

namespace Botble\Newsletter\Providers;

use Botble\Base\Supports\Helper;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Botble\Newsletter\Models\Newsletter;
use Botble\Newsletter\Repositories\Caches\NewsletterCacheDecorator;
use Botble\Newsletter\Repositories\Eloquent\NewsletterRepository;
use Botble\Newsletter\Repositories\Interfaces\NewsletterInterface;
use EmailHandler;
use Illuminate\Support\Facades\Event;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Support\ServiceProvider;

class NewsletterServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->singleton(NewsletterInterface::class, function () {
            return new NewsletterCacheDecorator(
                new NewsletterRepository(new Newsletter)
            );
        });

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->setNamespace('plugins/newsletter')
            ->loadAndPublishConfigurations(['permissions', 'email', 'general'])
            ->loadAndPublishTranslations()
            ->loadRoutes(['web'])
            ->loadAndPublishViews()
            ->loadMigrations();

        $this->app->register(EventServiceProvider::class);

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-newsletter',
                'priority'    => 6,
                'parent_id'   => null,
                'name'        => 'plugins/newsletter::newsletter.name',
                'icon'        => 'far fa-newspaper',
                'url'         => route('newsletter.index'),
                'permissions' => ['newsletter.index'],
            ]);

            EmailHandler::addTemplateSettings(NEWSLETTER_MODULE_SCREEN_NAME, config('plugins.newsletter.email', []));
        });

        add_filter(BASE_FILTER_AFTER_SETTING_CONTENT, [$this, 'addSettings'], 249);

        $this->app->booted(function () {
            $mailchimpApiKey = setting('newsletter_mailchimp_api_key',
                config('plugins.newsletter.general.mailchimp.api_key'));
            $mailchimpListId = setting('newsletter_mailchimp_list_id',
                config('plugins.newsletter.general.mailchimp.list_id'));

            config([
                'newsletter.apiKey'               => $mailchimpApiKey,
                'newsletter.lists.subscribers.id' => $mailchimpListId,
            ]);
        });
    }

    /**
     * @param null $data
     * @return string
     * @throws \Throwable
     */
    public function addSettings($data = null)
    {
        return $data . view('plugins/newsletter::setting')->render();
    }
}
