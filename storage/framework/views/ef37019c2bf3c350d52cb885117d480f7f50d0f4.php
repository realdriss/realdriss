<li class="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
    <a href="javascript:;" class="dropdown-toggle dropdown-header-name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-shopping-cart"></i>
        <span class="badge badge-default"> <?php echo e(count($orders)); ?> </span>
    </a>
    <ul class="dropdown-menu dropdown-menu-right">
        <li class="external">
            <h3><?php echo trans('plugins/ecommerce::order.new_order_notice', ['count' => count($orders)]); ?></h3>
            <a href="<?php echo e(route('orders.index')); ?>"><?php echo e(trans('plugins/ecommerce::order.view_all')); ?></a>
        </li>
        <li>
            <ul class="dropdown-menu-list scroller" style="height: <?php echo e(count($orders) * 70); ?>px;" data-handle-color="#637283">
                <?php $__currentLoopData = $orders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $order): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <li>
                        <a href="<?php echo e(route('orders.edit', $order->id)); ?>">
                            <span class="photo">
                                <img src="<?php echo e(\Botble\Base\Supports\Gravatar::image($order->address->email)); ?>" class="rounded-circle" alt="<?php echo e($order->address->name); ?>">
                            </span>
                            <span class="subject"><span class="from"> <?php echo e($order->address->name); ?> </span><span class="time"><?php echo e($order->created_at->toDateTimeString()); ?> </span></span>
                            <span class="message"> <?php echo e($order->address->phone); ?> - <?php echo e($order->address->email); ?> </span>
                        </a>
                    </li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </li>
    </ul>
</li>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/plugins/ecommerce/resources/views//orders/notification.blade.php ENDPATH**/ ?>