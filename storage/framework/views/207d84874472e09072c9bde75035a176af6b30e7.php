

<?php $__env->startSection('content'); ?>
    <?php Theme::set('pageName', __('My Addresses')) ?>
    <div class="card">
        <div class="card-header">
            <h3><?php echo e(__('Update address')); ?></h3>
        </div>
        <div class="card-body">
        <?php echo Form::open(['route' => ['customer.address.edit', $address->id]]); ?>

            <div class="form-group">
                <label for="name"><?php echo e(__('Full Name')); ?>:</label>
                <input id="name" type="text" class="form-control" name="name" value="<?php echo e($address->name); ?>">
                <?php echo Form::error('name', $errors); ?>

            </div>

            <div class="form-group">
                <label for="email"><?php echo e(__('Email')); ?>:</label>
                <input id="email" type="text" class="form-control" name="email" value="<?php echo e($address->email); ?>">
                <?php echo Form::error('email', $errors); ?>

            </div>

           <div class="form-group">
                <label><?php echo e(__('Phone:')); ?></label>
                <input id="phone" type="text" class="form-control" name="phone" value="<?php echo e($address->phone); ?>">
                <?php echo Form::error('phone', $errors); ?>

            </div>

            <?php if(count(EcommerceHelper::getAvailableCountries()) > 1): ?>
                <div class="form-group <?php if($errors->has('country')): ?> has-error <?php endif; ?>">
                    <label for="country"><?php echo e(__('Country')); ?>:</label>
                    <select name="country" class="form-control" id="country">
                        <?php $__currentLoopData = ['' => __('Select country...')] + EcommerceHelper::getAvailableCountries(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $countryCode => $countryName): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($countryCode); ?>" <?php if($address->country == $countryCode): ?> selected <?php endif; ?>><?php echo e($countryName); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
                <?php echo Form::error('country', $errors); ?>

            <?php else: ?>
                <input type="hidden" name="country" value="<?php echo e(Arr::first(array_keys(EcommerceHelper::getAvailableCountries()))); ?>">
            <?php endif; ?>

            <div class="form-group <?php if($errors->has('state')): ?> has-error <?php endif; ?>">
                <label><?php echo e(__('State')); ?>:</label>
                <input id="state" type="text" class="form-control" name="state" value="<?php echo e($address->state); ?>">
                <?php echo Form::error('state', $errors); ?>

            </div>

            <div class="form-group <?php if($errors->has('city')): ?> has-error <?php endif; ?>">
                <label><?php echo e(__('City')); ?>:</label>
                <input id="city" type="text" class="form-control" name="city" value="<?php echo e($address->city); ?>">
                <?php echo Form::error('city', $errors); ?>

            </div>

            <div class="form-group">
                <label><?php echo e(__('Address')); ?>:</label>
                <input id="address" type="text" class="form-control" name="address" value="<?php echo e($address->address); ?>">
                <?php echo Form::error('address', $errors); ?>

            </div>

            <?php if(EcommerceHelper::isZipCodeEnabled()): ?>
                <div class="form-group">
                    <label><?php echo e(__('Zip code')); ?>:</label>
                    <input id="zip_code" type="text" class="form-control" name="zip_code" value="<?php echo e($address->zip_code); ?>">
                    <?php echo Form::error('zip_code', $errors); ?>

                </div>
            <?php endif; ?>

            <div class="form-group">
                <label for="is_default">
                    <input class="customer-checkbox" type="checkbox" name="is_default" value="1" <?php if($address->is_default): ?> checked <?php endif; ?> id="is_default">
                    <?php echo e(__('Use this address as default.')); ?>

                    <?php echo Form::error('is_default', $errors); ?>

                </label>
            </div>

            <div class="form-group">
                <button class="btn btn-fill-out btn-sm" type="submit"><?php echo e(__('Update')); ?></button>
            </div>
        <?php echo Form::close(); ?>

    </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make(Theme::getThemeNamespace() . '::views.ecommerce.customers.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/customers/address/edit.blade.php ENDPATH**/ ?>