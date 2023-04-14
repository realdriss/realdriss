<?php

namespace RealDriss\Base\Forms\Fields;

use Kris\LaravelFormBuilder\Fields\FormField;

class DateField extends FormField
{

    /**
     * {@inheritDoc}
     */
    protected function getTemplate()
    {
        return 'core/base::forms.fields.date';
    }
}
