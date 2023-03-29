<!-- START SECTION SUBSCRIBE NEWSLETTER -->
<div class="section bg_default small_pt small_pb">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="newsletter_text text_white">
                    <h3><?php echo clean($title); ?></h3>
                    <?php if($description): ?>
                        <p><?php echo clean($description); ?></p>
                    <?php endif; ?>
                    <?php if($subtitle): ?>
                        <p><?php echo clean($subtitle); ?></p>
                    <?php endif; ?>
                </div>
            </div>
            <div class="col-md-6">
                <div class="newsletter_form2 rounded_input newsletter-form">
                    <form method="post" action="<?php echo e(route('public.newsletter.subscribe')); ?>">
                        <?php echo csrf_field(); ?>
                        <input name="email" type="email" class="form-control" placeholder="<?php echo e(__('Enter Your Email')); ?>">
                        <button type="submit" class="btn btn-dark btn-radius"><?php echo e(__('Subscribe')); ?></button>

                        <?php if(setting('enable_captcha') && is_plugin_active('captcha')): ?>
                            <?php echo Captcha::display(); ?>

                        <?php endif; ?>
                    </form>

                    <div class="newsletter-message newsletter-success-message" style="display: none"></div>
                    <div class="newsletter-message newsletter-error-message" style="display: none"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- START SECTION SUBSCRIBE NEWSLETTER -->
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/themes/shopwise/partials/shortcodes/newsletter-form.blade.php ENDPATH**/ ?>