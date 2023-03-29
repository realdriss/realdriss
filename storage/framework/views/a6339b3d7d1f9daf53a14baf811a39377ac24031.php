<?php if(count($groups) > 1): ?>
    <span class="admin-list-language-chooser">
        <span><?php echo e(trans('plugins/translation::translation.translations')); ?>: </span>
        <?php $__currentLoopData = $groups; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if(!in_array($language['locale'], [$group['locale']])): ?>
                <span>
                    <?php echo language_flag($language['flag'], $language['name']); ?>

                    <a href="<?php echo e(route('translations.theme-translations', $language['locale'] == 'en' ? [] : ['ref_lang' => $language['locale']])); ?>"><?php echo e($language['name']); ?></a>
                </span>&nbsp;
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <input type="hidden" name="ref_lang" value="<?php echo e(request()->input('ref_lang')); ?>">
    </span>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/plugins/translation/resources/views//partials/list-theme-languages-to-translate.blade.php ENDPATH**/ ?>