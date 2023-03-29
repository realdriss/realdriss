<li><?php echo e($address->name); ?></li>
<?php if($address->phone): ?>
    <li>
        <a href="tel:<?php echo e($address->phone); ?>">
            <span><i class="fa fa-phone-square cursor-pointer mr5"></i></span>
            <span><?php echo e($address->phone); ?></span>
        </a>
    </li>
<?php endif; ?>
<li>
    <?php if($address->address): ?>
        <div><?php echo e($address->address); ?></div>
    <?php endif; ?>
    <?php if($address->city): ?>
        <div><?php echo e($address->city); ?></div>
    <?php endif; ?>
    <?php if($address->state): ?>
        <div><?php echo e($address->state); ?></div>
    <?php endif; ?>
    <?php if($address->country_name): ?>
        <div><?php echo e($address->country_name); ?></div>
    <?php endif; ?>
    <?php if(EcommerceHelper::isZipCodeEnabled() && $address->zip_code): ?>
        <div><?php echo e($address->zip_code); ?></div>
    <?php endif; ?>
    <div>
        <a target="_blank" class="hover-underline" href="https://maps.google.com/?q=<?php echo e($address->address); ?>, <?php echo e($address->city); ?>, <?php echo e($address->state); ?>, <?php echo e($address->country_name); ?><?php if(EcommerceHelper::isZipCodeEnabled()): ?>, <?php echo e($address->zip_code); ?> <?php endif; ?>"><?php echo e(trans('plugins/ecommerce::order.see_on_maps')); ?></a>
    </div>
</li>
<?php /**PATH C:\xampp\htdocs\realdriss\core\platform/plugins/ecommerce/resources/views//orders/shipping-address/detail.blade.php ENDPATH**/ ?>