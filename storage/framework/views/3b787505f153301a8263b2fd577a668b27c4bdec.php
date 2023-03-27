<div class="col-lg-2 col-md-4 col-sm-6">
    <div class="widget">
        <h6 class="widget_title"><?php echo e($config['name']); ?></h6>
        <?php echo Menu::generateMenu(['slug' => $config['menu_id'], 'options' => ['class' => 'widget_links']]); ?>

    </div>
</div>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/////widgets/custom-menu/templates/frontend.blade.php ENDPATH**/ ?>