<?php

namespace RealDriss\Payment\Forms;

use RealDriss\Base\Forms\FormAbstract;
use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Payment\Http\Requests\PaymentRequest;
use RealDriss\Payment\Models\Payment;

class PaymentForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $this
            ->setupModel(new Payment)
            ->setValidatorClass(PaymentRequest::class)
            ->withCustomFields()
            ->add('name', 'text', [
                'label'      => trans('core/base::forms.name'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => trans('core/base::forms.name_placeholder'),
                    'data-counter' => 120,
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
