<!-- START SECTION BLOG -->
<div class="section pb_20">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
                <div class="heading_s1 text-center">
                    <h2><?php echo clean($title); ?></h2>
                </div>
                <p class="leads text-center">
                <?php if($description): ?>
                    <?php echo clean($description); ?>

                <?php endif; ?>
                <?php if($subtitle): ?>
                    <?php echo clean($subtitle); ?>

                <?php endif; ?>
                </p>
            </div>
        </div>
        <div class="justify-content-center">
            <featured-news-component url="<?php echo e(route('public.ajax.featured-posts')); ?>"></featured-news-component>
        </div>
    </div>
</div>
<!-- END SECTION BLOG -->
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/partials/shortcodes/featured-news.blade.php ENDPATH**/ ?>