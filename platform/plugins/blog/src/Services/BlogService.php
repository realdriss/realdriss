<?php

namespace RealDriss\Blog\Services;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Supports\Helper;
use RealDriss\Blog\Models\Category;
use RealDriss\Blog\Models\Post;
use RealDriss\Blog\Models\Tag;
use RealDriss\Blog\Repositories\Interfaces\CategoryInterface;
use RealDriss\Blog\Repositories\Interfaces\PostInterface;
use RealDriss\Blog\Repositories\Interfaces\TagInterface;
use RealDriss\SeoHelper\SeoOpenGraph;
use Eloquent;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use RvMedia;
use SeoHelper;
use Theme;

class BlogService
{
    /**
     * @param Eloquent $slug
     * @return array|Eloquent
     */
    public function handleFrontRoutes($slug)
    {
        if (!$slug instanceof Eloquent) {
            return $slug;
        }

        $condition = [
            'id'     => $slug->reference_id,
            'status' => BaseStatusEnum::PUBLISHED,
        ];

        if (Auth::check() && request()->input('preview')) {
            Arr::forget($condition, 'status');
        }

        switch ($slug->reference_type) {
            case Post::class:
                $post = app(PostInterface::class)
                    ->getFirstBy($condition, ['*'],
                        ['categories', 'tags', 'slugable', 'categories.slugable', 'tags.slugable']);

                if (empty($post)) {
                    abort(404);
                }

                Helper::handleViewCount($post, 'viewed_post');

                SeoHelper::setTitle($post->name)
                    ->setDescription($post->description);

                $meta = new SeoOpenGraph;
                if ($post->image) {
                    $meta->setImage(RvMedia::getImageUrl($post->image));
                }
                $meta->setDescription($post->description);
                $meta->setUrl($post->url);
                $meta->setTitle($post->name);
                $meta->setType('article');

                SeoHelper::setSeoOpenGraph($meta);

                if (function_exists('admin_bar') && Auth::check() && Auth::user()->hasPermission('posts.edit')) {
                    admin_bar()->registerLink(trans('plugins/blog::posts.edit_this_post'),
                        route('posts.edit', $post->id));
                }

                Theme::breadcrumb()->add(__('Home'), route('public.index'));

                $category = $post->categories->first();
                if ($category) {
                    Theme::breadcrumb()->add($category->name, $category->url);
                }

                do_action(BASE_ACTION_PUBLIC_RENDER_SINGLE, POST_MODULE_SCREEN_NAME, $post);

                Theme::breadcrumb()->add(SeoHelper::getTitle(), $post->url);

                return [
                    'view'         => 'post',
                    'default_view' => 'plugins/blog::themes.post',
                    'data'         => compact('post'),
                    'slug'         => $post->slug,
                ];
            case Category::class:
                $category = app(CategoryInterface::class)
                    ->getFirstBy($condition, ['*'], ['slugable']);

                if (empty($category)) {
                    abort(404);
                }

                SeoHelper::setTitle($category->name)
                    ->setDescription($category->description);

                $meta = new SeoOpenGraph;
                if ($category->image) {
                    $meta->setImage(RvMedia::getImageUrl($category->image));
                }
                $meta->setDescription($category->description);
                $meta->setUrl($category->url);
                $meta->setTitle($category->name);
                $meta->setType('article');

                SeoHelper::setSeoOpenGraph($meta);

                if (function_exists('admin_bar') && Auth::check() && Auth::user()->hasPermission('categories.edit')) {
                    admin_bar()->registerLink(trans('plugins/blog::categories.edit_this_category'),
                        route('categories.edit', $category->id));
                }

                $allRelatedCategoryIds = array_unique(array_merge(
                    app(CategoryInterface::class)->getAllRelatedChildrenIds($category),
                    [$category->id]
                ));

                $posts = app(PostInterface::class)
                    ->getByCategory($allRelatedCategoryIds, theme_option('number_of_posts_in_a_category', 12));

                do_action(BASE_ACTION_PUBLIC_RENDER_SINGLE, CATEGORY_MODULE_SCREEN_NAME, $category);

                Theme::breadcrumb()
                    ->add(__('Home'), route('public.index'))
                    ->add(SeoHelper::getTitle(), $category->url);

                return [
                    'view'         => 'category',
                    'default_view' => 'plugins/blog::themes.category',
                    'data'         => compact('category', 'posts'),
                    'slug'         => $category->slug,
                ];
            case Tag::class:
                $tag = app(TagInterface::class)->getFirstBy($condition, ['*'], ['slugable']);

                if (!$tag) {
                    abort(404);
                }

                SeoHelper::setTitle($tag->name)
                    ->setDescription($tag->description);

                $meta = new SeoOpenGraph;
                $meta->setDescription($tag->description);
                $meta->setUrl($tag->url);
                $meta->setTitle($tag->name);
                $meta->setType('article');

                if (function_exists('admin_bar') && Auth::check() && Auth::user()->hasPermission('tags.edit')) {
                    admin_bar()->registerLink(trans('plugins/blog::tags.edit_this_tag'), route('tags.edit', $tag->id));
                }

                $posts = get_posts_by_tag($tag->id, theme_option('number_of_posts_in_a_tag', 12));

                do_action(BASE_ACTION_PUBLIC_RENDER_SINGLE, TAG_MODULE_SCREEN_NAME, $tag);

                Theme::breadcrumb()
                    ->add(__('Home'), route('public.index'))
                    ->add(SeoHelper::getTitle(), $tag->url);

                return [
                    'view'         => 'tag',
                    'default_view' => 'plugins/blog::themes.tag',
                    'data'         => compact('tag', 'posts'),
                    'slug'         => $tag->slug,
                ];
        }

        return $slug;
    }
}
