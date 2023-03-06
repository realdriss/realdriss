<div class="product_header_left">
    <div class="custom_select">
        <select class="form-control form-control-sm submit-form-on-change" name="sort-by" id="sort-by" >
            @foreach (EcommerceHelper::getSortParams() as $key => $name)
                <option value="{{ $key }}" @if (request()->input('sort-by') == $key) selected @endif>{{ $name }}</option>
            @endforeach
        </select>
    </div>
</div>
<div class="product_header_right">
    <div class="products_view">
        <a href="javascript:void(0);" class="shorting_icon grid active"><i class="ti-view-grid"></i></a>
        <a href="javascript:void(0);" class="shorting_icon list"><i class="ti-layout-list-thumb"></i></a>
    </div>
    <div class="custom_select">
        <select class="form-control form-control-sm submit-form-on-change" name="num">
            <option value="">{{ __('Showing') }}</option>
            <option value="9" @if (request()->input('num') == 9) selected @endif>9</option>
            <option value="12" @if (request()->input('num') == 12) selected @endif>12</option>
            <option value="18" @if (request()->input('num') == 18) selected @endif>18</option>
        </select>
    </div>
</div>
