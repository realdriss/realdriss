<div class="section pb_0">
    <div class="row">
        <div class="col-xl-4 col-md-6">
            <div class="contact_wrap contact_style3">
                <div class="contact_icon">
                    <i class="linearicons-map2"></i>
                </div>
                <div class="contact_text">
                    <span><?php echo e(__('Address')); ?></span>
                    <p><?php echo e(theme_option('address')); ?></p>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-6">
            <div class="contact_wrap contact_style3">
                <div class="contact_icon">
                    <i class="linearicons-envelope-open"></i>
                </div>
                <div class="contact_text">
                    <span><?php echo e(__('Email Address')); ?></span>
                    <a href="mailto:<?php echo e(theme_option('email')); ?>"><?php echo e(theme_option('email')); ?></a>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-6">
            <div class="contact_wrap contact_style3">
                <div class="contact_icon">
                    <i class="linearicons-tablet2"></i>
                </div>
                <div class="contact_text">
                    <span><?php echo e(__('Phone')); ?></span>
                    <p><?php echo e(theme_option('hotline')); ?></p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END SECTION CONTACT -->

<div class="section pb_0">
    <div class="row">
        <div class="col-12">
            <div class="heading_s1">
                <h2><?php echo e(__('Maps')); ?></h2>
            </div>
            <div style="height: 400px; width: 100%; position: relative; text-align: right;">
                <div  style="height: 400px; width: 100%; overflow: hidden; background: none!important;">
                    <iframe width="100%" height="500" src="https://maps.google.com/maps?q=<?php echo e(addslashes(theme_option('address'))); ?>%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- START SECTION CONTACT -->
<div class="section pt-0">
    <div class="row">
        <div class="col-12">
            <div class="heading_s1">
                <h2><?php echo e(__('Get In touch')); ?></h2>
            </div>
            <div class="field_form">
                <?php echo Form::open(['route' => 'public.send.contact', 'class' => 'form--contact contact-form', 'method' => 'POST']); ?>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="contact_name" class="control-label required"><?php echo e(__('Name')); ?></label>
                                <input type="text" class="form-control" name="name" value="<?php echo e(old('name')); ?>" id="contact_name"
                                       placeholder="<?php echo e(__('Name')); ?>">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="contact_email" class="control-label required"><?php echo e(__('Email')); ?></label>
                                <input type="email" class="form-control" name="email" value="<?php echo e(old('email')); ?>" id="contact_email"
                                       placeholder="<?php echo e(__('Email')); ?>">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="contact_address" class="control-label"><?php echo e(__('Address')); ?></label>
                                <input type="text" class="form-control" name="address" value="<?php echo e(old('address')); ?>" id="contact_address"
                                       placeholder="<?php echo e(__('Address')); ?>">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="contact_phone" class="control-label"><?php echo e(__('Phone')); ?></label>
                                <input type="text" class="form-control" name="phone" value="<?php echo e(old('phone')); ?>" id="contact_phone"
                                       placeholder="<?php echo e(__('Phone')); ?>">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="contact_subject" class="control-label"><?php echo e(__('Subject')); ?></label>
                                <input type="text" class="form-control" name="subject" value="<?php echo e(old('subject')); ?>" id="contact_subject"
                                       placeholder="<?php echo e(__('Subject')); ?>">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="contact_content" class="control-label required"><?php echo e(__('Message')); ?></label>
                                <textarea name="content" id="contact_content" class="form-control" rows="5" placeholder="<?php echo e(__('Message')); ?>"><?php echo e(old('content')); ?></textarea>
                            </div>
                        </div>
                        <?php if(setting('enable_captcha') && is_plugin_active('captcha')): ?>
                            <div class="form-group col-12">
                                <?php echo Captcha::display(); ?>

                            </div>
                        <?php endif; ?>
                        <div class="col-md-12">
                            <div class="form-group">
                                <button type="submit" class="btn btn-fill-out"><?php echo e(__('Send Message')); ?></button>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="contact-message contact-success-message" style="display: none"></div>
                        <div class="contact-message contact-error-message" style="display: none"></div>
                    </div>

                <?php echo Form::close(); ?>

            </div>
        </div>
    </div>
</div>
<!-- END SECTION CONTACT -->
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/partials/shortcodes/contact-form.blade.php ENDPATH**/ ?>