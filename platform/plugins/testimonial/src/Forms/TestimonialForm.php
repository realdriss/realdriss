<?php

namespace RealDriss\Testimonial\Forms;

use RealDriss\Base\Enums\BaseStatusEnum;
use RealDriss\Base\Forms\FormAbstract;
use RealDriss\Testimonial\Http\Requests\TestimonialRequest;
use RealDriss\Testimonial\Models\Testimonial;

class TestimonialForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $this
            ->setupModel(new Testimonial)
            ->setValidatorClass(TestimonialRequest::class)
            ->withCustomFields()
            ->add('name', 'text', [
                'label'      => trans('core/base::forms.name'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => trans('core/base::forms.name_placeholder'),
                    'data-counter' => 120,
                ],
            ])
            ->add('company', 'text', [
                'label'      => trans('plugins/testimonial::testimonial.company'),
                'label_attr' => ['class' => 'control-label'],
                'attr'       => [
                    'placeholder'  => trans('plugins/testimonial::testimonial.company'),
                    'data-counter' => 120,
                ],
            ])
            ->add('content', 'editor', [
                'label'      => trans('core/base::forms.content'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'rows'        => 4,
                    'placeholder' => trans('core/base::forms.description_placeholder'),
                ],
            ])
            ->add('status', 'customSelect', [
                'label'      => trans('core/base::tables.status'),
                'label_attr' => ['class' => 'control-label required'],
                'choices'    => BaseStatusEnum::labels(),
            ])
            ->add('image', 'mediaImage', [
                'label'      => trans('core/base::forms.image'),
                'label_attr' => ['class' => 'control-label'],
            ])
            ->setBreakFieldPoint('status');
    }
}
