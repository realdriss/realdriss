<?php $__currentLoopData = $styles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $style): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php echo Assets::getHtmlBuilder()->style($style['src'] . Assets::getBuildVersion(), $style['attributes']); ?>

<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

<?php $__currentLoopData = $headScripts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $script): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php echo Assets::getHtmlBuilder()->script($script['src'] . Assets::getBuildVersion(), $script['attributes']); ?>

    <?php if(!empty($script['fallback'])): ?>
        <script>window.<?php echo $script['fallback']; ?> || document.write('<script src="<?php echo e($script['fallbackURL']); ?>"><\/script>')</script>
    <?php endif; ?>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?><?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\vendor\botble\assets\src\Providers/../../resources/views/header.blade.php ENDPATH**/ ?>