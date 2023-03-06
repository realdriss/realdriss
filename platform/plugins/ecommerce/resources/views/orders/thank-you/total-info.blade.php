@include('plugins/ecommerce::orders.thank-you.total-row', [
    'label' => __('Subtotal'),
    'value' => format_price($order->sub_total)
])

@include('plugins/ecommerce::orders.thank-you.total-row', [
        'label' =>  __('Shipping fee') . ($order->is_free_shipping ? ' (' . __('Using coupon code') . '<strong>' . $order->coupon_code . '</strong>)' : ''),
        'value' => format_price($order->shipping_amount)
    ])

@if ($order->discount_amount !== null)
    @include('plugins/ecommerce::orders.thank-you.total-row', [
        'label' => __('Discount'),
        'value' => format_price($order->discount_amount)
    ])
@endif

@if (EcommerceHelper::isTaxEnabled())
    @include('plugins/ecommerce::orders.thank-you.total-row', [
        'label' => __('Tax'),
        'value' => format_price($order->tax_amount)
    ])
@endif

<hr>

<div class="row">
    <div class="col-6">
        <p>{{ __('Total') }}:</p>
    </div>
    <div class="col-6 float-right">
        <p class="total-text raw-total-text"> {{ format_price($order->amount) }} </p>
    </div>
</div>
