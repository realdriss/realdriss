<?php if($histories->count() > 0): ?>
    <div class="scroller">
        <ul class="item-list padding">
            <?php $__currentLoopData = $histories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $history): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li>
                    <?php echo $__env->make('plugins/audit-log::activity-line', compact('history'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
    <?php if($histories instanceof Illuminate\Pagination\LengthAwarePaginator && $histories->total() > $limit): ?>
        <div class="widget_footer">
            <?php echo $__env->make('core/dashboard::partials.paginate', ['data' => $histories, 'limit' => $limit], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
    <?php endif; ?>
<?php else: ?>
    <?php echo $__env->make('core/dashboard::partials.no-data', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/plugins/audit-log/resources/views//widgets/activities.blade.php ENDPATH**/ ?>