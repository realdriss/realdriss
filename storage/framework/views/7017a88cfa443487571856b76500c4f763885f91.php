<!-- START SECTION SHOP -->
<div class="section small_pt pb-0">
    <product-collections-component title="<?php echo clean($title); ?>" :product_collections="<?php echo e(json_encode($productCollections)); ?>" url="<?php echo e(route('public.ajax.products')); ?>"></product-collections-component>
</div>
<!-- END SECTION SHOP -->
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/partials/shortcodes/product-collections.blade.php ENDPATH**/ ?>