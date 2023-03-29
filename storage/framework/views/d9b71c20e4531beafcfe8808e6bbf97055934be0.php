
<?php $__env->startSection('content'); ?>
    <div id="dashboard-alerts">
        
    </div>
    <?php echo apply_filters(DASHBOARD_FILTER_ADMIN_NOTIFICATIONS, null); ?>

    <div class="row">
        <?php echo apply_filters(DASHBOARD_FILTER_TOP_BLOCKS, null); ?>

    </div>
    <div class="clearfix"></div>
    <div id="list_widgets" class="row">
        <?php $__currentLoopData = $userWidgets; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $widget): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php echo $widget; ?>

        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <div class="clearfix"></div>
    </div>

    <?php if(count($userWidgets) > 0): ?>
        <a href="#" class="manage-widget"><i class="fa fa-plus"></i> <?php echo e(trans('core/dashboard::dashboard.manage_widgets')); ?></a>
        <?php echo $__env->make('core/dashboard::partials.modals', compact('widgets'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endif; ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('core/base::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\realdriss\core\platform/core/dashboard/resources/views//list.blade.php ENDPATH**/ ?>