<div class="tools">
    <a href="#" class="<?php echo e(Arr::get($settings, 'state', 'expand')); ?>" data-toggle="tooltip" title="<?php echo e(trans('core/dashboard::dashboard.collapse_expand')); ?>" data-state="<?php echo e(Arr::get($settings, 'state', 'expand') == 'collapse' ? 'expand' : 'collapse'); ?>"></a>
    <a href="#" class="reload" data-toggle="tooltip" title="<?php echo e(trans('core/dashboard::dashboard.reload')); ?>"></a>
    <a href="#" class="fullscreen" data-toggle="tooltip" data-original-title="<?php echo e(trans('core/dashboard::dashboard.fullscreen')); ?>" title="<?php echo e(trans('core/dashboard::dashboard.fullscreen')); ?>"> </a>
    <a href="#" class="remove" data-toggle="tooltip" title="<?php echo e(trans('core/dashboard::dashboard.hide')); ?>"></a>
</div><?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/core/dashboard/resources/views//partials/tools.blade.php ENDPATH**/ ?>