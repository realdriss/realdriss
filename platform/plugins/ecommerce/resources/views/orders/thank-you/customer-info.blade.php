<div class="order-customer-info">
    <h3> {{ __('Customer information') }}</h3>
    <p>
        <span class="d-inline-block">{{ __('Full name') }}:</span>
        <span class="order-customer-info-meta">{{ $order->address->name }}</span>
    </p>
    <p>
        <span class="d-inline-block">{{ __('Phone') }}:</span>
        <span class="order-customer-info-meta">{{ $order->address->phone }}</span>
    </p>
    <p>
        <span class="d-inline-block">{{ __('Email') }}:</span>
        <span class="order-customer-info-meta">{{ $order->address->email }}</span>
    </p>
    <p>
        <span class="d-inline-block">{{ __('Address') }}:</span>
        <span class="order-customer-info-meta">{{ $order->full_address }}</span>
    </p>
    <p>
        <span class="d-inline-block">{{ __('Shipping method') }}:</span>
        <span class="order-customer-info-meta">{{ $order->shipping_method_name }} - @if ($order->shipping_amount > 0) {{ format_price($order->shipping_amount) }} @else <strong>{{ __('Free shipping') }}</strong> @endif</span>
    </p>
    <p>
        <span class="d-inline-block">{{ __('Payment method') }}:</span>
        <span class="order-customer-info-meta">{{ $order->payment->payment_channel->label() }}</span>
    </p>
    <p>
        <span class="d-inline-block">{{ __('Payment status') }}:</span>
        <span class="order-customer-info-meta" style="text-transform: uppercase">{!! $order->payment->status->toHtml() !!}</span>
    </p>
</div>
