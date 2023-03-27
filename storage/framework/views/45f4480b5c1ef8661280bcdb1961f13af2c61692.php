<?php echo Form::open(['url' => $url]); ?>

    <input type="hidden" name="order_id" value="<?php echo e($orderId); ?>">
    <div class="next-form-section">
        <div class="next-form-grid">
            <div class="next-form-grid-cell">
                <label class="text-title-field required"><?php echo e(trans('plugins/ecommerce::shipping.form_name')); ?></label>
                <input type="text" class="next-input" name="name" placeholder="<?php echo e(trans('plugins/ecommerce::shipping.form_name')); ?>" value="<?php echo e($address->name); ?>">
            </div>
            <div class="next-form-grid-cell">
                <label class="text-title-field required"><?php echo e(trans('plugins/ecommerce::shipping.phone')); ?></label>
                <input type="text" class="next-input" name="phone" placeholder="<?php echo e(trans('plugins/ecommerce::shipping.phone')); ?>" value="<?php echo e($address->phone); ?>">
            </div>
        </div>
        <div class="next-form-grid">
            <div class="next-form-grid-cell">
                <label class="text-title-field"><?php echo e(trans('plugins/ecommerce::shipping.email')); ?></label>
                <input type="text" class="next-input" name="email" placeholder="<?php echo e(trans('plugins/ecommerce::shipping.email')); ?>" value="<?php echo e($address->email); ?>">
            </div>
        </div>

        <?php if(count(EcommerceHelper::getAvailableCountries()) > 1): ?>
            <div class="next-form-grid">
                <div class="next-form-grid-cell">
                    <label class="text-title-field required"><?php echo e(trans('plugins/ecommerce::shipping.country')); ?></label>
                    <select name="country" class="form-control" >
                        <?php $__currentLoopData = ['' => trans('plugins/ecommerce::shipping.select_country')] + EcommerceHelper::getAvailableCountries(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $countryCode => $countryName): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($countryCode); ?>" <?php if($address->country == $countryCode): ?> selected <?php endif; ?>><?php echo e($countryName); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
            </div>
        <?php else: ?>
            <input type="hidden" name="country" value="<?php echo e(Arr::first(array_keys(EcommerceHelper::getAvailableCountries()))); ?>">
        <?php endif; ?>

        <div class="next-form-grid">
            <div class="next-form-grid-cell">
                <label class="text-title-field required"><?php echo e(trans('plugins/ecommerce::shipping.state')); ?></label>
                <input type="text" class="next-input" name="state" placeholder="<?php echo e(trans('plugins/ecommerce::shipping.state')); ?>" value="<?php echo e($address->state); ?>">
            </div>
        </div>

        <div class="next-form-grid">
            <div class="next-form-grid-cell">
                <label class="text-title-field required"><?php echo e(trans('plugins/ecommerce::shipping.city')); ?></label>
                <input type="text" class="next-input" name="city" placeholder="<?php echo e(trans('plugins/ecommerce::shipping.city')); ?>" value="<?php echo e($address->city); ?>">
            </div>
        </div>

        <div class="next-form-grid">
            <div class="next-form-grid-cell">
                <label class="text-title-field required"><?php echo e(trans('plugins/ecommerce::shipping.address')); ?></label>
                <input type="text" class="next-input" name="address" placeholder="<?php echo e(trans('plugins/ecommerce::shipping.address')); ?>" value="<?php echo e($address->address); ?>">
            </div>
        </div>

        <?php if(EcommerceHelper::isZipCodeEnabled()): ?>
            <div class="next-form-grid">
                <div class="next-form-grid-cell">
                    <label class="text-title-field required"><?php echo e(trans('plugins/ecommerce::shipping.zip_code')); ?></label>
                    <input type="text" class="next-input" name="zip_code" placeholder="<?php echo e(trans('plugins/ecommerce::shipping.zip_code')); ?>" value="<?php echo e($address->zip_code); ?>">
                </div>
            </div>
        <?php endif; ?>

    </div>
<?php echo Form::close(); ?>

<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/plugins/ecommerce/resources/views//orders/shipping-address/form.blade.php ENDPATH**/ ?>