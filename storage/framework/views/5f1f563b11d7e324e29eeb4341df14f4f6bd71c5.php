<div class="top-menu">
    <ul class="nav navbar-nav float-right">
        <?php if(auth()->guard()->check()): ?>
            <?php if(BaseHelper::getAdminPrefix() != ''): ?>
                <li class="dropdown">
                    <a class="dropdown-toggle dropdown-header-name" style="padding-right: 10px" href="<?php echo e(url('/')); ?>" target="_blank"><i class="fa fa-globe"></i> <span <?php if(isset($themes) && is_array($themes) && count($themes) > 1 && setting('enable_change_admin_theme') != false): ?> class="d-none d-sm-inline" <?php endif; ?>><?php echo e(trans('core/base::layouts.view_website')); ?></span> </a>
                </li>
            <?php endif; ?>
            <?php if(Auth::check()): ?>
                <?php echo apply_filters(BASE_FILTER_TOP_HEADER_LAYOUT, null); ?>

            <?php endif; ?>

            <?php if(isset($themes) && is_array($themes) && count($themes) > 1 && setting('enable_change_admin_theme') != false): ?>
                <li class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle dropdown-header-name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span><?php echo e(trans('core/base::layouts.theme')); ?></span>
                        <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right icons-right">

                        <?php $__currentLoopData = $themes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $name => $file): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <?php if($activeTheme === $name): ?>
                                <li class="active"><a href="<?php echo e(route('admin.theme', [$name])); ?>"><?php echo e(Str::studly($name)); ?></a></li>
                            <?php else: ?>
                                <li><a href="<?php echo e(route('admin.theme', [$name])); ?>"><?php echo e(Str::studly($name)); ?></a></li>
                            <?php endif; ?>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                    </ul>
                </li>
            <?php endif; ?>

            <li class="dropdown dropdown-user">
                <a href="javascript:void(0)" class="dropdown-toggle dropdown-header-name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img alt="<?php echo e(Auth::user()->name); ?>" class="rounded-circle" src="<?php echo e(Auth::user()->avatar_url); ?>" />
                    <span class="username"> <?php echo e(Auth::user()->name); ?> </span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="<?php echo e(route('users.profile.view', Auth::id())); ?>"><i class="icon-user"></i> <?php echo e(trans('core/base::layouts.profile')); ?></a></li>
                    <li><a href="<?php echo e(route('access.logout')); ?>" class="btn-logout"><i class="icon-key"></i> <?php echo e(trans('core/base::layouts.logout')); ?></a></li>
                </ul>
            </li>
        <?php endif; ?>
    </ul>
</div>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/core/base/resources/views//layouts/partials/top-menu.blade.php ENDPATH**/ ?>