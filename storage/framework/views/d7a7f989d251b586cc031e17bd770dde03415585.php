<!-- START SECTION SHOP -->
<div class="section small_pt small_pb">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="heading_tab_header">
                    <div class="heading_s2">
                        <h4><?php echo clean($title); ?></h4>
                    </div>
                    <div class="view_all">
                        <a href="<?php echo e(route('public.products')); ?>" class="text_default"><i class="linearicons-power"></i> <span><?php echo e(__('View All')); ?></span></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <trending-products-component url="<?php echo e(route('public.ajax.trending-products')); ?>"></trending-products-component>
        </div>
    </div>
</div>
<!-- END SECTION SHOP -->
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/themes/shopwise/partials/shortcodes/trending-products.blade.php ENDPATH**/ ?>