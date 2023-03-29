<ol class="breadcrumb justify-content-md-end" itemscope itemtype="http://schema.org/BreadcrumbList">
    <?php $__currentLoopData = $crumbs = Theme::breadcrumb()->getCrumbs(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $i => $crumb): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if($i != (count($crumbs) - 1)): ?>
            <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <meta itemprop="position" content="<?php echo e($i + 1); ?>" />
                <a href="<?php echo e($crumb['url']); ?>" itemprop="item" title="<?php echo e($crumb['label']); ?>">
                    <?php echo e($crumb['label']); ?>

                    <meta itemprop="name" content="<?php echo e($crumb['label']); ?>" />
                </a>
            </li>
        <?php else: ?>
            <li class="breadcrumb-item active"><?php echo e($crumb['label']); ?></li>
        <?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</ol>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/partials/breadcrumbs.blade.php ENDPATH**/ ?>