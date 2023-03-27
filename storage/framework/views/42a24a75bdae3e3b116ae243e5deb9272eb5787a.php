    <footer class="footer_dark">
        <div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="widget">
                            <?php if(theme_option('logo_footer') || theme_option('logo')): ?>
                                <div class="footer_logo">
                                    <a href="<?php echo e(url('/')); ?>">
                                        <img src="<?php echo e(RvMedia::getImageUrl(theme_option('logo_footer') ? theme_option('logo_footer') : theme_option('logo'))); ?>" alt="<?php echo e(theme_option('site_title')); ?>" />
                                    </a>
                                </div>
                            <?php endif; ?>
                            <p><?php echo e(theme_option('about-us')); ?></p>
                        </div>
                        <div class="widget">
                            <ul class="social_icons social_white">
                                <?php if(theme_option('facebook')): ?>
                                    <li><a href="<?php echo e(theme_option('facebook')); ?>" class="sc_facebook" target="_blank"><i class="ion-social-facebook"></i></a></li>
                                <?php endif; ?>
                                <?php if(theme_option('twitter')): ?>
                                    <li><a href="<?php echo e(theme_option('twitter')); ?>" class="sc_twitter" target="_blank"><i class="ion-social-twitter"></i></a></li>
                                <?php endif; ?>
                                <?php if(theme_option('youtube')): ?>
                                    <li><a href="<?php echo e(theme_option('youtube')); ?>" class="sc_youtube" target="_blank"><i class="ion-social-youtube-outline"></i></a></li>
                                <?php endif; ?>
                                <?php if(theme_option('instagram')): ?>
                                    <li><a href="<?php echo e(theme_option('instagram')); ?>" class="sc_instagram" target="_blank"><i class="ion-social-instagram-outline"></i></a></li>
                                <?php endif; ?>
                            </ul>
                        </div>
                    </div>
                    <?php echo dynamic_sidebar('footer_sidebar'); ?>

                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="widget">
                            <h6 class="widget_title"><?php echo e(__('Contact Info')); ?></h6>
                            <ul class="contact_info contact_info_light">
                                <li>
                                    <i class="ti-location-pin"></i>
                                    <p><?php echo e(theme_option('address')); ?></p>
                                </li>
                                <li>
                                    <i class="ti-email"></i>
                                    <a href="mailto:<?php echo e(theme_option('email')); ?>"><?php echo e(theme_option('email')); ?></a>
                                </li>
                                <li>
                                    <i class="ti-mobile"></i>
                                    <p><?php echo e(theme_option('hotline')); ?></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom_footer border-top-tran">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p class="mb-md-0 text-center text-md-left"><?php echo e(theme_option('copyright')); ?></p>
                    </div>
                    <div class="col-md-6">
                        <ul class="footer_payment text-center text-lg-right">
                            <?php $__currentLoopData = json_decode(theme_option('payment_methods', []), true); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $method): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if(!empty($method)): ?>
                                    <li><img src="<?php echo e(RvMedia::getImageUrl($method)); ?>" alt="payment method"></li>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

     <?php if(is_plugin_active('ecommerce') && EcommerceHelper::isCartEnabled()): ?>
         <div id="remove-item-modal" class="modal" tabindex="-1" role="dialog">
             <div class="modal-dialog modal-dialog-centered" role="document">
                 <div class="modal-content">
                     <div class="modal-header">
                         <h5 class="modal-title"><?php echo e(__('Warning')); ?></h5>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                         </button>
                     </div>
                     <div class="modal-body">
                         <p><?php echo e(__('Are you sure you want to remove this product from cart?')); ?></p>
                     </div>
                     <div class="modal-footer">
                         <button type="button" class="btn btn-fill-out" data-dismiss="modal"><?php echo e(__('Cancel')); ?></button>
                         <button type="button" class="btn btn-fill-line confirm-remove-item-cart"><?php echo e(__('Yes, remove it!')); ?></button>
                     </div>
                 </div>
             </div>
         </div>
     <?php endif; ?>

    <a href="#" class="scrollup" style="display: none;"><i class="ion-ios-arrow-up"></i></a>

    <script>
        window.siteUrl = "<?php echo e(url('')); ?>";
    </script>

    <?php echo Theme::footer(); ?>


    <?php if(session()->has('success_msg') || session()->has('error_msg') || (isset($errors) && $errors->count() > 0) || isset($error_msg)): ?>
        <script type="text/javascript">
            $(document).ready(function () {
                <?php if(session()->has('success_msg')): ?>
                    window.showAlert('alert-success', '<?php echo e(session('success_msg')); ?>');
                <?php endif; ?>

                <?php if(session()->has('error_msg')): ?>
                    window.showAlert('alert-danger', '<?php echo e(session('error_msg')); ?>');
                <?php endif; ?>

                <?php if(isset($error_msg)): ?>
                    window.showAlert('alert-danger', '<?php echo e($error_msg); ?>');
                <?php endif; ?>

                <?php if(isset($errors)): ?>
                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        window.showAlert('alert-danger', '<?php echo $error; ?>');
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php endif; ?>
            });
        </script>
    <?php endif; ?>

    </body>
</html>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/partials/footer.blade.php ENDPATH**/ ?>