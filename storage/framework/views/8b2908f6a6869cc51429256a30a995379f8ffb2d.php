<?php if(Cart::instance('cart')->count() > 0): ?>
    <ul class="cart_list">
        <?php
            $products = [];
            $productIds = Cart::instance('cart')->content()->pluck('id')->toArray();

            if ($productIds) {
                $products = get_products([
                    'condition' => [
                        ['ec_products.id', 'IN', $productIds],
                    ],
                    'with' => ['slugable'],
                ]);
            }
        ?>
        <?php if(count($products)): ?>
            <?php $__currentLoopData = Cart::instance('cart')->content(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $cartItem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php
                    $product = $products->where('id', $cartItem->id)->first();
                ?>

                <?php if(!empty($product)): ?>
                    <li>
                        <a href="<?php echo e(route('public.cart.remove', $cartItem->rowId)); ?>" class="item_remove remove-cart-button"><i class="ion-close"></i></a>
                        <a href="<?php echo e($product->original_product->url); ?>"><img src="<?php echo e($cartItem->options['image']); ?>" alt="<?php echo e($product->name); ?>" /> <?php echo e($product->name); ?></a>
                        <p style="margin-bottom: 0; line-height: 20px; color: #fff;">
                            <small><?php echo e($cartItem->options['attributes'] ?? ''); ?></small>
                        </p>
                        <?php if(!empty($cartItem->options['extras']) && is_array($cartItem->options['extras'])): ?>
                            <?php $__currentLoopData = $cartItem->options['extras']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <?php if(!empty($option['key']) && !empty($option['value'])): ?>
                                    <p style="margin-bottom: 0; line-height: 20px; color: #fff;"><small><?php echo e($option['key']); ?>: <strong> <?php echo e($option['value']); ?></strong></small></p>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <?php endif; ?>
                        <span class="cart_quantity"> <?php echo e($cartItem->qty); ?> x <span class="cart_amount">
                                <?php echo e(format_price($cartItem->price)); ?> <?php if($product->front_sale_price != $product->price): ?>
                                <small><del><?php echo e(format_price($product->price)); ?></del></small>
                            <?php endif; ?>
                        </span>
                    </li>
                <?php endif; ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>
    </ul>
    <div class="cart_footer">
        <?php if(EcommerceHelper::isTaxEnabled()): ?>
            <p class="cart_total sub_total"><strong><?php echo e(__('Sub Total')); ?>:</strong> <span class="cart_price"><?php echo e(format_price(Cart::instance('cart')->rawSubTotal())); ?></span></p>
            <p class="cart_total sub_total"><strong><?php echo e(__('Tax')); ?>:</strong> <span class="cart_price"><?php echo e(format_price(Cart::instance('cart')->rawTax())); ?></span></p>
            <p class="cart_total"><strong><?php echo e(__('Total')); ?>:</strong> <span class="cart_price"><?php echo e(format_price(Cart::instance('cart')->rawSubTotal() + Cart::instance('cart')->rawTax())); ?></span></p>
        <?php else: ?>
            <p class="cart_total"><strong><?php echo e(__('Sub Total')); ?>:</strong> <span class="cart_price"><?php echo e(format_price(Cart::instance('cart')->rawSubTotal())); ?></span></p>
        <?php endif; ?>
        <p class="cart_buttons">
            <a href="<?php echo e(route('public.cart')); ?>" class="btn btn-fill-line view-cart"><?php echo e(__('View Cart')); ?></a>
            <?php if(session('tracked_start_checkout')): ?>
                <a href="<?php echo e(route('public.checkout.information', session('tracked_start_checkout'))); ?>" class="btn btn-fill-out checkout"><?php echo e(__('Checkout')); ?></a>
            <?php endif; ?>
        </p>
    </div>
<?php else: ?>
    <p class="text-center"><?php echo e(__('Your cart is empty!')); ?></p>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/themes/shopwise/partials/cart.blade.php ENDPATH**/ ?>