<?php

use Botble\Base\Enums\BaseStatusEnum;

app()->booted(function () {
    if (is_plugin_active('ecommerce')) {
        add_shortcode('featured-product-categories', __('Featured Product Categories'),
            __('Featured Product Categories'),
            function ($shortCode) {

                return Theme::partial('shortcodes.featured-product-categories', [
                    'title'       => $shortCode->title,
                    'description' => $shortCode->description,
                    'subtitle'    => $shortCode->subtitle,
                ]);
            });

        shortcode()->setAdminConfig('featured-product-categories',
            Theme::partial('shortcodes.featured-product-categories-admin-config'));

        add_shortcode('featured-brands', __('Featured Brands'), __('Featured Brands'), function ($shortCode) {
            return Theme::partial('shortcodes.featured-brands', [
                'title' => $shortCode->title,
            ]);
        });

        shortcode()->setAdminConfig('featured-brands', Theme::partial('shortcodes.featured-brands-admin-config'));

        add_shortcode('product-collections', __('Product Collections'), __('Product Collections'),
            function ($shortCode) {
                $productCollections = get_product_collections(['status' => BaseStatusEnum::PUBLISHED], [],
                    ['id', 'name', 'slug'])->toArray();

                return Theme::partial('shortcodes.product-collections', [
                    'title'              => $shortCode->title,
                    'productCollections' => $productCollections,
                ]);
            });

        shortcode()->setAdminConfig('product-collections',
            Theme::partial('shortcodes.product-collections-admin-config'));

        add_shortcode('trending-products', __('Trending Products'), __('Trending Products'), function ($shortCode) {
            return Theme::partial('shortcodes.trending-products', [
                'title' => $shortCode->title,
            ]);
        });

        shortcode()->setAdminConfig('trending-products', Theme::partial('shortcodes.trending-products-admin-config'));

        add_shortcode('product-blocks', __('Product Blocks'), __('Product Blocks'), function ($shortCode) {
            return Theme::partial('shortcodes.product-blocks', [
                'featured_product_title'  => $shortCode->featured_product_title,
                'top_rated_product_title' => $shortCode->top_rated_product_title,
                'on_sale_product_title'   => $shortCode->on_sale_product_title,
            ]);
        });

        shortcode()->setAdminConfig('product-blocks', Theme::partial('shortcodes.product-blocks-admin-config'));

        add_shortcode('all-products', __('All Products'), __('All Products'), function ($shortCode) {
            $products = get_products([
                'paginate' => [
                    'per_page'      => $shortCode->per_page,
                    'current_paged' => (int)request()->input('page'),
                ],
            ]);

            return Theme::partial('shortcodes.all-products', [
                'title'    => $shortCode->title,
                'products' => $products,
            ]);
        });

        shortcode()->setAdminConfig('all-products', Theme::partial('shortcodes.all-products-admin-config'));

        add_shortcode('all-brands', __('All Brands'), __('All Brands'), function ($shortCode) {
            $brands = get_all_brands();

            return Theme::partial('shortcodes.all-brands', [
                'title'  => $shortCode->title,
                'brands' => $brands,
            ]);
        });

        shortcode()->setAdminConfig('all-brands', Theme::partial('shortcodes.all-brands-admin-config'));

        add_shortcode('flash-sale', __('Flash sale'), __('Flash sale'), function ($shortCode) {
            return Theme::partial('shortcodes.flash-sale', [
                'title' => $shortCode->title,
            ]);
        });

        shortcode()->setAdminConfig('flash-sale', Theme::partial('shortcodes.flash-sale-admin-config'));
    }

    add_shortcode('banners', __('Banners'), __('Banners'), function ($shortCode) {
        return Theme::partial('shortcodes.banners', [
            'image1' => $shortCode->image1,
            'url1'   => $shortCode->url1,
            'image2' => $shortCode->image2,
            'url2'   => $shortCode->url2,
            'image3' => $shortCode->image3,
            'url3'   => $shortCode->url3,
        ]);
    });

    shortcode()->setAdminConfig('banners', Theme::partial('shortcodes.banners-admin-config'));

    add_shortcode('our-features', __('Our features'), __('Our features'), function ($shortCode) {
        return Theme::partial('shortcodes.our-features', [
            'icon1'        => $shortCode->icon1,
            'title1'       => $shortCode->title1,
            'description1' => $shortCode->description1,
            'subtitle1'    => $shortCode->subtitle1,
            'icon2'        => $shortCode->icon2,
            'title2'       => $shortCode->title2,
            'description2' => $shortCode->description2,
            'subtitle2'    => $shortCode->subtitle2,
            'icon3'        => $shortCode->icon3,
            'title3'       => $shortCode->title3,
            'description3' => $shortCode->description3,
            'subtitle3'    => $shortCode->subtitle3,
        ]);
    });

    shortcode()->setAdminConfig('our-features', Theme::partial('shortcodes.our-features-admin-config'));

    if (is_plugin_active('testimonial')) {
        add_shortcode('testimonials', __('Testimonials'), __('Testimonials'), function ($shortCode) {
            return Theme::partial('shortcodes.testimonials', [
                'title' => $shortCode->title,
            ]);
        });

        shortcode()->setAdminConfig('testimonials', Theme::partial('shortcodes.testimonials-admin-config'));
    }

    if (is_plugin_active('newsletter')) {
        add_shortcode('newsletter-form', __('Newsletter Form'), __('Newsletter Form'), function ($shortCode) {
            return Theme::partial('shortcodes.newsletter-form', [
                'title'       => $shortCode->title,
                'description' => $shortCode->description,
                'subtitle'    => $shortCode->subtitle,
            ]);
        });

        shortcode()->setAdminConfig('newsletter-form', Theme::partial('shortcodes.newsletter-form-admin-config'));
    }

    if (is_plugin_active('contact')) {
        add_filter(CONTACT_FORM_TEMPLATE_VIEW, function () {
            return Theme::getThemeNamespace() . '::partials.shortcodes.contact-form';
        }, 120);
    }

    if (is_plugin_active('blog')) {
        add_shortcode('featured-news', __('Featured News'), __('Featured News'), function ($shortCode) {
            return Theme::partial('shortcodes.featured-news', [
                'title'       => $shortCode->title,
                'description' => $shortCode->description,
                'subtitle'    => $shortCode->subtitle,
            ]);
        });
        shortcode()->setAdminConfig('featured-news', Theme::partial('shortcodes.featured-news-admin-config'));
    }

    if (is_plugin_active('simple-slider')) {
        add_filter(SIMPLE_SLIDER_VIEW_TEMPLATE, function () {
            return Theme::getThemeNamespace() . '::partials.shortcodes.sliders';
        }, 120);
    }

    add_shortcode('google-map', __('Google map'), __('Custom map'), function ($shortCode) {
        return Theme::partial('shortcodes.google-map', ['address' => $shortCode->content]);
    });

    shortcode()->setAdminConfig('google-map', Theme::partial('shortcodes.google-map-admin-config'));

    add_shortcode('youtube-video', __('Youtube video'), __('Add youtube video'), function ($shortCode) {
        $url = rtrim($shortCode->content, '/');
        if (str_contains($url, 'watch?v=')) {
            $url = str_replace('watch?v=', 'embed/', $url);
        } else {
            $exploded = explode('/', $url);

            if (count($exploded) > 1) {
                $url = 'https://www.youtube.com/embed/' . Arr::last($exploded);
            }
        }

        return Theme::partial('shortcodes.youtube-video', compact('url'));
    });

    shortcode()->setAdminConfig('youtube-video', Theme::partial('shortcodes.youtube-video-admin-config'));
});
