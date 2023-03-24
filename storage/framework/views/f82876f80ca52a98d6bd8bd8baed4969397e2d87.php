<div class="form-group">
    <label for="name" class="control-label required"><?php echo e(trans('core/base::forms.name')); ?></label>
    <?php echo Form::text('name', old('name'), ['class' => 'form-control', 'id' => 'name', 'placeholder' => trans('core/base::forms.name'), 'data-counter' => 120]); ?>

</div>
<div class="form-group">
    <label for="description" class="control-label required"><?php echo e(trans('core/base::forms.description')); ?></label>
    <?php echo Form::textarea('description', old('description'), ['class' => 'form-control', 'rows' => 4, 'id' => 'description', 'placeholder' => trans('core/base::forms.description'), 'data-counter' => 400]); ?>

</div><?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/plugins/backup/resources/views//partials/create.blade.php ENDPATH**/ ?>