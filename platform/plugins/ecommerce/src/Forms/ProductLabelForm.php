<?php

namespace RealDriss\Ecommerce\Forms;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Forms\FormAbstract;
use RealDriss\Ecommerce\Http\Requests\ProductLabelRequest;
use RealDriss\Ecommerce\Models\ProductLabel;

class ProductLabelForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $this
            ->setupModel(new ProductLabel)
            ->setValidatorClass(ProductLabelRequest::class)
            ->withCustomFields()
            ->add('name', 'text', [
                'label'      => trans('core/base::forms.name'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => trans('core/base::forms.name_placeholder'),
                    'data-counter' => 120,
                ],
            ])
            ->add('color', 'customColor', [
                'label'      => trans('plugins/ecommerce::product-label.color'),
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'placeholder' => trans('plugins/ecommerce::product-label.color_placeholder'),
                ],
            ])
            ->add('status', 'customSelect', [
                'label'      => trans('core/base::tables.status'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'class' => 'form-control select-full',
                ],
                'choices'    => BaseStatusEnum::labels(),
            ])
            ->setBreakFieldPoint('status');
    }
}
