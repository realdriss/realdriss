<!-- START SECTION SHOP -->
<div class="section pt-0 pb-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="heading_tab_header">
                    <div class="heading_s2">
                        <h4><?php echo isset($title) ? clean($title) : null; ?></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <flash-sale-products-component url="<?php echo e(route('public.ajax.get-flash-sales')); ?>"></flash-sale-products-component>
        </div>
    </div>
</div>
<!-- END SECTION SHOP -->
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/partials/shortcodes/flash-sale.blade.php ENDPATH**/ ?>