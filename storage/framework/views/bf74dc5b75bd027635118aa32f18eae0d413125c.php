<style>
    .change-date-range {
        position: absolute;
        top: -52px;
        right: 80px;
    }
    .change-date-range .btn {
        padding: 5px 10px;
        border-radius: 0 !important;
    }
</style>
<div class="col-12">
    <div class="btn-group change-date-range">
        <a class="btn btn-sm btn-secondary" href="javascript:;" data-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-filter" aria-hidden="true"></i>
            <span><?php echo e($defaultRange); ?></span>
            <i class="fa fa-angle-down "></i>
        </a>
        <ul class="dropdown-menu float-right">
            <li>
                <a href="<?php echo e(route('ecommerce.report.revenue', ['filter' => 'date'])); ?>">
                    <?php echo e(trans('plugins/ecommerce::reports.today')); ?>

                </a>
            </li>
            <li>
                <a href="<?php echo e(route('ecommerce.report.revenue', ['filter' => 'week'])); ?>">
                    <?php echo e(trans('plugins/ecommerce::reports.this_week')); ?>

                </a>
            </li>
            <li>
                <a href="<?php echo e(route('ecommerce.report.revenue', ['filter' => 'month'])); ?>">
                    <?php echo e(trans('plugins/ecommerce::reports.this_month')); ?>

                </a>
            </li>
            <li>
                <a href="<?php echo e(route('ecommerce.report.revenue', ['filter' => 'year'])); ?>">
                    <?php echo e(trans('plugins/ecommerce::reports.this_year')); ?>

                </a>
            </li>
        </ul>
    </div>
    <?php if(!empty($chartTime)): ?>
        <?php echo $chartTime->renderChart(); ?>

    <?php else: ?>
        <?php echo $__env->make('core/dashboard::partials.no-data', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php endif; ?>
</div>

<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/plugins/ecommerce/resources/views//reports/partials/revenue.blade.php ENDPATH**/ ?>