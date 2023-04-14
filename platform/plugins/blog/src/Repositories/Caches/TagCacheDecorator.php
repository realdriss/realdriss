<?php

namespace RealDriss\Blog\Repositories\Caches;

use RealDriss\Blog\Repositories\Interfaces\TagInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class TagCacheDecorator extends CacheAbstractDecorator implements TagInterface
{
    /**
     * {@inheritDoc}
     */
    public function getDataSiteMap()
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getPopularTags($limit, array $with = ['slugable'], array $withCount = ['posts'])
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getAllTags($active = true)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
