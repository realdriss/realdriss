<div class="modal fade <?php echo e($name); ?>" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header bg-<?php echo e($type); ?>">
                <h4 class="modal-title"><i class="til_img"></i><strong><?php echo e($title); ?></strong></h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="modal-body with-padding">
                <div><?php echo $content; ?></div>
            </div>

            <div class="modal-footer">
                <button class="float-left btn btn-warning" data-dismiss="modal"><?php echo e(trans('core/table::table.cancel')); ?></button>
                <button class="float-right btn btn-<?php echo e($type); ?> <?php echo e(Arr::get($action_button_attributes, 'class')); ?>" <?php echo Html::attributes(Arr::except($action_button_attributes, 'class')); ?>><?php echo e($action_name); ?></button>
            </div>
        </div>
    </div>
</div>
<!-- end Modal -->
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/core/table/resources/views//partials/modal-item.blade.php ENDPATH**/ ?>