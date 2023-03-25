
<?php $__env->startSection('content'); ?>

    <?php Theme::set('pageName', __('Overview')) ?>
    <div class="card">
        <div class="card-header">
            <h3><?php echo e(__('Account information')); ?></h3>
        </div>
        <div class="card-body">
            <div class="form-group"><i class="fa fa-user"></i> <?php echo e(__('Name')); ?>: <strong><?php echo e(auth('customer')->user()->name); ?></strong></div>
            <div class="form-group"><i class="fa fa-calendar"></i> <?php echo e(__('Date of birth')); ?>: <strong><?php echo e(auth('customer')->user()->dob ? auth('customer')->user()->dob : __('N/A')); ?></strong></div>
            <div class="form-group"><i class="fa fa-envelope"></i> <?php echo e(__('Email')); ?>: <strong><?php echo e(auth('customer')->user()->email); ?></strong></div>
            <div class="form-group"><i class="fa fa-phone"></i> <?php echo e(__('Phone')); ?>: <strong><?php echo e(auth('customer')->user()->phone ? auth('customer')->user()->phone : __('N/A')); ?></strong></div>
        </div>
    </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make(Theme::getThemeNamespace() . '::views.ecommerce.customers.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/customers/overview.blade.php ENDPATH**/ ?>