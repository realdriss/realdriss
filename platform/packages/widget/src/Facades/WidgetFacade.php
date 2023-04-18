<?php

namespace RealDriss\Widget\Facades;

use RealDriss\Widget\WidgetGroup;
use Illuminate\Support\Facades\Facade;

class WidgetFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'RealDriss.widget';
    }

    /**
     * Get the widget group object.
     *
     * @param string $name
     *
     * @return WidgetGroup
     */
    public static function group($name)
    {
        return app('RealDriss.widget-group-collection')->group($name);
    }
}
