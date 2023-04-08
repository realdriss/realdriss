@php Theme::set('pageName', __('Wishlist')) @endphp

<div class="section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="table-responsive shop_cart_table wishlist-table">
                    <table class="table">
                        <thead>
                        <tr>
                            <th class="product-thumbnail">{{ __('Image') }}</th>
                            <th class="product-name">{{ __('Product') }}</th>
                            <th class="product-price">{{ __('Price') }}</th>
                            <th class="product-subtotal">{{ __('Add to cart') }}</th>
                            <th class="product-remove">{{ __('Remove') }}</th>
                        </tr>
                        </thead>
                        <tbody>
                            @if (auth('customer')->check())
                                @if (count($wishlist) > 0 && $wishlist->count() > 0)
                                    @foreach ($wishlist as $item)
                                        @php $item = $item->product; @endphp
                                        <tr>
                                            <td class="product-thumbnail">
                                                <img alt="{{ $item->name }}" width="50" height="70" class="img-fluid"
                                                     style="max-height: 75px"
                                                     src="{{ RvMedia::getImageUrl($item->image, 'thumb', false, RvMedia::getDefaultImage()) }}">
                                            </td>
                                            <td class="product-name" data-title="{{ __('Product') }}">
                                                <a href="{{ $item->original_product->url }}">{{ $item->name }}</a>
                                            </td>
                                            <td class="product-price">
                                                <div class="product__price @if ($item->front_sale_price != $item->price) sale @endif">
                                                    <span>{{ format_price($item->front_sale_price_with_taxes) }}</span>
                                                    @if ($item->front_sale_price != $item->price)
                                                        <small><del>{{ format_price($item->price_with_taxes) }}</del></small>
                                                    @endif
                                                </div>
                                            </td>
                                            <td class="product-remove" data-title="{{ __('Add to cart') }}">
                                                <a class="btn btn-fill-out btn-sm add-to-cart-button" data-id="{{ $item->id }}" href="#" data-url="{{ route('public.cart.add-to-cart') }}">{{ __('Add to cart') }}</a>
                                            </td>
                                            <td class="product-remove" data-title="{{ __('Remove') }}">
                                                <a class="btn btn-dark btn-sm js-remove-from-wishlist-button" href="#" data-url="{{ route('public.wishlist.remove', $item->id) }}">{{ __('Remove') }}</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="4" class="text-center">{{ __('No product in wishlist!') }}</td>
                                    </tr>
                                @endif
                            @else
                                @if (Cart::instance('wishlist')->count())
                                    @foreach(Cart::instance('wishlist')->content() as $cartItem)
                                        @php
                                            $item = app(\Botble\Ecommerce\Repositories\Interfaces\ProductInterface::class)->findById($cartItem->id);
                                        @endphp
                                        @if (!empty($item))
                                            <tr>
                                                <td class="product-thumbnail">
                                                    <img alt="{{ $item->name }}" width="50" height="70" class="img-fluid"
                                                         style="max-height: 75px"
                                                         src="{{ RvMedia::getImageUrl($item->image, 'thumb', false, RvMedia::getDefaultImage()) }}">
                                                </td>
                                                <td class="product-name" data-title="{{ __('Product') }}">
                                                    <a href="{{ $item->original_product->url }}">{{ $item->name }}</a>
                                                </td>
                                                <td class="product-price" data-title="{{ __('Price') }}">
                                                    <div class="product__price @if ($item->front_sale_price != $item->price) sale @endif">
                                                        <span>{{ format_price($item->front_sale_price_with_taxes) }}</span>
                                                        @if ($item->front_sale_price != $item->price)
                                                            <small><del>{{ format_price($item->price_with_taxes) }}</del></small>
                                                        @endif
                                                    </div>
                                                </td>
                                                <td class="product-remove" data-title="{{ __('Add to cart') }}">
                                                    <a class="btn btn-fill-out btn-sm add-to-cart-button" data-id="{{ $item->id }}" href="{{ route('public.cart.add-to-cart') }}">{{ __('Add to cart') }}</a>
                                                </td>
                                                <td class="product-remove" data-title="{{ __('Remove') }}">
                                                    <a class="btn btn-dark btn-sm js-remove-from-wishlist-button" href="#" data-url="{{ route('public.wishlist.remove', $item->id) }}">{{ __('Remove') }}</a>
                                                </td>
                                            </tr>
                                        @endif
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="4" class="text-center">{{ __('No product in wishlist!') }}</td>
                                    </tr>
                                @endif
                            @endif
                        </tbody>
                    </table>
                </div>

                @if (auth('customer')->check())
                    <div class="mt-3 justify-content-center pagination_style1">
                        {!! $wishlist->links() !!}
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
