<div class="product-attributes"
     data-target="<?php echo e(route('public.web.get-variation-by-attributes', ['id' => $product->id])); ?>">
    <?php
        $variationInfo = $productVariationsInfo;
        $variationNextIds = [];
    ?>
    <?php $__currentLoopData = $attributeSets; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $set): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if(!$loop->first): ?>
            <?php
                $variationInfo = $productVariationsInfo->where('attribute_set_id', $set->id)->whereIn('variation_id', $variationNextIds);
            ?>
        <?php endif; ?>
        <?php if(view()->exists(Theme::getThemeNamespace(). '::views.ecommerce.attributes._layouts.' . $set->display_layout)): ?>
            <?php echo $__env->make(Theme::getThemeNamespace(). '::views.ecommerce.attributes._layouts.' . $set->display_layout, compact('selected'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <?php else: ?>
            <?php echo $__env->make(Theme::getThemeNamespace(). '::views.ecommerce.attributes._layouts.dropdown', compact('selected'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        <?php endif; ?>
        <?php
            [$variationNextIds] = handle_next_attributes_in_product(
                $attributes->where('attribute_set_id', $set->id),
                $productVariationsInfo,
                $set->id,
                $selected->pluck('id')->toArray(),
                $loop->index,
                $variationNextIds);
        ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/attributes/swatches-renderer.blade.php ENDPATH**/ ?>