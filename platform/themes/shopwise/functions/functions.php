<?php

use Botble\SimpleSlider\Models\SimpleSliderItem;
use Botble\Ecommerce\Models\ProductCategory;

register_page_template([
    'homepage'     => __('Homepage'),
    'blog-sidebar' => __('Blog Sidebar'),
]);

register_sidebar([
    'id'          => 'footer_sidebar',
    'name'        => __('Footer sidebar'),
    'description' => __('Sidebar in the footer of site'),
]);

RvMedia::setUploadPathAndURLToPublic();

RvMedia::addSize('medium', 540, 600)->addSize('small', 540, 300);

if (is_plugin_active('ecommerce')) {
    add_action(BASE_ACTION_META_BOXES, function ($context, $object) {
        if (get_class($object) == ProductCategory::class && $context == 'advanced') {
            MetaBox::addMetaBox('additional_product_category_fields', __('Addition Information'), function () {
                $icon = null;
                $args = func_get_args();
                if (!empty($args[0])) {
                    $icon = MetaBox::getMetaData($args[0], 'icon', true);
                }

                return Theme::partial('product-category-fields', compact('icon'));
            }, get_class($object), $context);
        }
    }, 24, 2);

    add_action(BASE_ACTION_AFTER_CREATE_CONTENT, function ($type, $request, $object) {
        if (get_class($object) == ProductCategory::class) {
            MetaBox::saveMetaBoxData($object, 'icon', $request->input('icon'));
        }
    }, 230, 3);

    add_action(BASE_ACTION_AFTER_UPDATE_CONTENT, function ($type, $request, $object) {
        if (get_class($object) == ProductCategory::class) {
            MetaBox::saveMetaBoxData($object, 'icon', $request->input('icon'));
        }
    }, 231, 3);

}

Form::component('themeIcon', Theme::getThemeNamespace() . '::partials.icons-field', [
    'name',
    'value'      => null,
    'attributes' => [],
]);

app()->booted(function () {
    if (is_plugin_active('ecommerce')) {
        ProductCategory::resolveRelationUsing('icon', function ($model) {
            return $model->morphOne(\Botble\Base\Models\MetaBox::class, 'reference')->where('meta_key', 'icon');
        });
    }
});

if (is_plugin_active('simple-slider')) {
    add_filter(BASE_FILTER_BEFORE_RENDER_FORM, function ($form, $data) {
        if (get_class($data) == SimpleSliderItem::class) {

            $value = MetaBox::getMetaData($data, 'button_text', true);

            $form
                ->addAfter('link', 'button_text', 'text', [
                    'label'      => __('Button text'),
                    'label_attr' => ['class' => 'control-label'],
                    'value'      => $value,
                    'attr'       => [
                        'placeholder' => __('Ex: Shop now'),
                    ],
                ]);
        }

        return $form;
    }, 124, 3);

    add_action(BASE_ACTION_AFTER_CREATE_CONTENT, 'save_addition_slider_fields', 120, 3);
    add_action(BASE_ACTION_AFTER_UPDATE_CONTENT, 'save_addition_slider_fields', 120, 3);

    /**
     * @param string $screen
     * @param Request $request
     * @param \Botble\Base\Models\BaseModel $data
     */
    function save_addition_slider_fields($screen, $request, $data)
    {
        if (get_class($data) == SimpleSliderItem::class) {
            MetaBox::saveMetaBoxData($data, 'button_text', $request->input('button_text'));
        }
    }
}
