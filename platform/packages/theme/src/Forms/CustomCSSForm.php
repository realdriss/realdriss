<?php

namespace RealDriss\Theme\Forms;

use RealDriss\Base\Forms\FormAbstract;
use RealDriss\Base\Models\BaseModel;
use RealDriss\Theme\Http\Requests\CustomCssRequest;
use File;
use Theme;

class CustomCSSForm extends FormAbstract
{
    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $css = null;
        $file = public_path(Theme::path() . '/css/style.integration.css');
        if (File::exists($file)) {
            $css = get_file_data($file, false);
        }

        $this
            ->setupModel(new BaseModel)
            ->setUrl(route('theme.custom-css.post'))
            ->setValidatorClass(CustomCssRequest::class)
            ->add('custom_css', 'textarea', [
                'label'      => trans('packages/theme::theme.custom_css'),
                'label_attr' => ['class' => 'control-label'],
                'value'      => $css,
                'help_block' => [
                    'text' => trans('packages/theme::theme.custom_css_placeholder'),
                ],
            ]);
    }
}
