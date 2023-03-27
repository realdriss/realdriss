<div class="table-actions">
    <?php echo $extra; ?>

    <?php if(!empty($edit)): ?>
        <?php if(Auth::user()->hasPermission($edit)): ?>
            <a href="<?php echo e(route($edit, $item->id)); ?>" class="btn btn-icon btn-sm btn-primary" data-toggle="tooltip" data-original-title="<?php echo e(trans('core/base::tables.edit')); ?>"><i class="fa fa-edit"></i></a>
        <?php endif; ?>
    <?php endif; ?>

    <?php if(!empty($delete)): ?>
        <?php if(Auth::user()->hasPermission($delete)): ?>
            <a href="#" class="btn btn-icon btn-sm btn-danger deleteDialog" data-toggle="tooltip" data-section="<?php echo e(route($delete, $item->id)); ?>" role="button" data-original-title="<?php echo e(trans('core/base::tables.delete_entry')); ?>" >
                <i class="fa fa-trash"></i>
            </a>
        <?php endif; ?>
    <?php endif; ?>
</div><?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/core/table/resources/views//partials/actions.blade.php ENDPATH**/ ?>