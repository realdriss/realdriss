@php Theme::set('pageName', __('Register')) @endphp

<!-- START LOGIN SECTION -->
<div class="login_register_wrap section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-md-10">
                <div class="login_wrap">
                    <div class="padding_eight_all bg-white">
                       
                        <form method="POST" action="{{ route('customer.register.post') }}">
                            @csrf
                            <div class="form-group">
                                <input class="form-control" name="name" id="txt-name" type="text" value="{{ old('name') }}" placeholder="{{ __('Enter your name') }}">
                                @if ($errors->has('name'))
                                    <span class="text-danger">{{ $errors->first('name') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <input class="form-control" name="email" id="txt-email" type="email" value="{{ old('email') }}" placeholder="{{ __('Enter your email') }}">
                                @if ($errors->has('email'))
                                    <span class="text-danger">{{ $errors->first('email') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="password" name="password" id="txt-password" placeholder="{{ __('Enter your password') }}">
                                @if ($errors->has('password'))
                                    <span class="text-danger">{{ $errors->first('password') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="password" name="password_confirmation" id="txt-password-confirmation" placeholder="{{ __('Confirm your password') }}">
                                @if ($errors->has('password_confirmation'))
                                    <span class="text-danger">{{ $errors->first('password_confirmation') }}</span>
                                @endif
                            </div>
                            <div class="login_footer form-group">
                                <div class="chek-form">
                                    <div class="custome-checkbox">
                                        <input type="hidden" name="agree_terms_and_policy" value="0">
                                        <input class="form-check-input" type="checkbox" name="agree_terms_and_policy" id="terms-policy" value="1">
                                        <label class="form-check-label" for="terms-policy"><span>{{ __('I agree to the T\'s & C\'s.') }}</span></label>
                                    </div>
                                    @if ($errors->has('agree_terms_and_policy'))
                                        <span class="text-danger">{{ $errors->first('agree_terms_and_policy') }}</span>
                                    @endif
                                </div>
                            </div>
                            @if (setting('enable_captcha') && is_plugin_active('captcha'))
                                {!! Captcha::display() !!}
                            @endif
                            <div class="form-group">
                                <button type="submit" class="btn btn-fill-out btn-block">{{ __('Register') }}</button>
                            </div>
                        </form>

                        <div class="text-center">
                            {!! apply_filters(BASE_FILTER_AFTER_LOGIN_OR_REGISTER_FORM, null, \RealDriss\Ecommerce\Models\Customer::class) !!}
                        </div>

                        <div class="form-note text-center">{{ __('Already have an account?') }} <a href="{{ route('customer.login') }}">{{ __('Login') }}</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END LOGIN SECTION -->
