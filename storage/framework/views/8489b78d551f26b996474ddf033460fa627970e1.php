<div class="visual-swatches-wrapper attribute-swatches-wrapper form-group product__attribute product__color" data-type="visual">
    <label class="attribute-name"><?php echo e($set->title); ?></label>
    <div class="attribute-values">
        <ul class="visual-swatch color-swatch attribute-swatch">
            <?php $__currentLoopData = $attributes->where('attribute_set_id', $set->id); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $attribute): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li data-slug="<?php echo e($attribute->slug); ?>"
                    data-id="<?php echo e($attribute->id); ?>"
                    class="attribute-swatch-item <?php if(!$variationInfo->where('id', $attribute->id)->count()): ?> pe-none <?php endif; ?>"
                    title="<?php echo e($attribute->title); ?>">
                    <div class="custom-radio">
                        <label>
                            <input class="form-control product-filter-item"
                                type="radio"
                                name="attribute_<?php echo e($set->slug); ?>"
                                value="<?php echo e($attribute->id); ?>"
                                <?php echo e($selected->where('id', $attribute->id)->count() ? 'checked' : ''); ?>>
                            <span style="<?php echo e($attribute->image ? 'background-image: url(' . RvMedia::getImageUrl($attribute->image) . ');' : 'background-color: ' . $attribute->color . ';'); ?>"></span>
                        </label>
                    </div>
                </li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/attributes/_layouts/visual.blade.php ENDPATH**/ ?>