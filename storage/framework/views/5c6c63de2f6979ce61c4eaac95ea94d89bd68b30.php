<tr data-locale="<?php echo e($item['locale']); ?>">
    <td class="text-left">
        <span><?php echo e($item['name']); ?></span>
    </td>
    <td class="text-center"><?php echo e($item['locale']); ?></td>
    <td class="text-center">
        <?php echo language_flag($item['flag'], $item['name']); ?>

    </td>
    <td class="text-center">
        <span>
            <?php if($item['locale'] != 'en'): ?>
                <a href="#" class="delete-locale-button text-danger" data-toggle="tooltip" data-url="<?php echo e(route('translations.locales.delete', $item['locale'])); ?>" role="button" data-original-title="<?php echo e(trans('plugins/translation::translation.delete')); ?>"><i class="icon icon-trash"></i></a>
                &nbsp;<a href="<?php echo e(route('translations.locales.download', $item['locale'])); ?>" class="download-locale-button" data-toggle="tooltip" role="button" data-original-title="<?php echo e(trans('plugins/translation::translation.download')); ?>"><i class="icon icon-download"></i></a>
            <?php else: ?>
                &mdash;
            <?php endif; ?>
        </span>
    </td>
</tr>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/plugins/translation/resources/views//partials/locale-item.blade.php ENDPATH**/ ?>