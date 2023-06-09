<?php

namespace RealDriss\SocialLogin\Http\Controllers;

use Assets;
use RealDriss\Base\Http\Controllers\BaseController;
use RealDriss\Base\Http\Responses\BaseHttpResponse;
use RealDriss\Ecommerce\Repositories\Interfaces\CustomerInterface;
use RealDriss\Setting\Supports\SettingStore;
use RealDriss\SocialLogin\Http\Requests\SocialLoginRequest;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use RvMedia;
use Socialite;

class SocialLoginController extends BaseController
{

    /**
     * Redirect the user to the {provider} authentication page.
     *
     * @param string $provider
     * @return mixed
     */
    public function redirectToProvider($provider)
    {
        $this->setProvider($provider);

        return Socialite::driver($provider)->redirect();
    }

    /**
     * @param string $provider
     */
    protected function setProvider(string $provider)
    {
        config()->set([
            'services.' . $provider => [
                'client_id'     => setting('social_login_' . $provider . '_app_id'),
                'client_secret' => setting('social_login_' . $provider . '_app_secret'),
                'redirect'      => route('auth.social.callback', $provider),
            ],
        ]);

        return true;
    }

    /**
     * Obtain the user information from {provider}.
     * @param string $provider
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function handleProviderCallback($provider, BaseHttpResponse $response)
    {
        $this->setProvider($provider);

        try {
            /**
             * @var \Laravel\Socialite\AbstractUser $oAuth
             */
            $oAuth = Socialite::driver($provider)->user();
        } catch (Exception $ex) {
            return $response
                ->setError()
                ->setNextUrl(route('customer.login'))
                ->setMessage($ex->getMessage());
        }

        if (!$oAuth->getEmail()) {
            return $response
                ->setError()
                ->setNextUrl(route('customer.login'))
                ->setMessage(__('Cannot login, no email provided!'));
        }

        $account = app(CustomerInterface::class)->getFirstBy(['email' => $oAuth->getEmail()]);

        if (!$account) {
            $avatarId = null;
            try {
                $url = $oAuth->getAvatar();
                if ($url) {
                    $result = RvMedia::uploadFromUrl($url, 0, 'accounts', 'image/png');
                    if (!$result['error']) {
                        $avatarId = $result['data']->id;
                    }
                }
            } catch (Exception $exception) {
                info($exception->getMessage());
            }

            $account = app(CustomerInterface::class)->createOrUpdate([
                'name'        => $oAuth->getName() ?: $oAuth->getEmail(),
                'email'       => $oAuth->getEmail(),
                'verified_at' => now(),
                'password'    => bcrypt(Str::random(36)),
                'avatar_id'   => $avatarId,
            ]);
        }

        Auth::guard('customer')->login($account, true);

        return $response
            ->setNextUrl(route('public.index'))
            ->setMessage(trans('core/acl::auth.login.success'));
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getSettings()
    {
        page_title()->setTitle(trans('plugins/social-login::social-login.settings.title'));

        Assets::addScriptsDirectly('vendor/core/plugins/social-login/js/social-login.js');

        return view('plugins/social-login::settings');
    }

    /**
     * @param SocialLoginRequest $request
     * @param BaseHttpResponse $response
     * @param SettingStore $setting
     * @return BaseHttpResponse
     */
    public function postSettings(SocialLoginRequest $request, BaseHttpResponse $response, SettingStore $setting)
    {
        foreach ($request->except(['_token']) as $settingKey => $settingValue) {
            $setting->set($settingKey, $settingValue);
        }

        $setting->save();

        return $response
            ->setPreviousUrl(route('social-login.settings'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }
}
