<div class="form-group">
    <label class="control-label">{{ trans('plugins/payment::payment.payment_name') }}</label>
    {!! Form::input('text', 'name', null, ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.payment_name')]) !!}
</div>

<div class="form-group">
    <label class="control-label">{{ trans('plugins/payment::payment.amount') }}</label>
    {!! Form::number('amount', 1, ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.amount')]) !!}
</div>

<div class="form-group">
    <label class="control-label">{{ trans('plugins/payment::payment.currency') }}</label>
    {!! Form::input('text', 'currency', 'USD', ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.currency')]) !!}
</div>

<div class="form-group">
    <label class="control-label">{{ trans('plugins/payment::payment.callback_url') }}</label>
    {!! Form::input('text', 'callback_url', '/', ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.callback_url')]) !!}
</div>

<div class="form-group">
    <label class="control-label">{{ trans('plugins/payment::payment.return_url') }}</label>
    {!! Form::input('text', 'return_url', '/', ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.return_url')]) !!}
</div>
