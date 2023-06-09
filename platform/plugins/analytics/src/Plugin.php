<?php

namespace RealDriss\Analytics;

use RealDriss\PluginManagement\Abstracts\PluginOperationAbstract;
use RealDriss\Dashboard\Models\DashboardWidget;
use RealDriss\Dashboard\Repositories\Interfaces\DashboardWidgetInterface;
use Exception;

class Plugin extends PluginOperationAbstract
{
    /**
     * @throws Exception
     */
    public static function remove()
    {
        $widgets = app(DashboardWidgetInterface::class)
            ->getModel()
            ->whereIn('name', [
                'widget_analytics_general',
                'widget_analytics_page',
                'widget_analytics_browser',
                'widget_analytics_referrer',
            ])
            ->get();

        foreach ($widgets as $widget) {
            /**
             * @var DashboardWidget $widget
             */
            $widget->delete();
        }
    }
}
