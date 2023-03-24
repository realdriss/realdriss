
<?php $__env->startSection('content'); ?>
    <div class="clearfix"></div>
    <?php if(!function_exists('proc_open')): ?>
        <div class="note note-warning">
            <p><?php echo clean(trans('plugins/backup::backup.proc_open_disabled_error')); ?></p>
        </div>
    <?php endif; ?>

    <div class="note note-warning">
        <p><?php echo clean(trans('plugins/backup::backup.important_message1')); ?></p>
        <p><?php echo clean(trans('plugins/backup::backup.important_message2')); ?></p>
        <p><?php echo clean(trans('plugins/backup::backup.important_message3')); ?></p>
    </div>

    <?php if(auth()->user()->hasPermission('backups.create')): ?>
        <p>
        <button class="btn btn-primary" id="generate_backup">
            <?php echo e(trans('plugins/backup::backup.generate_btn')); ?>

        </button>
        </p>
    <?php endif; ?>

    <table class="table table-striped" id="table-backups">
        <thead>
            <tr>
                <th><?php echo e(trans('core/base::tables.name')); ?></th>
                <th><?php echo e(trans('core/base::tables.description')); ?></th>
                <th><?php echo e(trans('plugins/backup::backup.size')); ?></th>
                <th><?php echo e(trans('core/base::tables.created_at')); ?></th>
                <th><?php echo e(trans('core/table::table.operations')); ?></th>
            </tr>
        </thead>
        <tbody>

            <?php $__empty_1 = true; $__currentLoopData = $backups; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $backup): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <?php echo $__env->make('plugins/backup::partials.backup-item', 
                [
                    'data' => $backup, 
                    'backupManager' => $backupManager, 
                    'key' => $key, 
                    'odd' => $loop->index % 2 == 0 ? true : false
                ], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <tr class="text-center no-backup-row">
                    <td colspan="5"><?php echo e(trans('plugins/backup::backup.no_backups')); ?></td>
                </tr>

            <?php endif; ?>

        </tbody>
    </table>

    <?php if(auth()->user()->hasPermission('backups.create')): ?>

        <?php echo Form::modalAction('create-backup-modal', trans('plugins/backup::backup.create'), 'info', view('plugins/backup::partials.create')->render(), 'create-backup-button', trans('plugins/backup::backup.create_btn')); ?>

        <div data-route-create="<?php echo e(route('backups.create')); ?>"></div>
    <?php endif; ?>

    <?php if(auth()->user()->hasPermission('backups.restore')): ?>
        <?php echo Form::modalAction('restore-backup-modal', trans('plugins/backup::backup.restore'), 'info', trans('plugins/backup::backup.restore_confirm_msg'), 'restore-backup-button', trans('plugins/backup::backup.restore_btn')); ?>

    <?php endif; ?>

    <?php echo $__env->make('core/table::modal', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('core/base::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/plugins/backup/resources/views//index.blade.php ENDPATH**/ ?>