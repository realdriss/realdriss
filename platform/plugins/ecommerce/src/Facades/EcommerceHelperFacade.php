<?php

namespace RealDriss\Ecommerce\Facades;

use RealDriss\Ecommerce\Supports\EcommerceHelper;
use Illuminate\Support\Facades\Facade;

class EcommerceHelperFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return EcommerceHelper::class;
    }
}
