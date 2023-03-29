<?php if($cookieConsentConfig['enabled'] && !$alreadyConsentedWithCookies): ?>

    <div class="js-cookie-consent cookie-consent" style="background-color: <?php echo e(theme_option('cookie_consent_background_color', '#000')); ?> !important; color: <?php echo e(theme_option('cookie_consent_text_color', '#fff')); ?> !important;">
        <div class="cookie-consent-body" style="max-width: <?php echo e(theme_option('cookie_consent_max_width', 1170)); ?>px;">
            <span class="cookie-consent__message">
                <?php echo e(theme_option('cookie_consent_message', trans('plugins/cookie-consent::cookie-consent.message'))); ?>

                <?php if(theme_option('cookie_consent_learn_more_url') && theme_option('cookie_consent_learn_more_text')): ?>
                    <a href="<?php echo e(url(theme_option('cookie_consent_learn_more_url'))); ?>"><?php echo e(theme_option('cookie_consent_learn_more_text')); ?></a>
                <?php endif; ?>
            </span>

            <button class="js-cookie-consent-agree cookie-consent__agree" style="background-color: <?php echo e(theme_option('cookie_consent_background_color', '#000')); ?> !important; color: <?php echo e(theme_option('cookie_consent_text_color', '#fff')); ?> !important; border: 1px solid <?php echo e(theme_option('cookie_consent_text_color', '#fff')); ?> !important;">
                <?php echo e(theme_option('cookie_consent_button_text', trans('plugins/cookie-consent::cookie-consent.button_text'))); ?>

            </button>
        </div>
    </div>
    <div data-site-cookie-name="<?php echo e($cookieConsentConfig['cookie_name']); ?>"></div>
    <div data-site-cookie-lifetime="<?php echo e($cookieConsentConfig['cookie_lifetime']); ?>"></div>
    <div data-site-cookie-domain="<?php echo e(config('session.domain') ?? request()->getHost()); ?>"></div>
    <div data-site-session-secure="<?php echo e(config('session.secure') ? ';secure' : null); ?>"></div>

<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/plugins/cookie-consent/resources/views//index.blade.php ENDPATH**/ ?>