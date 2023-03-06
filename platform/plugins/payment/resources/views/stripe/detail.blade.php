@if ($payment)
    <p>{{ trans('plugins/payment::payment.payment_id') }}: {{ $payment->id }}</p>
    <p>{{ trans('plugins/payment::payment.payer_name') }}: {{ $payment->source->name }}</p>
    <p>{{ trans('plugins/payment::payment.card') }}: {{ $payment->source->brand }} - **** **** **** {{ $payment->source->last4 }}
        - {{ $payment->source->exp_month }}/{{ $payment->source->exp_year }}</p>
    <p>{{ trans('plugins/payment::payment.country') }}: {{ $payment->source->country }}</p>
    @if (!empty($payment->source->address_line1))
        <p>{{ trans('plugins/payment::payment.address') }}: {{ $payment->source->address_line1 }}</p>
    @endif

    @if ($payment->refunds && $payment->refunds->total_count)
        <br />
        <h6 class="alert-heading">{{ trans('plugins/payment::payment.refunds.title') . ' (' . $payment->refunds->total_count . ')'}}</h6>
        <hr class="m-0 mb-4">
        @foreach ($payment->refunds->data as $item)
            <div class="alert alert-warning" role="alert">
                <p>{{ trans('plugins/payment::payment.refunds.id') }}: {{ $item->id }}</p>
                @php
                    $multiplier = \Botble\Payment\Supports\StripeHelper::getStripeCurrencyMultiplier($item->currency);

                    if ($multiplier > 1) {
                        $item->amount = round($item->amount / $multiplier, 2);
                    }
                @endphp
                <p>{{ trans('plugins/payment::payment.amount') }}: {{ $item->amount }} {{ strtoupper($item->currency) }}</p>
                <p>{{ trans('plugins/payment::payment.refunds.status') }}: {{ strtoupper($item->status) }}</p>
                <p>{{ trans('plugins/payment::payment.refunds.create_time') }}: {{ now()->parse($item->created) }}</p>
            </div>
            <br />
        @endforeach
    @endif

    @include('plugins/payment::partials.view-payment-source')
@endif
