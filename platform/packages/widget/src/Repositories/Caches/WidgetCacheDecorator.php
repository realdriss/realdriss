<?php

namespace RealDriss\Widget\Repositories\Caches;

use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;
use RealDriss\Widget\Repositories\Interfaces\WidgetInterface;

class WidgetCacheDecorator extends CacheAbstractDecorator implements WidgetInterface
{
    /**
     * {@inheritDoc}
     */
    public function getByTheme($theme)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
