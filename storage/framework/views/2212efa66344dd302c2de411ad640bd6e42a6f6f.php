

<?php $__env->startSection('content'); ?>
    <?php Theme::set('pageName', __('My Addresses')) ?>
    <div class="card">
        <div class="card-header">
            <div class="float-left">
                <h3><?php echo e(__('Create address')); ?></h3>
            </div>
            <div class="float-right">
                <a class="add-address btn btn-fill-out btn-sm" href="<?php echo e(route('customer.address.create')); ?>">
                    <span><?php echo e(__('Create address')); ?></span>
                </a>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th><?php echo e(__('Address')); ?></th>
                        <th><?php echo e(__('Is default?')); ?></th>
                        <th><?php echo e(__('Actions')); ?></th>
                    </tr>
                    </thead>
                    <tbody>

                    <?php $__empty_1 = true; $__currentLoopData = $addresses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $address): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td style="white-space: inherit;">
                            <p>
                                <?php echo e($address->name); ?>, 
                                <?php echo e($address->address); ?>,
                                <?php echo e($address->city); ?>, 
                                <?php echo e($address->state); ?>


                                <?php if(count(EcommerceHelper::getAvailableCountries()) > 1): ?>, 
                                <?php echo e($address->country_name); ?> 
                                <?php endif; ?> 
                                <?php if(EcommerceHelper::isZipCodeEnabled()): ?>, 
                                <?php echo e($address->zip_code); ?> 
                                <?php endif; ?> - <?php echo e($address->phone); ?>

                            </p>

                            </td>
                            <td style="width: 120px;">
                                <?php if($address->is_default): ?> <?php echo e(__('Yes')); ?> <?php else: ?> <?php echo e(__('No')); ?> <?php endif; ?>
                            </td>

                            <td style="width: 100px;">
                                <a class="btn btn-dark btn-sm" href="<?php echo e(route('customer.address.edit', $address->id)); ?>"><?php echo e(__('Edit')); ?></a>
                                <a class="btn btn-fill-out btn-sm" href="<?php echo e(route('customer.address.destroy', $address->id)); ?>"><?php echo e(__('Remove')); ?></a>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="5" class="text-center"><?php echo e(__('No address!')); ?></td>
                        </tr>

                    <?php endif; ?>


                        
                    </tbody>
                </table>
            </div>
            <div class="mt-3 justify-content-center pagination_style1">
                <?php echo $addresses->links(); ?>

            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make(Theme::getThemeNamespace() . '::views.ecommerce.customers.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/customers/address/list.blade.php ENDPATH**/ ?>