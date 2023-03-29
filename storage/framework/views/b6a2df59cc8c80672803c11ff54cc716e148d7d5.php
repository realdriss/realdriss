<?php Theme::set('pageName', __('Login')) ?>

 <div class="login_register_wrap section">
     <div class="container">
         <div class="row justify-content-center">
             <div class="col-xl-6 col-md-10">
                 <div class="login_wrap">
                     <div class="padding_eight_all bg-white">
                         
                         <?php if(isset($errors) && $errors->has('confirmation')): ?>
                             <div class="alert alert-danger">
                                 <span><?php echo $errors->first('confirmation'); ?></span>
                             </div>
                             <br>
                         <?php endif; ?>
                         <form method="POST" action="<?php echo e(route('customer.login.post')); ?>">
                             <?php echo csrf_field(); ?>
                             <div class="form-group">
                                 <input class="form-control" name="email" id="txt-email" type="email" value="<?php echo e(old('email')); ?>" placeholder="<?php echo e(__('Your email.')); ?>">
                                 <?php if($errors->has('email')): ?>
                                     <span class="text-danger"><?php echo e($errors->first('email')); ?></span>
                                 <?php endif; ?>
                             </div>
                             <div class="form-group">
                                 <input class="form-control" type="password" name="password" id="txt-password" placeholder="<?php echo e(__('Your password.')); ?>">
                                 <?php if($errors->has('password')): ?>
                                     <span class="text-danger"><?php echo e($errors->first('password')); ?></span>
                                 <?php endif; ?>
                             </div>
                             <div class="login_footer form-group">
                                 <div class="chek-form">
                                     <div class="custome-checkbox">
                                         <input class="form-check-input" type="checkbox" name="remember" id="remember-me" value="1">
                                         <label class="form-check-label" for="remember-me"><span><?php echo e(__('Remember me')); ?></span></label>
                                     </div>
                                 </div>
                                 <a href="<?php echo e(route('customer.password.reset')); ?>"><?php echo e(__('Forgot password?')); ?></a>
                             </div>
                             <div class="form-group">
                                 <button type="submit" class="btn btn-fill-out btn-block"><?php echo e(__('Login')); ?></button>
                             </div>
                         </form>

                         <div class="text-center">
                             <?php echo apply_filters(BASE_FILTER_AFTER_LOGIN_OR_REGISTER_FORM, null, \Botble\Ecommerce\Models\Customer::class); ?>

                         </div>

                         <div class="form-note text-center"><?php echo e(__("Don't Have an Account?")); ?> <a href="<?php echo e(route('customer.register')); ?>"><?php echo e(__('Register now')); ?></a></div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <!-- END LOGIN SECTION -->
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/customers/login.blade.php ENDPATH**/ ?>