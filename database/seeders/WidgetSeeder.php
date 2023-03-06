<?php

namespace Database\Seeders;

use Botble\Base\Supports\BaseSeeder;
use Botble\Widget\Models\Widget as WidgetModel;
use Theme;

class WidgetSeeder extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WidgetModel::truncate();

        $widgets = [
            [
                'widget_id'  => 'CustomMenuWidget',
                'sidebar_id' => 'footer_sidebar',
                'position'   => 1,
                'data'       => [
                    'id'      => 'CustomMenuWidget',
                    'name'    => 'Useful Links',
                    'menu_id' => 'useful-links',
                ],
            ],
            [
                'widget_id'  => 'CustomMenuWidget',
                'sidebar_id' => 'footer_sidebar',
                'position'   => 2,
                'data'       => [
                    'id'      => 'CustomMenuWidget',
                    'name'    => 'Categories',
                    'menu_id' => 'categories',
                ],
            ],
            [
                'widget_id'  => 'CustomMenuWidget',
                'sidebar_id' => 'footer_sidebar',
                'position'   => 3,
                'data'       => [
                    'id'      => 'CustomMenuWidget',
                    'name'    => 'My Account',
                    'menu_id' => 'my-account',
                ],
            ],
        ];

        $theme = Theme::getThemeName();

        foreach ($widgets as $item) {
            $item['theme'] = $theme;
            WidgetModel::create($item);
        }
    }
}
