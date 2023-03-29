<script type="text/javascript">
    var BotbleVariables = BotbleVariables || {};

    <?php if(Auth::check()): ?>
        BotbleVariables.languages = {
            tables: <?php echo json_encode(trans('core/base::tables'), JSON_HEX_APOS); ?>,
            notices_msg: <?php echo json_encode(trans('core/base::notices'), JSON_HEX_APOS); ?>,
            pagination: <?php echo json_encode(trans('pagination'), JSON_HEX_APOS); ?>,
            system: {
                'character_remain': '<?php echo e(trans('core/base::forms.character_remain')); ?>'
            },
        };
        BotbleVariables.authorized = "<?php echo e(setting('membership_authorization_at') && now()->diffInDays(Carbon\Carbon::createFromFormat('Y-m-d H:i:s', setting('membership_authorization_at'))) <= 7 ? 1 : 0); ?>";
    <?php else: ?>
        BotbleVariables.languages = {
            notices_msg: <?php echo json_encode(trans('core/base::notices'), JSON_HEX_APOS); ?>,
        };
    <?php endif; ?>
</script>

<?php $__env->startPush('footer'); ?>
    <?php if(session()->has('success_msg') || session()->has('error_msg') || (isset($errors) && $errors->count() > 0) || isset($error_msg)): ?>
        <script type="text/javascript">
            $(document).ready(function () {
                <?php if(session()->has('success_msg')): ?>
                Botble.showSuccess('<?php echo e(session('success_msg')); ?>');
                <?php endif; ?>
                <?php if(session()->has('error_msg')): ?>
                Botble.showError('<?php echo e(session('error_msg')); ?>');
                <?php endif; ?>
                <?php if(isset($error_msg)): ?>
                Botble.showError('<?php echo e($error_msg); ?>');
                <?php endif; ?>
                <?php if(isset($errors)): ?>
                <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                Botble.showError('<?php echo e($error); ?>');
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php endif; ?>
            });
        </script>
    <?php endif; ?>
<?php $__env->stopPush(); ?>
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/core/base/resources/views//elements/common.blade.php ENDPATH**/ ?>