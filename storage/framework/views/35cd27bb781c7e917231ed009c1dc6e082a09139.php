<div id="<?php echo e($name); ?>" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog <?php echo e($modal_size); ?> <?php if(!$modal_size): ?> <?php if(strlen($content) < 120): ?> modal-xs <?php elseif(strlen($content) > 1000): ?> modal-lg <?php endif; ?> <?php endif; ?>">
        <div class="modal-content">
            <div class="modal-header bg-<?php echo e($type); ?>">
                <h4 class="modal-title"><i class="til_img"></i><strong><?php echo $title; ?></strong></h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="modal-body with-padding">
                <?php echo $content; ?>

            </div>

            <div class="modal-footer">
                <button class="float-left btn btn-warning" data-dismiss="modal"><?php echo e(trans('core/base::tables.cancel')); ?></button>
                <a class="float-right btn btn-<?php echo e($type); ?>" id="<?php echo e($action_id); ?>" href="#"><?php echo $action_name; ?></a>
            </div>
        </div>
    </div>
</div>
<!-- end Modal --><?php /**PATH C:\xampp\htdocs\realdriss\core\platform/core/base/resources/views//forms/partials/modal.blade.php ENDPATH**/ ?>