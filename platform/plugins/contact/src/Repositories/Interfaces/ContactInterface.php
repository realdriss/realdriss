<?php

namespace RealDriss\Contact\Repositories\Interfaces;

use RealDriss\Support\Repositories\Interfaces\RepositoryInterface;

interface ContactInterface extends RepositoryInterface
{
    /**
     * @param array $select
     * @return mixed
     */
    public function getUnread($select = ['*']);

    /**
     * @return int
     */
    public function countUnread();
}
