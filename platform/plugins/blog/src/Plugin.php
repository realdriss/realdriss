<?php

namespace RealDriss\Blog;

use RealDriss\Blog\Models\Category;
use RealDriss\Blog\Models\Tag;
use RealDriss\Dashboard\Repositories\Interfaces\DashboardWidgetInterface;
use RealDriss\Menu\Repositories\Interfaces\MenuNodeInterface;
use Illuminate\Support\Facades\Schema;
use RealDriss\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('post_tags');
        Schema::dropIfExists('post_categories');
        Schema::dropIfExists('posts');
        Schema::dropIfExists('categories');
        Schema::dropIfExists('tags');

        app(DashboardWidgetInterface::class)->deleteBy(['name' => 'widget_posts_recent']);

        app(MenuNodeInterface::class)->deleteBy(['reference_type' => Category::class]);
        app(MenuNodeInterface::class)->deleteBy(['reference_type' => Tag::class]);
    }
}
