<?php Theme::set('pageName', __('Register')) ?>

<!-- START LOGIN SECTION -->
<div class="login_register_wrap section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-md-10">
                <div class="login_wrap">
                    <div class="padding_eight_all bg-white">
                       
                        <form method="POST" action="<?php echo e(route('customer.register.post')); ?>">
                            <?php echo csrf_field(); ?>
                            <div class="form-group">
                                <input class="form-control" name="name" id="txt-name" type="text" value="<?php echo e(old('name')); ?>" placeholder="<?php echo e(__('Your Name')); ?>">
                                <?php if($errors->has('name')): ?>
                                    <span class="text-danger"><?php echo e($errors->first('name')); ?></span>
                                <?php endif; ?>
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="email" id="txt-email" type="email" value="<?php echo e(old('email')); ?>" placeholder="<?php echo e(__('Your Email')); ?>">
                                <?php if($errors->has('email')): ?>
                                    <span class="text-danger"><?php echo e($errors->first('email')); ?></span>
                                <?php endif; ?>
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="password" name="password" id="txt-password" placeholder="<?php echo e(__('Password')); ?>">
                                <?php if($errors->has('password')): ?>
                                    <span class="text-danger"><?php echo e($errors->first('password')); ?></span>
                                <?php endif; ?>
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="password" name="password_confirmation" id="txt-password-confirmation" placeholder="<?php echo e(__('Password Confirmation')); ?>">
                                <?php if($errors->has('password_confirmation')): ?>
                                    <span class="text-danger"><?php echo e($errors->first('password_confirmation')); ?></span>
                                <?php endif; ?>
                            </div>
                            <div class="login_footer form-group">
                                <div class="chek-form">
                                    <div class="custome-checkbox">
                                        <input type="hidden" name="agree_terms_and_policy" value="0">
                                        <input class="form-check-input" type="checkbox" name="agree_terms_and_policy" id="terms-policy" value="1">
                                        <label class="form-check-label" for="terms-policy"><span><?php echo e(__('I agree to the terms & policies.')); ?></span></label>
                                    </div>
                                    <?php if($errors->has('agree_terms_and_policy')): ?>
                                        <span class="text-danger"><?php echo e($errors->first('agree_terms_and_policy')); ?></span>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <?php if(setting('enable_captcha') && is_plugin_active('captcha')): ?>
                                <?php echo Captcha::display(); ?>

                            <?php endif; ?>
                            <div class="form-group">
                                <button type="submit" class="btn btn-fill-out btn-block"><?php echo e(__('Register')); ?></button>
                            </div>
                        </form>

                        <div class="text-center">
                            <?php echo apply_filters(BASE_FILTER_AFTER_LOGIN_OR_REGISTER_FORM, null, \Botble\Ecommerce\Models\Customer::class); ?>

                        </div>

                        <div class="form-note text-center"><?php echo e(__('Already have an account?')); ?> <a href="<?php echo e(route('customer.login')); ?>"><?php echo e(__('Login')); ?></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END LOGIN SECTION -->
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/customers/register.blade.php ENDPATH**/ ?>