<?php if($data instanceof  Illuminate\Pagination\LengthAwarePaginator): ?>
    <div class="row">
        <div class="col-4 number_record">
            <div class="f_com">
                <input type="text" class="numb" value="<?php echo e($limit); ?>"/>
                <div class="btn_grey btn_change_paginate btn_up"></div>
                <div class="btn_grey btn_change_paginate btn_down"></div>
            </div>
        </div>
        <div class="col-8 widget_pagination">
            <span><?php if($data->total() > 0 ): ?><?php echo e(($data->currentPage() - 1) * $limit + 1); ?> <?php else: ?> 0 <?php endif; ?>
                - <?php echo e($limit < $data->total() ? $data->currentPage() * $limit : $data->total()); ?> <?php echo e(trans('core/base::tables.in')); ?> <?php echo e($data->total()); ?> <?php echo e(trans('core/base::tables.records')); ?></span>
            <a class="btn_grey page_previous" href="<?php echo e($data->previousPageUrl()); ?>"></a>
            <a class="btn_grey page_next" href="<?php echo e($data->nextPageUrl()); ?>"></a>
        </div>
    </div>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/core/dashboard/resources/views//partials/paginate.blade.php ENDPATH**/ ?>