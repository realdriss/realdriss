@extends('core/base::layouts.base')

@section('body-class') login @stop
{{-- @section('body-style') background-image: url({{ get_login_background() }}); @stop --}}

@section ('page')
<div class="login_register_wrap section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-md-10">
                <div class="padding_eight_all bg-white">
                    <div class="login_wrap">
                        @yield('content')
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</div>
@stop
