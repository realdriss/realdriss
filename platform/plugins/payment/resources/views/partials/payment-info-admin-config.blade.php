<div class="form-group">
    <label class="control-label">{{ trans('plugins/payment::payment.charge_id') }}</label>
    {!! Form::input('text', 'charge_id', null, ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.charge_id')]) !!}
</div>
