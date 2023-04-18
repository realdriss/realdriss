<?php

Route::group(['namespace' => 'Theme\RealDriss\Http\Controllers', 'middleware' => ['web', 'core']], function () {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {

        Route::get('ajax/products', 'RealDrissController@ajaxGetProducts')
            ->name('public.ajax.products');

        Route::get('ajax/featured-product-categories', 'RealDrissController@getFeaturedProductCategories')
            ->name('public.ajax.featured-product-categories');

        Route::get('ajax/trending-products', 'RealDrissController@ajaxGetTrendingProducts')
            ->name('public.ajax.trending-products');

        Route::get('ajax/featured-brands', 'RealDrissController@ajaxGetFeaturedBrands')
            ->name('public.ajax.featured-brands');

        Route::get('ajax/featured-products', 'RealDrissController@ajaxGetFeaturedProducts')
            ->name('public.ajax.featured-products');

        Route::get('ajax/top-rated-products', 'RealDrissController@ajaxGetTopRatedProducts')
            ->name('public.ajax.top-rated-products');

        Route::get('ajax/on-sale-products', 'RealDrissController@ajaxGetOnSaleProducts')
            ->name('public.ajax.on-sale-products');

        Route::get('ajax/cart', 'RealDrissController@ajaxCart')
            ->name('public.ajax.cart');

        Route::get('ajax/quick-view/{id}', 'RealDrissController@getQuickView')
            ->name('public.ajax.quick-view');

        Route::get('ajax/featured-posts', 'RealDrissController@ajaxGetFeaturedPosts')
            ->name('public.ajax.featured-posts');

        Route::get('ajax/testimonials', 'RealDrissController@ajaxGetTestimonials')
            ->name('public.ajax.testimonials');

        Route::get('ajax/product-reviews/{id}', 'RealDrissController@ajaxGetProductReviews')
            ->name('public.ajax.product-reviews');

        Route::get('ajax/get-flash-sales', 'RealDrissController@ajaxGetFlashSales')
            ->name('public.ajax.get-flash-sales');
    });

});

Theme::routes();

Route::group(['namespace' => 'Theme\RealDriss\Http\Controllers', 'middleware' => ['web', 'core']], function () {
    Route::group(apply_filters(BASE_FILTER_GROUP_PUBLIC_ROUTE, []), function () {

        Route::get('/', 'RealDrissController@getIndex')
            ->name('public.index');

        Route::get('sitemap.xml', 'RealDrissController@getSiteMap')
            ->name('public.sitemap');

        Route::get('{slug?}' . config('core.base.general.public_single_ending_url'), 'RealDrissController@getView')
            ->name('public.single');

    });

});
