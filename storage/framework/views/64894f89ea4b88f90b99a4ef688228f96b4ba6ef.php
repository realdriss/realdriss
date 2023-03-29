
<?php $__env->startSection('content'); ?>
    <div class="widget meta-boxes">
        <div class="widget-title">
            <h4>&nbsp; <?php echo e(trans('plugins/translation::translation.theme-translations')); ?></h4>
        </div>
        <div class="widget-body box-translation">
            <?php if(count(\Botble\Base\Supports\Language::getAvailableLocales()) > 0): ?>
                <?php echo Form::open(['role' => 'form', 'route' => 'translations.theme-translations', 'method' => 'POST']); ?>

                    <input type="hidden" name="locale" value="<?php echo e($group['locale']); ?>">
                    <div class="row">
                        <div class="col-md-6">
                            <p><?php echo e(trans('plugins/translation::translation.translate_from')); ?> <strong class="text-info"><?php echo e($defaultLanguage ? $defaultLanguage['name'] : 'en'); ?></strong> <?php echo e(trans('plugins/translation::translation.to')); ?> <strong class="text-info"><?php echo e($group['name']); ?></strong></p>
                        </div>
                        <div class="col-md-6">
                            <div class="text-right">
                                <?php echo $__env->make('plugins/translation::partials.list-theme-languages-to-translate', compact('groups', 'group'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive table-striped">
                        <table class="table">
                            <thead>
                            <tr>
                                <th><?php echo e($defaultLanguage ? $defaultLanguage['name'] : 'en'); ?></th>
                                <th><?php echo e($group['name']); ?></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $__currentLoopData = $translations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $translation): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td class="text-left" style="width: 50%">
                                        <?php echo htmlentities($key, ENT_QUOTES, 'UTF-8', false); ?>

                                        <input type="hidden" name="translations[<?php echo e($key); ?>][key]" class="translation-key" value="<?php echo htmlentities($key, ENT_QUOTES, 'UTF-8', false); ?>">
                                    </td>
                                    <td class="text-left" style="width: 50%">
                                        <input type="text" class="form-control translation-value" name="translations[<?php echo e($key); ?>][value]" value="<?php echo htmlentities($translation, ENT_QUOTES, 'UTF-8', false); ?>">
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </tbody>
                        </table>
                    </div>
                    <br>
                    <div class="form-group">
                        <button type="submit" class="btn btn-info button-save-theme-translations"><?php echo e(trans('core/base::forms.save')); ?></button>
                    </div>
                <?php echo Form::close(); ?>

            <?php else: ?>
                <p class="text-warning"><?php echo e(trans('plugins/translation::translation.no_other_languages')); ?></p>
            <?php endif; ?>
        </div>
        <div class="clearfix"></div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('core/base::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/plugins/translation/resources/views//theme-translations.blade.php ENDPATH**/ ?>