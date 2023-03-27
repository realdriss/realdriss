<div class="form-group">
    <label class="control-label"><?php echo e(trans('plugins/payment::payment.payment_name')); ?></label>
    <?php echo Form::input('text', 'name', null, ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.payment_name')]); ?>

</div>

<div class="form-group">
    <label class="control-label"><?php echo e(trans('plugins/payment::payment.amount')); ?></label>
    <?php echo Form::number('amount', 1, ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.amount')]); ?>

</div>

<div class="form-group">
    <label class="control-label"><?php echo e(trans('plugins/payment::payment.currency')); ?></label>
    <?php echo Form::input('text', 'currency', 'USD', ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.currency')]); ?>

</div>

<div class="form-group">
    <label class="control-label"><?php echo e(trans('plugins/payment::payment.callback_url')); ?></label>
    <?php echo Form::input('text', 'callback_url', '/', ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.callback_url')]); ?>

</div>

<div class="form-group">
    <label class="control-label"><?php echo e(trans('plugins/payment::payment.return_url')); ?></label>
    <?php echo Form::input('text', 'return_url', '/', ['class' => 'form-control', 'placeholder' => trans('plugins/payment::payment.return_url')]); ?>

</div>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/plugins/payment/resources/views//partials/payment-form-admin-config.blade.php ENDPATH**/ ?>