<div id="<?php echo e($chart->getElementId()); ?>" style="width: 100%; display: block; min-height: 300px;"></div>

<?php $__env->startPush('footer'); ?>
    <script type="text/javascript">
        jQuery(function () {
            `use strict`;

            Morris.<?php echo e($chart->chartType); ?>(
                <?php echo $chart->toJSON(); ?>

            );
        });
    </script>
<?php $__env->stopPush(); ?>

<?php if($chart->isUseInlineJs()): ?>
    <?php echo Assets::styleToHtml('morris'); ?>

    <?php echo Assets::scriptToHtml('raphael'); ?>

    <?php echo Assets::scriptToHtml('morris'); ?>


    <script type="text/javascript">
        jQuery(function () {
            `use strict`;

            Morris.<?php echo e($chart->chartType); ?>(
               <?php echo $chart->toJSON(); ?>

            );
        });
    </script>
<?php else: ?>
    <?php $__env->startPush('footer'); ?>
        <script type="text/javascript">
            jQuery(function () {
                `use strict`;

                Morris.<?php echo e($chart->chartType); ?>(
                   <?php echo $chart->toJSON(); ?>

                );
            });
        </script>
    <?php $__env->stopPush(); ?>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/core/chart/resources/views//chart.blade.php ENDPATH**/ ?>