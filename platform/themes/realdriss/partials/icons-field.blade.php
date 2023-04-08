@php
    Arr::set($attributes, 'class', Arr::get($attributes, 'class') . ' icon-select');
@endphp

{!! Form::customSelect($name, [$value => $value], $value, $attributes) !!}

@once
    @push('header')
        <link media="all" type="text/css" rel="stylesheet" href="{{ Theme::asset()->url('css/flaticon.css') }}">
        <link media="all" type="text/css" rel="stylesheet" href="{{ Theme::asset()->url('css/ionicons.min.css') }}">
        <link media="all" type="text/css" rel="stylesheet" href="{{ Theme::asset()->url('css/linearicons.css') }}">
        <script src="{{ Theme::asset()->url('js/icons-field.js') }}?v=1.0.1"></script>
    @endpush
@endonce
