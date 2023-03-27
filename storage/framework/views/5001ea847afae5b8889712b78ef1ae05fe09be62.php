<div class="page-footer">
    <div class="page-footer-inner">
        <div class="row">
            <div class="col-md-6">
                <?php echo clean(trans('core/base::layouts.copyright', ['year' => now()->format('Y'), 'company' => setting('admin_title', config('core.base.general.base_name')), 'version' => get_cms_version()])); ?>

            </div>
            <div class="col-md-6 text-right">
                <?php if(defined('LARAVEL_START')): ?> <?php echo e(trans('core/base::layouts.page_loaded_time')); ?> <?php echo e(round((microtime(true) - LARAVEL_START), 2)); ?>s <?php endif; ?>
            </div>
        </div>
    </div>
    <div class="scroll-to-top">
        <i class="icon-arrow-up-circle"></i>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/core/base/resources/views//layouts/partials/footer.blade.php ENDPATH**/ ?>