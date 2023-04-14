<?php

namespace RealDriss\Widget\Facades;

use Illuminate\Support\Facades\Facade;

class WidgetGroupFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'RealDriss.widget-group-collection';
    }
}
