@if ($payment)
    <p>{{ trans('plugins/payment::payment.payment_id') }}: {{ $payment->id }}</p>
    <p>{{ trans('plugins/payment::payment.amount') }}: {{ $payment->amount / 100 . ' ' . $payment->currency }}</p>
    <p>{{ trans('plugins/payment::payment.email') }}: {{ $payment->email }}</p>
    <p>{{ trans('plugins/payment::payment.phone') }}: {{ $payment->contact }}</p>
    <p>{{ trans('core/base::tables.created_at') }}: {{ now()->parse($payment->created_at) }}</p>

    @if ($payment->amount_refunded)
        <div class="alert alert-warning" role="alert">
            <h6 class="alert-heading">{{ trans('plugins/payment::payment.amount_refunded') . ': ' . ($payment->amount_refunded / 100)}}</h6>
            <p>{{ trans('plugins/payment::payment.refunds.status') . ': ' . $payment->refund_status}}</p>
        </div>
    @endif

    @include('plugins/payment::partials.view-payment-source')
@endif
