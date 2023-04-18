<?php

namespace RealDriss\Ecommerce\Forms\Fields;

use Kris\LaravelFormBuilder\Fields\FormField;

class CategoryMultiField extends FormField
{

    /**
     * {@inheritDoc}
     */
    protected function getTemplate()
    {
        return 'plugins/ecommerce::product-categories.partials.categories-multi';
    }
}
