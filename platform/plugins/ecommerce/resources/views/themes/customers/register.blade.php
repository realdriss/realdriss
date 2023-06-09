<div class="container">
    <div class="row">
        <div class="col-md-6">
                <div class="form-border-box">
                    <form class="form-horizontal" role="form" method="POST" action="{{ route('customer.register.post') }}">
                        <h2 class="normal"><span>{{ __('Register') }}</span></h2>
                        @csrf

                        <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                            <label for="name" class="col-md-4 control-label">{{ __('Name') }}</label>

                            <div class="col-md-12">
                                <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" autofocus>

                                @if ($errors->has('name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-12">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">{{ __('Password') }}</label>

                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control" name="password">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                            <label for="password-confirm" class="col-md-4 control-label">{{ __('Password confirmation') }}</label>

                            <div class="col-md-12">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation">

                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        {!! Captcha::display([], ['lang' => app()->getLocale()]) !!}

                        <div class="form-group">
                            <div class="col-md-12 col-md-offset-4">
                                <button type="submit" class="submit btn btn-md btn-black">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                        <div class="text-center">
                            {!! apply_filters(BASE_FILTER_AFTER_LOGIN_OR_REGISTER_FORM, null, \RealDriss\Ecommerce\Models\Customer::class) !!}
                        </div>
                    </form>
                </div>
        </div>
    </div>
</div>
