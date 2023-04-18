<?php

namespace RealDriss\Contact\Repositories\Eloquent;

use RealDriss\Contact\Enums\ContactStatusEnum;
use RealDriss\Contact\Repositories\Interfaces\ContactInterface;
use RealDriss\Support\Repositories\Eloquent\RepositoriesAbstract;

class ContactRepository extends RepositoriesAbstract implements ContactInterface
{
    /**
     * {@inheritDoc}
     */
    public function getUnread($select = ['*'])
    {
        $data = $this->model
            ->where('status', ContactStatusEnum::UNREAD)
            ->select($select)
            ->orderBy('created_at', 'DESC')
            ->get();

        $this->resetModel();

        return $data;
    }

    /**
     * {@inheritDoc}
     */
    public function countUnread()
    {
        $data = $this->model->where('status', ContactStatusEnum::UNREAD)->count();
        $this->resetModel();

        return $data;
    }
}
