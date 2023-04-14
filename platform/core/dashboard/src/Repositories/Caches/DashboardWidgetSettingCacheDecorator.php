<?php

namespace RealDriss\Dashboard\Repositories\Caches;

use RealDriss\Dashboard\Repositories\Interfaces\DashboardWidgetSettingInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class DashboardWidgetSettingCacheDecorator extends CacheAbstractDecorator implements DashboardWidgetSettingInterface
{
    /**
     * {@inheritDoc}
     */
    public function getListWidget()
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
