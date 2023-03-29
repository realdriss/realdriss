<div class="page-header navbar navbar-static-top">
    <div class="page-header-inner">

            <div class="page-logo">
                <?php if(setting('admin_logo') || config('core.base.general.logo')): ?>
                    <a href="<?php echo e(route('dashboard.index')); ?>">
                        <img src="<?php echo e(setting('admin_logo') ? RvMedia::getImageUrl(setting('admin_logo')) : url(config('core.base.general.logo'))); ?>" alt="logo" class="logo-default" />
                    </a>
                <?php endif; ?>

                <?php if(auth()->guard()->check()): ?>
                    <div class="menu-toggler sidebar-toggler">
                        <span></span>
                    </div>
                <?php endif; ?>
            </div>

            <?php if(auth()->guard()->check()): ?>
                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                    <span></span>
                </a>
            <?php endif; ?>

            <?php echo $__env->make('core/base::layouts.partials.top-menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
</div>
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/core/base/resources/views//layouts/partials/top-header.blade.php ENDPATH**/ ?>