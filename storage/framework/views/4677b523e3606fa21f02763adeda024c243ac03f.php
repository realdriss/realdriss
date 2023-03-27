<!-- START SECTION CATEGORIES -->
<div class="section small_pb small_pt">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="heading_s4 text-center">
                    <h2><?php echo clean($title); ?></h2>
                </div>
                <p class="text-center leads">
                    <?php if($description): ?>
                        <?php echo clean($description); ?>

                    <?php endif; ?>
                    <?php if($subtitle): ?>
                        <?php echo clean($subtitle); ?>

                    <?php endif; ?>
                </p>
            </div>
        </div>
        <div class="row align-items-center">
            <featured-product-categories-component url="<?php echo e(route('public.ajax.featured-product-categories')); ?>"></featured-product-categories-component>
        </div>
    </div>
</div>
<!-- END SECTION CATEGORIES -->
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/partials/shortcodes/featured-product-categories.blade.php ENDPATH**/ ?>