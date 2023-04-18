<?php

namespace RealDriss\Widget\Repositories\Eloquent;

use RealDriss\Support\Repositories\Eloquent\RepositoriesAbstract;
use RealDriss\Widget\Repositories\Interfaces\WidgetInterface;

class WidgetRepository extends RepositoriesAbstract implements WidgetInterface
{
    /**
     * {@inheritDoc}
     */
    public function getByTheme($theme)
    {
        $data = $this->model->where('theme', $theme)->get();
        $this->resetModel();

        return $data;
    }
}
