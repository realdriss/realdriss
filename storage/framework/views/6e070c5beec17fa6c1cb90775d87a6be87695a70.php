<div class="text-swatches-wrapper attribute-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color" data-type="text">
    <label class="attribute-name"><?php echo e($set->title); ?></label>
    <div class="attribute-values">
        <ul class="text-swatch attribute-swatch color-swatch">
            <?php $__currentLoopData = $attributes->where('attribute_set_id', $set->id); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $attribute): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li data-slug="<?php echo e($attribute->slug); ?>"
                    data-id="<?php echo e($attribute->id); ?>"
                    class="attribute-swatch-item <?php if(!$variationInfo->where('id', $attribute->id)->count()): ?> pe-none <?php endif; ?>">
                    <div>
                        <label>
                            <input class="product-filter-item"
                                type="radio"
                                name="attribute_<?php echo e($set->slug); ?>"
                                value="<?php echo e($attribute->id); ?>"
                                <?php echo e($selected->where('id', $attribute->id)->count() ? 'checked' : ''); ?>>
                            <span><?php echo e($attribute->title); ?></span>
                        </label>
                    </div>
                </li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/attributes/_layouts/text.blade.php ENDPATH**/ ?>