<?php

namespace RealDriss\Blog\Providers;

use RealDriss\Shortcode\View\View;
use Illuminate\Routing\Events\RouteMatched;
use RealDriss\Base\Supports\Helper;
use RealDriss\Base\Traits\LoadAndPublishDataTrait;
use RealDriss\Blog\Models\Post;
use RealDriss\Blog\Repositories\Caches\PostCacheDecorator;
use RealDriss\Blog\Repositories\Eloquent\PostRepository;
use RealDriss\Blog\Repositories\Interfaces\PostInterface;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use RealDriss\Blog\Models\Category;
use RealDriss\Blog\Repositories\Caches\CategoryCacheDecorator;
use RealDriss\Blog\Repositories\Eloquent\CategoryRepository;
use RealDriss\Blog\Repositories\Interfaces\CategoryInterface;
use RealDriss\Blog\Models\Tag;
use RealDriss\Blog\Repositories\Caches\TagCacheDecorator;
use RealDriss\Blog\Repositories\Eloquent\TagRepository;
use RealDriss\Blog\Repositories\Interfaces\TagInterface;
use Language;
use Note;
use SeoHelper;
use SlugHelper;

/**
 * @since 02/07/2016 09:50 AM
 */
class BlogServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(PostInterface::class, function () {
            return new PostCacheDecorator(new PostRepository(new Post));
        });

        $this->app->bind(CategoryInterface::class, function () {
            return new CategoryCacheDecorator(new CategoryRepository(new Category));
        });

        $this->app->bind(TagInterface::class, function () {
            return new TagCacheDecorator(new TagRepository(new Tag));
        });

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        SlugHelper::registerModule(Post::class, 'Blog Posts');
        SlugHelper::registerModule(Category::class, 'Blog Categories');
        SlugHelper::registerModule(Tag::class, 'Blog Tags');

        SlugHelper::setPrefix(Tag::class, 'tag');

        $this->setNamespace('plugins/blog')
            ->loadAndPublishConfigurations(['permissions'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->loadRoutes(['web', 'api'])
            ->loadMigrations()
            ->publishAssets();

        $this->app->register(EventServiceProvider::class);

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()
                ->registerItem([
                    'id'          => 'cms-plugins-blog',
                    'priority'    => 3,
                    'parent_id'   => null,
                    'name'        => 'plugins/blog::base.menu_name',
                    'icon'        => 'fa fa-edit',
                    'url'         => route('posts.index'),
                    'permissions' => ['posts.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-blog-post',
                    'priority'    => 1,
                    'parent_id'   => 'cms-plugins-blog',
                    'name'        => 'plugins/blog::posts.menu_name',
                    'icon'        => null,
                    'url'         => route('posts.index'),
                    'permissions' => ['posts.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-blog-categories',
                    'priority'    => 2,
                    'parent_id'   => 'cms-plugins-blog',
                    'name'        => 'plugins/blog::categories.menu_name',
                    'icon'        => null,
                    'url'         => route('categories.index'),
                    'permissions' => ['categories.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-blog-tags',
                    'priority'    => 3,
                    'parent_id'   => 'cms-plugins-blog',
                    'name'        => 'plugins/blog::tags.menu_name',
                    'icon'        => null,
                    'url'         => route('tags.index'),
                    'permissions' => ['tags.index'],
                ]);
        });

        $this->app->booted(function () {
            $models = [Post::class, Category::class, Tag::class];

            if (defined('LANGUAGE_MODULE_SCREEN_NAME')) {
                Language::registerModule($models);
            }

            SeoHelper::registerModule($models);

            $configKey = 'packages.revision.general.supported';
            config()->set($configKey, array_merge(config($configKey, []), [Post::class]));

            if (defined('NOTE_FILTER_MODEL_USING_NOTE')) {
                Note::registerModule(Post::class);
            }

            $this->app->register(HookServiceProvider::class);
        });

        if (function_exists('shortcode')) {
            view()->composer([
                'plugins/blog::themes.post',
                'plugins/blog::themes.category',
                'plugins/blog::themes.tag',
            ], function (View $view) {
                $view->withShortcodes();
            });
        }
    }
}
