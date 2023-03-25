
<?php $__env->startSection('content'); ?>
    <?php echo Form::open(['route' => ['social-login.settings']]); ?>

    <div class="max-width-1200">
        <div class="flexbox-annotated-section">

            <div class="flexbox-annotated-section-annotation">
                <div class="annotated-section-title pd-all-20">
                    <h2><?php echo e(trans('plugins/social-login::social-login.settings.title')); ?></h2>
                </div>
                <div class="annotated-section-description pd-all-20 p-none-t">
                    <p class="color-note"><?php echo e(trans('plugins/social-login::social-login.settings.description')); ?></p>
                </div>
            </div>

            <div class="flexbox-annotated-section-content">
                <div class="wrapper-content pd-all-20">
                    <div class="form-group mb-0">
                        <input type="hidden" name="social_login_enable" value="0">
                        <label>
                            <input type="checkbox" class="hrv-checkbox" value="1"
                                   <?php if(setting('social_login_enable')): ?> checked <?php endif; ?> name="social_login_enable" id="social_login_enable">
                            <?php echo e(trans('plugins/social-login::social-login.settings.enable')); ?>

                        </label>
                    </div>

                </div>
            </div>
        </div>
        <div class="wrapper-list-social-login-options" <?php if(!setting('social_login_enable')): ?> style="display:none;" <?php endif; ?>>
            <div class="flexbox-annotated-section">

                <div class="flexbox-annotated-section-annotation">
                    <div class="annotated-section-title pd-all-20">
                        <h2><?php echo e(trans('plugins/social-login::social-login.settings.facebook.title')); ?></h2>
                    </div>
                    <div class="annotated-section-description pd-all-20 p-none-t">
                        <p class="color-note"><?php echo e(trans('plugins/social-login::social-login.settings.facebook.description')); ?></p>
                    </div>
                </div>

                <div class="flexbox-annotated-section-content">
                    <div class="wrapper-content pd-all-20">
                        <div class="form-group <?php if(!setting('social_login_facebook_enable')): ?> mb-0 <?php endif; ?>">
                            <input type="hidden" name="social_login_facebook_enable" value="0">
                            <label>
                                <input type="checkbox" class="hrv-checkbox enable-social-login-option" value="1"
                                       <?php if(setting('social_login_facebook_enable')): ?> checked <?php endif; ?> name="social_login_facebook_enable">
                                <?php echo e(trans('plugins/social-login::social-login.settings.enable')); ?>

                            </label>
                        </div>
                        <div class="enable-social-login-option-wrapper" <?php if(!setting('social_login_facebook_enable')): ?> style="display:none;" <?php endif; ?>>
                            <div class="form-group">
                                <label class="text-title-field"
                                       for="social_login_facebook_app_id"><?php echo e(trans('plugins/social-login::social-login.settings.facebook.app_id')); ?></label>
                                <input data-counter="120" type="text" class="next-input" name="social_login_facebook_app_id" id="social_login_facebook_app_id"
                                       value="<?php echo e(setting('social_login_facebook_app_id')); ?>">
                            </div>

                            <?php if(!app()->environment('demo')): ?>
                                <div class="form-group mb-0">
                                    <label class="text-title-field"
                                           for="social_login_facebook_app_secret"><?php echo e(trans('plugins/social-login::social-login.settings.facebook.app_secret')); ?></label>
                                    <input data-counter="120" type="password" class="next-input" name="social_login_facebook_app_secret" id="social_login_facebook_app_secret"
                                           value="<?php echo e(setting('social_login_facebook_app_secret')); ?>">
                                </div>
                            <?php endif; ?>

                            <?php echo Form::helper(trans('plugins/social-login::social-login.settings.facebook.helper', ['callback' => '<code>' . route('auth.social.callback', 'facebook') . '</code>'])); ?>

                        </div>

                    </div>
                </div>
            </div>

            <div class="flexbox-annotated-section">
                <div class="flexbox-annotated-section-annotation">
                    <div class="annotated-section-title pd-all-20">
                        <h2><?php echo e(trans('plugins/social-login::social-login.settings.google.title')); ?></h2>
                    </div>
                    <div class="annotated-section-description pd-all-20 p-none-t">
                        <p class="color-note"><?php echo e(trans('plugins/social-login::social-login.settings.google.description')); ?></p>
                    </div>
                </div>

                <div class="flexbox-annotated-section-content">
                    <div class="wrapper-content pd-all-20">
                        <div class="form-group <?php if(!setting('social_login_google_enable')): ?> mb-0 <?php endif; ?>">
                            <input type="hidden" name="social_login_google_enable" value="0">
                            <label>
                                <input type="checkbox" class="hrv-checkbox enable-social-login-option" value="1"
                                       <?php if(setting('social_login_google_enable')): ?> checked <?php endif; ?> name="social_login_google_enable">
                                <?php echo e(trans('plugins/social-login::social-login.settings.enable')); ?>

                            </label>
                        </div>

                        <div class="enable-social-login-option-wrapper" <?php if(!setting('social_login_google_enable')): ?> style="display:none;" <?php endif; ?>>
                            <div class="form-group">
                                <label class="text-title-field"
                                       for="social_login_google_app_id"><?php echo e(trans('plugins/social-login::social-login.settings.google.app_id')); ?></label>
                                <input data-counter="120" type="text" class="next-input" name="social_login_google_app_id" id="social_login_google_app_id"
                                       value="<?php echo e(setting('social_login_google_app_id')); ?>">
                            </div>

                            <?php if(!app()->environment('demo')): ?>
                                <div class="form-group mb-0">
                                    <label class="text-title-field"
                                           for="social_login_google_app_secret"><?php echo e(trans('plugins/social-login::social-login.settings.google.app_secret')); ?></label>
                                    <input data-counter="120" type="password" class="next-input" name="social_login_google_app_secret" id="social_login_google_app_secret"
                                           value="<?php echo e(setting('social_login_google_app_secret')); ?>">
                                </div>
                            <?php endif; ?>

                            <?php echo Form::helper(trans('plugins/social-login::social-login.settings.google.helper', ['callback' => '<code>' . route('auth.social.callback', 'google') . '</code>'])); ?>

                        </div>

                    </div>
                </div>
            </div>

            <div class="flexbox-annotated-section">
                <div class="flexbox-annotated-section-annotation">
                    <div class="annotated-section-title pd-all-20">
                        <h2><?php echo e(trans('plugins/social-login::social-login.settings.github.title')); ?></h2>
                    </div>
                    <div class="annotated-section-description pd-all-20 p-none-t">
                        <p class="color-note"><?php echo e(trans('plugins/social-login::social-login.settings.github.description')); ?></p>
                    </div>
                </div>

                <div class="flexbox-annotated-section-content">
                    <div class="wrapper-content pd-all-20">
                        <div class="form-group <?php if(!setting('social_login_github_enable')): ?> mb-0 <?php endif; ?>">
                            <input type="hidden" name="social_login_github_enable" value="0">
                            <label>
                                <input type="checkbox" class="hrv-checkbox enable-social-login-option" value="1"
                                       <?php if(setting('social_login_github_enable')): ?> checked <?php endif; ?> name="social_login_github_enable">
                                <?php echo e(trans('plugins/social-login::social-login.settings.enable')); ?>

                            </label>
                        </div>

                        <div class="enable-social-login-option-wrapper" <?php if(!setting('social_login_github_enable')): ?> style="display:none;" <?php endif; ?>>
                            <div class="form-group">
                                <label class="text-title-field"
                                       for="social_login_github_app_id"><?php echo e(trans('plugins/social-login::social-login.settings.github.app_id')); ?></label>
                                <input data-counter="120" type="text" class="next-input" name="social_login_github_app_id" id="social_login_github_app_id"
                                       value="<?php echo e(setting('social_login_github_app_id')); ?>">
                            </div>

                            <?php if(!app()->environment('demo')): ?>
                                <div class="form-group mb-0">
                                    <label class="text-title-field"
                                           for="social_login_github_app_secret"><?php echo e(trans('plugins/social-login::social-login.settings.github.app_secret')); ?></label>
                                    <input data-counter="120" type="password" class="next-input" name="social_login_github_app_secret" id="social_login_github_app_secret"
                                           value="<?php echo e(setting('social_login_github_app_secret')); ?>">
                                </div>
                            <?php endif; ?>

                            <?php echo Form::helper(trans('plugins/social-login::social-login.settings.github.helper', ['callback' => '<code>' . route('auth.social.callback', 'github') . '</code>'])); ?>

                        </div>

                    </div>
                </div>
            </div>

            <div class="flexbox-annotated-section">
                <div class="flexbox-annotated-section-annotation">
                    <div class="annotated-section-title pd-all-20">
                        <h2><?php echo e(trans('plugins/social-login::social-login.settings.linkedin.title')); ?></h2>
                    </div>
                    <div class="annotated-section-description pd-all-20 p-none-t">
                        <p class="color-note"><?php echo e(trans('plugins/social-login::social-login.settings.linkedin.description')); ?></p>
                    </div>
                </div>

                <div class="flexbox-annotated-section-content">
                    <div class="wrapper-content pd-all-20">
                        <div class="form-group <?php if(!setting('social_login_linkedin_enable')): ?> mb-0 <?php endif; ?>">
                            <input type="hidden" name="social_login_linkedin_enable" value="0">
                            <label>
                                <input type="checkbox" class="hrv-checkbox enable-social-login-option" value="1"
                                       <?php if(setting('social_login_linkedin_enable')): ?> checked <?php endif; ?> name="social_login_linkedin_enable">
                                <?php echo e(trans('plugins/social-login::social-login.settings.enable')); ?>

                            </label>
                        </div>

                        <div class="enable-social-login-option-wrapper" <?php if(!setting('social_login_linkedin_enable')): ?> style="display:none;" <?php endif; ?>>
                            <div class="form-group">
                                <label class="text-title-field"
                                       for="social_login_linkedin_app_id"><?php echo e(trans('plugins/social-login::social-login.settings.linkedin.app_id')); ?></label>
                                <input data-counter="120" type="text" class="next-input" name="social_login_linkedin_app_id" id="social_login_linkedin_app_id"
                                       value="<?php echo e(setting('social_login_linkedin_app_id')); ?>">
                            </div>

                            <?php if(!app()->environment('demo')): ?>
                                <div class="form-group mb-0">
                                    <label class="text-title-field"
                                           for="social_login_linkedin_app_secret"><?php echo e(trans('plugins/social-login::social-login.settings.linkedin.app_secret')); ?></label>
                                    <input data-counter="120" type="password" class="next-input" name="social_login_linkedin_app_secret" id="social_login_linkedin_app_secret"
                                           value="<?php echo e(setting('social_login_linkedin_app_secret')); ?>">
                                </div>
                            <?php endif; ?>

                            <?php echo Form::helper(trans('plugins/social-login::social-login.settings.linkedin.helper', ['callback' => '<code>' . route('auth.social.callback', 'linkedin') . '</code>'])); ?>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="flexbox-annotated-section" style="border: none">
            <div class="flexbox-annotated-section-annotation">
                &nbsp;
            </div>
            <div class="flexbox-annotated-section-content">
                <button class="btn btn-info" type="submit"><?php echo e(trans('core/setting::setting.save_settings')); ?></button>
            </div>
        </div>
    </div>
    <?php echo Form::close(); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('core/base::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/plugins/social-login/resources/views//settings.blade.php ENDPATH**/ ?>