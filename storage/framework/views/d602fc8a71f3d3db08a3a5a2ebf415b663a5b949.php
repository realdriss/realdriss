<?php if($product): ?>
    <div class="product">
        <?php if($product->productLabels->count()): ?>
            <?php $__currentLoopData = $product->productLabels; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $label): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <span class="pr_flash" <?php if($label->color): ?> style="background-color: <?php echo e($label->color); ?>" <?php endif; ?>><?php echo e($label->name); ?></span>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>
        <div class="product_img">
            <a href="<?php echo e($product->url); ?>">
                <img src="<?php echo e(RvMedia::getImageUrl($product->image, 'medium', false, RvMedia::getDefaultImage())); ?>" alt="<?php echo e($product->name); ?>">
            </a>
            <div class="product_action_box">
                <ul class="list_none pr_action_btn">
                    <?php if(EcommerceHelper::isCartEnabled()): ?>
                        <li class="add-to-cart"><a class="add-to-cart-button" data-id="<?php echo e($product->id); ?>" href="#" data-url="<?php echo e(route('public.cart.add-to-cart')); ?>"><i class="icon-basket-loaded"></i> <?php echo e(__('Add To Cart')); ?></a></li>
                    <?php endif; ?>
                    <li><a href="#" class="js-add-to-compare-button" data-url="<?php echo e(route('public.compare.add', $product->id)); ?>"><i class="icon-shuffle"></i></a></li>
                    <li><a href="<?php echo e(route('public.ajax.quick-view', $product->id)); ?>" class="popup-ajax" rel="nofollow"><i class="icon-magnifier-add"></i></a></li>
                    <li><a class="js-add-to-wishlist-button" href="#" data-url="<?php echo e(route('public.wishlist.add', $product->id)); ?>"><i class="icon-heart"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="product_info">
            <h6 class="product_title"><a href="<?php echo e($product->url); ?>"><?php echo e($product->name); ?></a></h6>
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
            <div class="pr_desc">
                <p><?php echo clean($product->description); ?></p>
            </div>
            <?php if(count($product->variationAttributeSwatchesForProductList)): ?>
                <div class="pr_switch_wrap">
                    <div class="product_color_switch">
                        <?php $__currentLoopData = $product->variationAttributeSwatchesForProductList->unique('attribute_id'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $attribute): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <?php if($attribute->display_layout == 'visual'): ?>
                                <span <?php if($attribute->image): ?> style="background-image: url(<?php echo e(RvMedia::getImageUrl($attribute->image)); ?>);" <?php else: ?> data-color="<?php echo e($attribute->color); ?>" <?php endif; ?>></span>
                            <?php endif; ?>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            <?php endif; ?>
            <div class="list_product_action_box">
                <ul class="list_none pr_action_btn">
                    <li class="add-to-cart"><a class="add-to-cart-button" data-id="<?php echo e($product->id); ?>" href="#" data-url="<?php echo e(route('public.cart.add-to-cart')); ?>"><i class="icon-basket-loaded"></i> <?php echo e(__('Add To Cart')); ?></a></li>
                    <li><a href="#" class="js-add-to-compare-button" data-url="<?php echo e(route('public.compare.add', $product->id)); ?>"><i class="icon-shuffle"></i></a></li>
                    <li><a href="<?php echo e(route('public.ajax.quick-view', $product->id)); ?>" class="popup-ajax" rel="nofollow"><i class="icon-magnifier-add"></i></a></li>
                    <li><a class="js-add-to-wishlist-button" href="#" data-url="<?php echo e(route('public.wishlist.add', $product->id)); ?>"><i class="icon-heart"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/partials/product-item-grid.blade.php ENDPATH**/ ?>