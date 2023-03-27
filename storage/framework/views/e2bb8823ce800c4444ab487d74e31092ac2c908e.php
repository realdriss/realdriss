<ul <?php echo $options; ?>>
    <?php $__currentLoopData = $menu_nodes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li <?php if($row->has_child || $row->css_class || $row->active): ?> class="<?php if($row->has_child): ?> dropdown <?php endif; ?> <?php if($row->css_class): ?> <?php echo e($row->css_class); ?> <?php endif; ?> <?php if($row->active): ?> active <?php endif; ?>" <?php endif; ?>>
            <a class="<?php if($row->has_child): ?> dropdown-toggle nav-link <?php else: ?> nav-link nav_item <?php endif; ?>" href="<?php echo e($row->has_child ? '#' : url($row->url)); ?>" <?php if($row->target !== '_self'): ?> target="<?php echo e($row->target); ?>" <?php endif; ?> <?php if($row->has_child): ?> data-toggle="dropdown" <?php endif; ?>>
                <?php if($row->icon_font): ?> <i class="<?php echo e(trim($row->icon_font)); ?>"></i> <?php endif; ?> <?php echo e($row->title); ?>

            </a>
            <?php if($row->has_child): ?>
                <div class="dropdown-menu dropdown-reverse">
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
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/partials/menu.blade.php ENDPATH**/ ?>