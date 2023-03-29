

<?php $__env->startSection('content'); ?>
    <p><?php echo e(trans('core/acl::auth.forgot_password.title')); ?>:</p>
    <?php echo Form::open(['route' => 'access.password.email', 'class' => 'forget-form']); ?>

        <p><?php echo clean(trans('core/acl::auth.forgot_password.message')); ?></p>
    <br>
        <div class="form-group" id="emailGroup">
            <label><?php echo e(trans('core/acl::auth.login.email')); ?></label>
            <?php echo Form::text('email', old('email'), ['class' => 'form-control', 'placeholder' => trans('core/acl::auth.login.email')]); ?>

        </div>
        <button type="submit" class="btn btn-block login-button">
            <span class="signin"><?php echo e(trans('core/acl::auth.forgot_password.submit')); ?></span>
        </button>
        <div class="clearfix"></div>

        <br>
        <p><a class="lost-pass-link" href="<?php echo e(route('access.login')); ?>"><?php echo e(trans('core/acl::auth.back_to_login')); ?></a></p>
    <?php echo Form::close(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('core/acl::auth.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\realdriss\core\platform/core/acl/resources/views//auth/forgot-password.blade.php ENDPATH**/ ?>