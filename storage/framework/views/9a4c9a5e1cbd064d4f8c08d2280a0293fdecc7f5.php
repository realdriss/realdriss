<div class="table-wrapper">
    <?php if($table->isHasFilter()): ?>
        <div class="table-configuration-wrap" <?php if(request()->has('filter_table_id')): ?> style="display: block;" <?php endif; ?>>
            <span class="configuration-close-btn btn-show-table-options"><i class="fa fa-times"></i></span>
            <?php echo $table->renderFilter(); ?>

        </div>
    <?php endif; ?>
    <div class="portlet light bordered portlet-no-padding">
        <div class="portlet-title">
            <div class="caption">
                <div class="wrapper-action">
                    <?php if($actions): ?>
                        <div class="btn-group">
                            <a class="btn btn-secondary dropdown-toggle" href="#" data-toggle="dropdown"><?php echo e(trans('core/table::table.bulk_actions')); ?>

                            </a>
                            <ul class="dropdown-menu">
                                <?php $__currentLoopData = $actions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $action): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <li>
                                        <?php echo $action; ?>

                                    </li>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                    <?php if($table->isHasFilter()): ?>
                        <button class="btn btn-primary btn-show-table-options"><?php echo e(trans('core/table::table.filters')); ?></button>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="portlet-body">
            <div class="table-responsive <?php if($actions): ?> table-has-actions <?php endif; ?> <?php if($table->isHasFilter()): ?> table-has-filter <?php endif; ?>">
                <?php $__env->startSection('main-table'); ?>
                    <?php echo $dataTable->table(compact('id', 'class'), false); ?>

                <?php echo $__env->yieldSection(); ?>
            </div>
        </div>
    </div>
</div>
<?php echo $__env->make('core/table::modal', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<?php $__env->startPush('footer'); ?>
    <?php echo $dataTable->scripts(); ?>

<?php $__env->stopPush(); ?>
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/core/table/resources/views//base-table.blade.php ENDPATH**/ ?>