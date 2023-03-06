@extends('core/base::layouts.master')
@section('content')
    <div class="row">
        <div class="col-md-4">
            <div class="card tree-categories-container position-relative">
                <div class="tree-loading">
                    @include('core/base::elements.loading')
                </div>
                <div class="tree-categories-body card-body">
                    <div class="mb-3 d-flex">
                        <button class="btn btn-primary toggle-tree"
                                type="button"
                                data-expand="{{ trans('plugins/ecommerce::product-categories.expand_all') }}"
                                data-collapse="{{ trans('plugins/ecommerce::product-categories.collapse_all') }}">
                            {{ trans('plugins/ecommerce::product-categories.collapse_all') }}
                        </button>
                        <a class="tree-categories-create btn btn-info mr-0 ml-auto
                                @if (!Auth::user()->hasPermission('product-categories.create')) d-none  @endif"
                           href="{{ route('product-categories.create') }}">
                            @include('core/table::partials.create')
                        </a>
                    </div>
                    @php
                        $categories = $form->getFormOption('categories');
                    @endphp
                    <div class="file-tree-wrapper" data-url="{{ route('product-categories.index') }}">
                        @include('plugins/ecommerce::product-categories.partials.categories-tree')
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <div class="card tree-form-container position-relative">
                <div class="tree-loading d-none">
                    @include('core/base::elements.loading')
                </div>
                <div class="tree-form-body card-body">
                    @include('core/base::forms.form-no-wrap')
                </div>
            </div>
        </div>
    </div>
@stop

@push('footer')
    @include('core/table::modal')
@endpush
