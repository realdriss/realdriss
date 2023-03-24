<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1" name="viewport"/>
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

        <!-- Google Font -->
        <link href="https://fonts.googleapis.com/css?family=<?php echo e(urlencode(theme_option('primary_font', 'Poppins'))); ?>:200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">

        <style>
            :root {
                --color-1st: <?php echo e(theme_option('primary_color', '#34d39b')); ?>;
                --color-2nd: <?php echo e(theme_option('secondary_color', '#050b08')); ?>;
                --primary-font: '<?php echo e(theme_option('primary_font', 'Poppins')); ?>', sans-serif;
            }
        </style>

        <?php echo Theme::header(); ?>

    </head>
    <body <?php if(BaseHelper::siteLanguageDirection() == 'rtl'): ?> dir="rtl" <?php endif; ?>>
    <?php if(theme_option('preloader_enabled', 'no') == 'yes'): ?>
        <!-- LOADER -->
        <div class="preloader">
            <div class="lds-ellipsis">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <!-- END LOADER -->
    <?php endif; ?>

    <div id="alert-container"></div>

    <?php if(is_plugin_active('newsletter') && theme_option('enable_newsletter_popup', 'yes') === 'yes'): ?>
        <div data-session-domain="<?php echo e(config('session.domain') ?? request()->getHost()); ?>"></div>
        <!-- Home Popup Section -->
        <div class="modal fade subscribe_popup" id="newsletter-modal" data-time="<?php echo e((int)theme_option('newsletter_show_after_seconds', 10) * 1000); ?>" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="ion-ios-close-empty"></i></span>
                        </button>
                        <div class="row no-gutters">
                            <div class="col-sm-5">
                                <?php if(theme_option('newsletter_image')): ?>
                                    <div class="background_bg h-100" data-img-src="<?php echo e(RvMedia::getImageUrl(theme_option('newsletter_image'))); ?>"></div>
                                <?php endif; ?>
                            </div>
                            <div class="col-sm-7">
                                <div class="popup_content">
                                    <div class="popup-text">
                                        <div class="heading_s4">
                                            <h4><?php echo e(__('Subscribe and Get 25% Discount!')); ?></h4>
                                        </div>
                                        <p><?php echo e(__('Subscribe to the newsletter to receive updates about new products.')); ?></p>
                                    </div>
                                    <form method="post" action="<?php echo e(route('public.newsletter.subscribe')); ?>" class="newsletter-form">
                                        <?php echo csrf_field(); ?>
                                        <div class="form-group">
                                            <input name="email" type="email" class="form-control rounded-0" placeholder="<?php echo e(__('Enter Your Email')); ?>">
                                        </div>

                                        <?php if(setting('enable_captcha') && is_plugin_active('captcha')): ?>
                                            <div class="form-group">
                                                <?php echo Captcha::display(); ?>

                                            </div>
                                        <?php endif; ?>

                                        <div class="chek-form text-left form-group">
                                            <div class="custome-checkbox">
                                                <input class="form-check-input" type="checkbox" name="dont_show_again" id="dont_show_again" value="">
                                                <label class="form-check-label" for="dont_show_again"><span><?php echo e(__("Don't show this popup again!")); ?></span></label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-block text-uppercase rounded-0" type="submit" style="background: #333; color: #fff;"><?php echo e(__('Subscribe')); ?></button>
                                        </div>

                                        <div class="form-group">
                                            <div class="newsletter-message newsletter-success-message" style="display: none"></div>
                                            <div class="newsletter-message newsletter-error-message" style="display: none"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Screen Load Popup Section -->
    <?php endif; ?>

    <?php
        if (is_plugin_active('ecommerce')) {
            $categories = get_product_categories(['status' => \Botble\Base\Enums\BaseStatusEnum::PUBLISHED], ['slugable', 'children', 'children.slugable', 'icon'], [], true);
        } else {
            $categories = [];
        }
    ?>

    <!-- START HEADER -->
    <header class="header_wrap <?php if(theme_option('enable_sticky_header', 'yes') == 'yes'): ?> fixed-top header_with_topbar <?php endif; ?>">
        <div class="top-header d-none d-md-block">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                            <ul class="contact_detail text-center text-lg-left">
                                <li><i class="ti-mobile"></i><span><?php echo e(theme_option('hotline')); ?></span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-center justify-content-center justify-content-md-end">
                            <?php if(is_plugin_active('ecommerce')): ?>
                                <?php $currencies = get_all_currencies(); ?>
                                <?php if(count($currencies) > 1): ?>
                                    <div class="mr-3 choose-currency">
                                        <span><?php echo e(__('Currency')); ?>: </span>
                                        <?php $__currentLoopData = $currencies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $currency): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <a href="<?php echo e(route('public.change-currency', $currency->title)); ?>" <?php if(get_application_currency_id() == $currency->id): ?> class="active" <?php endif; ?>><span><?php echo e($currency->title); ?></span></a>&nbsp;
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </div>
                                <?php endif; ?>
                                <ul class="header_list">
                                    <li><a href="<?php echo e(route('public.compare')); ?>"><i class="ti-control-shuffle"></i><span><?php echo e(__('Compare')); ?></span></a></li>
                                    <?php if(!auth('customer')->check()): ?>
                                        <li><a href="<?php echo e(route('customer.login')); ?>"><i class="ti-user"></i><span><?php echo e(__('Login')); ?></span></a></li>
                                    <?php else: ?>
                                        <li><a href="<?php echo e(route('customer.overview')); ?>"><i class="ti-user"></i><span><?php echo e(auth('customer')->user()->name); ?></span></a></li>
                                        <li><a href="<?php echo e(route('customer.logout')); ?>"><i class="ti-lock"></i><span><?php echo e(__('Logout')); ?></span></a></li>
                                    <?php endif; ?>
                                </ul>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="middle-header dark_skin">
            <div class="container">
                <div class="nav_block">
                    <a class="navbar-brand" href="<?php echo e(url('/')); ?>">
                        <img class="logo_dark" src="<?php echo e(RvMedia::getImageUrl(theme_option('logo'))); ?>" alt="<?php echo e(theme_option('site_title')); ?>" />
                    </a>
                    <div class="contact_phone order-md-last">
                        <i class="linearicons-phone-wave"></i>
                        <span><?php echo e(theme_option('hotline')); ?></span>
                    </div>
                    <?php if(is_plugin_active('ecommerce')): ?>
                        <div class="product_search_form">
                            <form action="<?php echo e(route('public.products')); ?>" method="GET">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="custom_select">
                                            <select name="categories[]" class="first_null">
                                                <option value=""><?php echo e(__('All')); ?></option>
                                                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($category->id); ?>" <?php if(in_array($category->id, request()->input('categories', []))): ?> selected <?php endif; ?>><?php echo e($category->name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </select>
                                        </div>
                                    </div>
                                    <input class="form-control" name="q" value="<?php echo e(request()->input('q')); ?>" placeholder="<?php echo e(__('Search Product')); ?>..." required  type="text">
                                    <button type="submit" class="search_btn"><i class="linearicons-magnifier"></i></button>
                                </div>
                            </form>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="bottom_header light_skin main_menu_uppercase bg_dark <?php if(url()->current() === url('')): ?> mb-4 <?php endif; ?>">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-4">
                        <?php if(theme_option('enable_sticky_header', 'yes') == 'yes'): ?>
                            <a class="navbar-brand" href="<?php echo e(url('/')); ?>">
                                <img src="<?php echo e(RvMedia::getImageUrl(theme_option('logo_footer') ? theme_option('logo_footer') : theme_option('logo'))); ?>" alt="<?php echo e(theme_option('site_title')); ?>" />
                            </a>
                        <?php endif; ?>
                        <div class="categories_wrap">
                            <button type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" class="categories_btn">
                                <i class="linearicons-menu"></i><span><?php echo e(__('All Categories')); ?> </span>
                            </button>
                            <div id="navCatContent" class="<?php if(url()->current() === url('') && theme_option('collapsing_product_categories_on_homepage', 'no') == 'no'): ?> nav_cat <?php endif; ?> navbar collapse">
                                <ul>
                                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php if($loop->index < 10): ?>
                                            <li <?php if($category->children->count() > 0): ?> class="dropdown dropdown-mega-menu" <?php endif; ?>>
                                                <a class="dropdown-item nav-link <?php if($category->children->count() > 0): ?> dropdown-toggler <?php endif; ?>" href="<?php echo e($category->url); ?>" <?php if($category->children->count() > 0): ?> data-toggle="dropdown" <?php endif; ?>>
                                                    <?php if($category->icon && count($category->icon->meta_value) > 0): ?>
                                                        <i class="<?php echo e($category->icon->meta_value[0]); ?>"></i>
                                                    <?php endif; ?>
                                                    <span><?php echo e($category->name); ?></span></a>
                                                <?php if($category->children->count() > 0): ?>
                                                    <div class="dropdown-menu">
                                                        <ul class="mega-menu d-lg-flex">
                                                            <li class="mega-menu-col">
                                                                <ul>
                                                                    <?php $__currentLoopData = $category->children; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $childCategory): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                        <li><a class="dropdown-item nav-link nav_item" href="<?php echo e($childCategory->url); ?>"><?php echo e($childCategory->name); ?></a></li>
                                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                <?php endif; ?>
                                            </li>
                                        <?php else: ?>
                                            <?php if($loop->index == 10): ?>
                                            <li>
                                                <ul class="more_slide_open" style="display: none;">
                                            <?php endif; ?>
                                                <li <?php if($category->children->count() > 0): ?> class="dropdown dropdown-mega-menu" <?php endif; ?>>
                                                    <a class="dropdown-item nav-link nav_item <?php if($category->children->count() > 0): ?> dropdown-toggler <?php endif; ?>" href="<?php echo e($category->url); ?>" <?php if($category->children->count() > 0): ?> data-toggle="dropdown" <?php endif; ?>>
                                                        <?php if(count($category->icon->meta_value) > 0): ?>
                                                            <i class="<?php echo e($category->icon->meta_value[0]); ?>"></i>
                                                        <?php endif; ?>
                                                    <span><?php echo e($category->name); ?></span></a>
                                                    <?php if($category->children->count() > 0): ?>
                                                        <div class="dropdown-menu">
                                                            <ul class="mega-menu d-lg-flex">
                                                                <li class="mega-menu-col">
                                                                    <ul>
                                                                        <?php $__currentLoopData = $category->children; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $childCategory): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                            <li><a class="dropdown-item nav-link nav_item" href="<?php echo e($childCategory->url); ?>"><?php echo e($childCategory->name); ?></a></li>
                                                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    <?php endif; ?>
                                                </li>
                                            <?php if($loop->last): ?>
                                                </ul>
                                            </li>
                                            <?php endif; ?>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </ul>
                                <?php if(count($categories) > 10): ?>
                                <div class="more_categories"><?php echo e(__('More Categories')); ?></div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-8 col-sm-6 col-8">
                        <nav class="navbar navbar-expand-lg">
                            <button class="navbar-toggler side_navbar_toggler" type="button" data-toggle="collapse" data-target="#navbarSidetoggle" aria-expanded="false">
                                <span class="ion-android-menu"></span>
                            </button>
                            <div class="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                                <?php echo Menu::renderMenuLocation('main-menu', ['view' => 'menu', 'options' => ['class' => 'navbar-nav']]); ?>

                            </div>
                            <?php if(is_plugin_active('ecommerce')): ?>
                                <ul class="navbar-nav attr-nav align-items-center">
                                    <li><a href="<?php echo e(route('public.wishlist')); ?>" class="nav-link btn-wishlist"><i class="linearicons-heart"></i><span class="wishlist_count"><?php echo e(!auth('customer')->check() ? Cart::instance('wishlist')->count() : auth('customer')->user()->wishlist()->count()); ?></span></a></li>
                                    <?php if(EcommerceHelper::isCartEnabled()): ?>
                                        <li class="dropdown cart_dropdown"><a class="nav-link cart_trigger btn-shopping-cart" href="#" data-toggle="dropdown"><i class="linearicons-cart"></i><span class="cart_count"><?php echo e(Cart::instance('cart')->count()); ?></span></a>
                                            <div class="cart_box dropdown-menu dropdown-menu-right">
                                                <?php echo Theme::partial('cart'); ?>

                                            </div>
                                        </li>
                                    <?php endif; ?>
                                </ul>
                            <?php endif; ?>
                            <div class="pr_search_icon">
                                <a href="javascript:void(0);" class="nav-link pr_search_trigger"><i class="linearicons-magnifier"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- END HEADER -->
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/partials/header.blade.php ENDPATH**/ ?>