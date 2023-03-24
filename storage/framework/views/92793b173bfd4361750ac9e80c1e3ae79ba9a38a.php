<div id="hide_widget_modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header bg-danger">
                <h4 class="modal-title"><i class="til_img"></i><strong><?php echo e(trans('core/dashboard::dashboard.confirm_hide')); ?></strong></h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>

            <div class="modal-body with-padding">
                <p><?php echo e(trans('core/dashboard::dashboard.hide_message')); ?></p>
            </div>

            <div class="modal-footer">
                <a class="float-left btn btn-danger" href="#" id="hide-widget-confirm-bttn"><?php echo e(trans('core/dashboard::dashboard.confirm_hide_btn')); ?></a>
                <button class="float-right btn btn-primary" data-dismiss="modal"><?php echo e(trans('core/dashboard::dashboard.cancel_hide_btn')); ?></button>
            </div>
        </div>
    </div>
</div>

<div id="manage_widget_modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <?php echo Form::open(['route' => 'dashboard.hide_widgets']); ?>

                <div class="modal-header">
                    <h4 class="modal-title"><i class="til_img"></i><strong><?php echo e(trans('core/dashboard::dashboard.manage_widgets')); ?></strong></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body with-padding">
                    <?php $__currentLoopData = $widgets; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $widget): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php $widget_setting = $widget->settings->first(); ?>
                        <section class="wrap_<?php echo e($widget->name); ?>">
                            <i class="<?php echo e($widget->icon ?? 'box_img_sale ' . $widget->name); ?> <?php if($widget_setting && $widget_setting->status == 0): ?> widget_none_color <?php endif; ?>" style="background-color: <?php echo e($widget->color ?? '#7c87b6'); ?>"></i>
                            <span class="widget_name"><?php echo e($widget->title); ?></span>
                            <div class="swc_wrap">
                                <?php echo Form::onOff('widgets[' . $widget->name . ']', $widget_setting ? $widget_setting->status : true, ['data-target' => $widget->name]); ?>

                            </div>
                        </section>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal"><?php echo e(trans('core/base::forms.cancel')); ?></button>
                    <button type="submit" class="btn btn-primary"><?php echo e(trans('core/base::forms.save')); ?></button>
                </div>
            <?php echo Form::close(); ?>

        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/core/dashboard/resources/views//partials/modals.blade.php ENDPATH**/ ?>