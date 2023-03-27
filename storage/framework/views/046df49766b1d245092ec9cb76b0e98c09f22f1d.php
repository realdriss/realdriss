

<?php $__env->startSection('content'); ?>
    <p><?php echo e(trans('core/acl::auth.sign_in_below')); ?>:</p>

    <?php echo Form::open(['route' => 'access.login', 'class' => 'login-form']); ?>

        <div class="form-group" id="emailGroup">
            <label><?php echo e(trans('core/acl::auth.login.username')); ?></label>
            <?php echo Form::text('username', request()->input('email', old('username', app()->environment('demo') ? config('core.base.general.demo.account.username', 'botble') : null)), ['class' => 'form-control', 'placeholder' => trans('core/acl::auth.login.username')]); ?>

        </div>

        <div class="form-group" id="passwordGroup">
            <label><?php echo e(trans('core/acl::auth.login.password')); ?></label>
            <?php echo Form::input('password', 'password', request()->input('email') ? null : (app()->environment('demo') ? config('core.base.general.demo.account.password', '159357') : null), ['class' => 'form-control', 'placeholder' => trans('core/acl::auth.login.password')]); ?>

        </div>

        <div>
            <label>
                <?php echo Form::checkbox('remember', '1', true, ['class' => 'hrv-checkbox']); ?> <?php echo e(trans('core/acl::auth.login.remember')); ?>

            </label>
        </div>
        <br>

        <button type="submit" class="btn btn-block login-button">
            <span class="signin"><?php echo e(trans('core/acl::auth.login.login')); ?></span>
        </button>
        <div class="clearfix"></div>

        <br>
        <p><a class="lost-pass-link" href="<?php echo e(route('access.password.request')); ?>" title="<?php echo e(trans('core/acl::auth.forgot_password.title')); ?>"><?php echo e(trans('core/acl::auth.lost_your_password')); ?></a></p>

        <?php echo apply_filters(BASE_FILTER_AFTER_LOGIN_OR_REGISTER_FORM, null, \Botble\ACL\Models\User::class); ?>


    <?php echo Form::close(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('core/acl::auth.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/core/acl/resources/views//auth/login.blade.php ENDPATH**/ ?>