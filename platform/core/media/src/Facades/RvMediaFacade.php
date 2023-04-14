<?php

namespace RealDriss\Media\Facades;

use RealDriss\Media\RvMedia;
use Illuminate\Support\Facades\Facade;

class RvMediaFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return RvMedia::class;
    }
}
