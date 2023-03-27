<?php $__currentLoopData = $bodyScripts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $script): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php echo Assets::getHtmlBuilder()->script($script['src'] . Assets::getBuildVersion(), $script['attributes']); ?>

<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?><?php /**PATH C:\xampp\htdocs\realdriss-hook\core\vendor\botble\assets\src\Providers/../../resources/views/footer.blade.php ENDPATH**/ ?>