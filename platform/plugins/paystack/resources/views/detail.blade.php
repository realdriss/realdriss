@if ($payment)
    <p><span>{{ trans('plugins/payment::payment.payment_id') }}: </span>
        <a href="https://dashboard.paystack.com/#/transactions/{{ Arr::get($payment, 'id') }}"
            target="_blank" rel="noopener noreferrer">{{ Arr::get($payment, 'id') }}</a>
    </p>
    <p>{{ trans('plugins/payment::payment.amount') }}: {{ Arr::get($payment, 'amount') / 100 . ' ' . Arr::get($payment, 'currency') }}</p>
    <p>{{ trans('plugins/payment::payment.email') }}: {{ Arr::get($payment, 'customer.email') }}</p>
    <p>{{ trans('core/base::tables.created_at') }}: {{ now()->parse(Arr::get($payment, 'created_at')) }}</p>
    <p></p>
    @include('plugins/payment::partials.view-payment-source')
@endif
