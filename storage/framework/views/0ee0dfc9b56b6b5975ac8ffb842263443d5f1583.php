<div class="dropdown dropdown-hover">
    <a href="javascript:;"><?php echo e(trans('core/table::table.bulk_change')); ?>

        <i class="fa fa-angle-right"></i>
    </a>
    <div class="dropdown-content">
        <?php $__currentLoopData = $bulk_changes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $bulk_change): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <a href="#" data-key="<?php echo e($key); ?>" data-class-item="<?php echo e($class); ?>" data-save-url="<?php echo e($url); ?>"
               class="bulk-change-item"><?php echo e($bulk_change['title']); ?></a>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/core/table/resources/views//bulk-changes.blade.php ENDPATH**/ ?>