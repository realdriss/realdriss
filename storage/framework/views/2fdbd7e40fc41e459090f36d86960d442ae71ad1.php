<ul <?php echo $options; ?>>
    <?php $__currentLoopData = $menu_nodes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li <?php if($row->css_class || $row->active): ?> class="<?php if($row->css_class): ?> <?php echo e($row->css_class); ?> <?php endif; ?> <?php if($row->active): ?> active <?php endif; ?>" <?php endif; ?>>
            <a class="<?php if($row->has_child): ?> dropdown-toggler <?php endif; ?> dropdown-item menu-link" href="<?php echo e($row->has_child ? '#' : url($row->url)); ?>" <?php if($row->target !== '_self'): ?> target="<?php echo e($row->target); ?>" <?php endif; ?> <?php if($row->has_child): ?> data-toggle="dropdown" aria-expanded="true" <?php endif; ?>>
                <?php if($row->icon_font): ?> <i class="<?php echo e(trim($row->icon_font)); ?>"></i> <?php endif; ?> <?php echo e($row->title); ?>

            </a>
            <?php if($row->has_child): ?>
                <div class="dropdown-menu">
                    <?php echo Menu::generateMenu([
                        'menu'       => $menu,
                        'menu_nodes' => $row->child,
                        'view'       => 'sub-menu',
                    ]); ?>

                </div>
            <?php endif; ?>
        </li>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</ul>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/partials/sub-menu.blade.php ENDPATH**/ ?>