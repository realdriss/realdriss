<div class="deal_wrap">
    <?php if($product->isOutOfStock()): ?>
        <span class="pr_flash" style="background-color: #000"><?php echo e(__('Out Of Stock')); ?></span>
    <?php else: ?>
        <?php if($product->productLabels->count()): ?>
            <?php $__currentLoopData = $product->productLabels; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $label): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <span class="pr_flash" <?php if($label->color): ?> style="background-color: <?php echo e($label->color); ?>" <?php endif; ?>><?php echo e($label->name); ?></span>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>
    <?php endif; ?>
    <div class="product_img">
        <a href="<?php echo e($product->url); ?>">
            <img src="<?php echo e(RvMedia::getImageUrl($product->image, 'medium', false, RvMedia::getDefaultImage())); ?>" alt="<?php echo e($product->name); ?>">
        </a>
    </div>
    <div class="deal_content">
        <div class="product_info">
            <h5 class="product_title"><a href="<?php echo e($product->url); ?>"><?php echo e($product->name); ?></a></h5>
            <div class="product_price">
                <span class="price"><?php echo e(format_price($product->front_sale_price_with_taxes)); ?></span>
                <?php if($product->front_sale_price !== $product->price): ?>
                    <del><?php echo e(format_price($product->price_with_taxes)); ?></del>
                    <div class="on_sale">
                        <span><?php echo e(__(':percentage Off', ['percentage' => get_sale_percentage($product->price, $product->front_sale_price)])); ?></span>
                    </div>
                <?php endif; ?>
            </div>
            <?php if(EcommerceHelper::isReviewEnabled()): ?>
                <div class="rating_wrap">
                    <div class="rating">
                        <div class="product_rate" style="width: <?php echo e($product->reviews_avg * 20); ?>%"></div>
                    </div>
                    <span class="rating_num">(<?php echo e($product->reviews_count); ?>)</span>
                </div>
            <?php endif; ?>
        </div>
        <div class="deal_progress">
            <span class="stock-sold"><?php echo e(__('Already Sold')); ?>: <strong><?php echo e($product->pivot->sold); ?></strong></span>
            <span class="stock-available"><?php echo e(__('Available')); ?>: <strong><?php echo e($product->pivot->quantity - $product->pivot->sold); ?></strong></span>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="<?php echo e($product->pivot->quantity > 0 ? ($product->pivot->sold / $product->pivot->quantity) * 100 : 0); ?>" aria-valuemin="0" aria-valuemax="100" style="width:<?php echo e($product->pivot->quantity > 0 ? ($product->pivot->sold / $product->pivot->quantity) * 100 : 0); ?>%"> <?php echo e($product->pivot->quantity > 0 ? ($product->pivot->sold / $product->pivot->quantity) * 100 : 0); ?>% </div>
            </div>
        </div>
        <div class="countdown_time countdown_style4 mb-4" data-time="<?php echo e($flashSale->end_date); ?>" data-days-text="<?php echo e(__('Days')); ?>" data-hours-text="<?php echo e(__('Hours')); ?>" data-minutes-text="<?php echo e(__('Minutes')); ?>" data-seconds-text="<?php echo e(__('Seconds')); ?>" ></div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/partials/flash-sale-product.blade.php ENDPATH**/ ?>