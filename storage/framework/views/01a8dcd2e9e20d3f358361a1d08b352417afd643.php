<div class="form-group">
    <label class="control-label"><?php echo e(trans('plugins/blog::base.number_posts_per_page')); ?></label>
    <?php echo Form::number('paginate', theme_option('number_of_posts_in_a_category', 12), ['class' => 'form-control', 'placeholder' => trans('plugins/blog::base.number_posts_per_page')]); ?>

</div>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/plugins/blog/resources/views//partials/posts-short-code-admin-config.blade.php ENDPATH**/ ?>