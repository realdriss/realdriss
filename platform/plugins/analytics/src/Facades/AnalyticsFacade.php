<?php

namespace RealDriss\Analytics\Facades;

use RealDriss\Analytics\Analytics;
use Illuminate\Support\Facades\Facade;

/**
 * @see \RealDriss\Analytics\Analytics
 */
class AnalyticsFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Analytics::class;
    }
}
