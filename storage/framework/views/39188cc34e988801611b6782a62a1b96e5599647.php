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
            --color-1st: <?php echo e(theme_option('primary_color', '#FF324D')); ?>;
            --color-2nd: <?php echo e(theme_option('secondary_color', '#1D2224')); ?>;
            --primary-font: '<?php echo e(theme_option('primary_font', 'Poppins')); ?>', sans-serif;
        }
    </style>

    <?php
        SeoHelper::setTitle(__('Oops! The page you requested was not found!'));
        Theme::fire('beforeRenderTheme', app(\Botble\Theme\Contracts\Theme::class));
    ?>
    <?php echo Theme::header(); ?>

</head>
<body <?php if(setting('locale_direction', 'ltr') == 'rtl'): ?> dir="rtl" <?php endif; ?>>
<?php echo Theme::partial('header'); ?>


<div class="section">
    <div class="error_wrap">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-10 order-lg-first">
                    <div class="text-center">
                        <div class="error_txt">404</div>
                        <h5 class="mb-2 mb-sm-3"><?php echo e(__('Oops! The page you requested was not found!')); ?></h5>
                        <p><?php echo e(__('The page you are looking for was moved, removed, renamed or might never existed.')); ?></p>
                        <div class="search_form pb-3 pb-md-4">
                            <form action="<?php echo e(route('public.products')); ?>" method="GET">
                                <input name="q" type="text" placeholder="<?php echo e(__('Search')); ?>" class="form-control">
                                <button type="submit" class="btn icon_search"><i class="ion-ios-search-strong"></i></button>
                            </form>
                        </div>
                        <a href="<?php echo e(url('/')); ?>" class="btn btn-fill-out"><?php echo e(__('Back To Home')); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php echo Theme::partial('footer'); ?>


<?php echo Theme::footer(); ?>

</body>
</html>

<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/themes/shopwise/views/404.blade.php ENDPATH**/ ?>