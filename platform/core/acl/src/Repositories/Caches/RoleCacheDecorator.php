<?php

namespace RealDriss\ACL\Repositories\Caches;

use RealDriss\ACL\Repositories\Interfaces\RoleInterface;
use RealDriss\Support\Repositories\Caches\CacheAbstractDecorator;

class RoleCacheDecorator extends CacheAbstractDecorator implements RoleInterface
{
    /**
     * {@inheritDoc}
     */
    public function createSlug($name, $id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}
