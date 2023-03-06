<div class="title">
    <h2 class="customer-page-title">{{ __('Wishlist') }}</h2>
</div>
<br>
@if (auth('customer')->check())
    @if (count($wishlist) > 0 && $wishlist->count() > 0)
        <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>{{ __('Image') }}</th>
                <th>{{ __('Product') }}</th>
                <th>{{ __('Price') }}</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                @foreach($wishlist as $item)
                    @php $item = $item->product; @endphp
                    <tr>
                        <td>
                            <img alt="{{ $item->name }}" width="50" height="70" class="img-fluid" style="max-height: 75px" src="{{ RvMedia::getImageUrl($item->image, 'thumb', false, RvMedia::getDefaultImage()) }}">
                        </td>
                        <td><a href="{{ $item->url }}">{{ $item->name }}</a></td>

                        <td>
                            <div class="product__price @if ($item->front_sale_price != $item->price) sale @endif">
                                <span>{{ format_price($item->front_sale_price_with_taxes) }}</span>
                                @if ($item->front_sale_price != $item->price)
                                    <small><del>{{ format_price($item->price_with_taxes) }}</del></small>
                                @endif
                            </div>
                        </td>

                        <td>
                            <a href="{{ route('public.wishlist.remove', $item->id) }}">{{ __('Remove') }}</a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        </div>
    @else
        <p>{{ __('No item in wishlist!') }}</p>
    @endif
@else
    @if (Cart::instance('wishlist')->count())
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>{{ __('Image') }}</th>
                    <th>{{ __('Product') }}</th>
                    <th>{{ __('Price') }}</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                @foreach(Cart::instance('wishlist')->content() as $cartItem)
                    @php
                        $item = app(\Botble\Ecommerce\Repositories\Interfaces\ProductInterface::class)->findById($cartItem->id);
                    @endphp
                    <tr>
                        <td>
                            <img alt="{{ $item->name }}" width="50" height="70" class="img-fluid" style="max-height: 75px" src="{{ RvMedia::getImageUrl($item->image, 'thumb', false, RvMedia::getDefaultImage()) }}">
                        </td>
                        <td><a href="{{ $item->url }}">{{ $item->name }}</a></td>

                        <td>
                            <div class="product__price @if ($item->front_sale_price != $item->price) sale @endif">
                                <span>{{ format_price($item->front_sale_price_with_taxes) }}</span>
                                @if ($item->front_sale_price != $item->price)
                                    <small><del>{{ format_price($item->price_with_taxes) }}</del></small>
                                @endif
                            </div>
                        </td>

                        <td>
                            <a href="{{ route('public.wishlist.remove', $item->id) }}">{{ __('Remove') }}</a>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    @else
        <p>{{ __('No item in wishlist!') }}</p>
    @endif
@endif
