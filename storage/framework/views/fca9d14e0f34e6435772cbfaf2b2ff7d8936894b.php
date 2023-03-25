<?php echo Theme::partial('header'); ?>


<div class="breadcrumb_section bg_gray page-title-mini">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="page-title">
                    <h1><?php echo e(Theme::get('pageName')); ?></h1>
                </div>
            </div>
            <div class="col-md-6">
                <?php echo Theme::partial('breadcrumbs'); ?>

            </div>
        </div>
    </div>
</div>

<?php echo Theme::content(); ?>


<?php echo Theme::partial('footer'); ?>

<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/layouts/default.blade.php ENDPATH**/ ?>