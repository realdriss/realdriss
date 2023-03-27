<?php if(empty($widgetSetting) || $widgetSetting->status == 1): ?>
    <div class="col-lg-3 col-md-3 col-sm-6 col-12">
        <a class="dashboard-stat dashboard-stat-v2" style="background-color: <?php echo e($widget->color); ?>; color: #fff" href="<?php echo e($widget->route); ?>">
            <div class="visual">
                <i class="<?php echo e($widget->icon); ?>" style="opacity: .1;"></i>
            </div>
            <div class="details">
                <div class="number">
                    <span data-counter="counterup" data-value="<?php echo e($widget->statsTotal); ?>">0</span>
                </div>
                <div class="desc"> <?php echo e($widget->title); ?> </div>
            </div>
        </a>
    </div>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/core/dashboard/resources/views//widgets/stats.blade.php ENDPATH**/ ?>