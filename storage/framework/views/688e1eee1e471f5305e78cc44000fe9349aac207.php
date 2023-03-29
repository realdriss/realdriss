
<?php $__env->startSection('content'); ?>
    <div class="max-width-1200">
        <div class="ui-layout">
            <div class="flexbox-layout-sections" id="main-order-content">
                <?php if($order->status == \Botble\Ecommerce\Enums\OrderStatusEnum::CANCELED): ?>
                    <div class="ui-layout__section">
                        <div class="ui-layout__item">
                            <div class="ui-banner ui-banner--status-warning">
                                <div class="ui-banner__ribbon">
                                    <svg class="svg-next-icon svg-next-icon-size-20">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#alert-circle"></use>
                                    </svg>
                                </div>
                                <div class="ui-banner__content">
                                    <h2 class="ui-banner__title"><?php echo e(trans('plugins/ecommerce::order.order_canceled')); ?></h2>
                                    <div class="ws-nm">
                                        <?php echo e(trans('plugins/ecommerce::order.order_was_canceled_at')); ?> <strong><?php echo e(BaseHelper::formatDate($order->updated_at, 'H:i d/m/Y')); ?></strong>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
                <div class="flexbox-layout-section-primary mt20">
                    <div class="ui-layout__item">
                        <div class="wrapper-content">
                            <div class="pd-all-20">
                                <div class="flexbox-grid-default">
                                    <div class="flexbox-auto-right mr5">
                                        <label class="title-product-main text-no-bold"><?php echo e(trans('plugins/ecommerce::order.order_information')); ?> <?php echo e(get_order_code($order->id)); ?></label>
                                    </div>
                                </div>
                                <div class="mt20">
                                    <?php if($order->shipment->id): ?>
                                        <svg class="svg-next-icon svg-next-icon-size-16 next-icon--right-spacing-quartered">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-orders"></use>
                                        </svg>
                                        <strong class="ml5"><?php echo e(trans('plugins/ecommerce::order.completed')); ?></strong>
                                    <?php else: ?>
                                        <svg class="svg-next-icon svg-next-icon-size-16 svg-next-icon-gray">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-order-unfulfilled-16"></use>
                                        </svg>
                                        <strong class="ml5"><?php echo e(trans('plugins/ecommerce::order.completed')); ?></strong>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="pd-all-20 p-none-t border-top-title-main">
                                <div class="table-wrap">
                                    <table class="table-order table-divided">
                                        <tbody>
                                            <?php $__currentLoopData = $order->products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $orderProduct): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <?php
                                                    $product = get_products([
                                                        'condition' => [
                                                            'ec_products.status' => \Botble\Base\Enums\BaseStatusEnum::PUBLISHED,
                                                            'ec_products.id' => $orderProduct->product_id,
                                                        ],
                                                        'take' => 1,
                                                        'select' => [
                                                            'ec_products.id',
                                                            'ec_products.images',
                                                            'ec_products.name',
                                                            'ec_products.price',
                                                            'ec_products.sale_price',
                                                            'ec_products.sale_type',
                                                            'ec_products.start_date',
                                                            'ec_products.end_date',
                                                            'ec_products.sku',
                                                            'ec_products.is_variation',
                                                        ],
                                                    ]);
                                                ?>

                                                    <tr>
                                                    <?php if($product): ?>
                                                        <td class="width-60-px min-width-60-px vertical-align-t">
                                                            <div class="wrap-img"><img class="thumb-image thumb-image-cartorderlist" src="<?php echo e(RvMedia::getImageUrl($product->original_product->image, 'thumb', false, RvMedia::getDefaultImage())); ?>" alt="<?php echo e($orderProduct->product_name); ?>"></div>
                                                        </td>
                                                    <?php endif; ?>
                                                    <td class="pl5 p-r5 min-width-200-px">
                                                        <a class="text-underline hover-underline pre-line" target="_blank" href="<?php echo e(route('products.edit', $orderProduct->product_id)); ?>" title="<?php echo e($orderProduct->product_name); ?>">
                                                            <?php echo e($orderProduct->product_name); ?></a>
                                                        <?php if($product): ?>
                                                            &nbsp;
                                                            <?php if($product->sku): ?>
                                                                (<?php echo e(trans('plugins/ecommerce::order.sku')); ?>: <strong><?php echo e($product->sku); ?></strong>)
                                                            <?php endif; ?>
                                                            <?php if($product->is_variation): ?>
                                                                <p class="mb-0">
                                                                    <small><?php echo e($product->variation_attributes); ?></small>
                                                                </p>
                                                            <?php endif; ?>
                                                        <?php endif; ?>

                                                        <?php if(!empty($orderProduct->options) && is_array($orderProduct->options)): ?>
                                                            <?php $__currentLoopData = $orderProduct->options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                                <?php if(!empty($option['key']) && !empty($option['value'])): ?>
                                                                    <p class="mb-0"><small><?php echo e($option['key']); ?>: <strong> <?php echo e($option['value']); ?></strong></small></p>
                                                                <?php endif; ?>
                                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                        <?php endif; ?>

                                                        <?php echo apply_filters(ECOMMERCE_ORDER_DETAIL_EXTRA_HTML, null); ?>

                                                        <?php if($order->shipment->id): ?>
                                                            <ul class="unstyled">
                                                                <li class="simple-note">
                                                                    <a><span><?php echo e($orderProduct->qty); ?></span><span class="text-lowercase"> <?php echo e(trans('plugins/ecommerce::order.completed')); ?></span></a>
                                                                    <ul class="dom-switch-target line-item-properties small">
                                                                        <li class="ws-nm">
                                                                            <span class="bull">↳</span>
                                                                            <span class="black"><?php echo e(trans('plugins/ecommerce::order.shipping')); ?> </span>
                                                                            <a class="text-underline bold-light" target="_blank" title="<?php echo e($order->shipping_method_name); ?>" href="<?php echo e(route('ecommerce.shipments.edit', $order->shipment->id)); ?>"><?php echo e($order->shipping_method_name); ?></a>
                                                                        </li>

                                                                        <?php if(is_plugin_active('marketplace') && $order->store->name): ?>
                                                                            <li class="ws-nm">
                                                                                <span class="bull">↳</span>
                                                                                <span class="black"><?php echo e(trans('plugins/marketplace::store.store')); ?></span>
                                                                                <a href="<?php echo e($order->store->url); ?>" class="bold-light" target="_blank"><?php echo e($order->store->name); ?></a>
                                                                            </li>
                                                                        <?php endif; ?>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        <?php endif; ?>
                                                    </td>
                                                    <td class="pl5 p-r5 text-right">
                                                        <div class="inline_block">
                                                            <span><?php echo e(format_price($orderProduct->price)); ?></span>
                                                        </div>
                                                    </td>
                                                    <td class="pl5 p-r5 text-center">x</td>
                                                    <td class="pl5 p-r5">
                                                        <span><?php echo e($orderProduct->qty); ?></span>
                                                    </td>
                                                    <td class="pl5 text-right"><?php echo e(format_price($orderProduct->price * $orderProduct->qty)); ?></td>
                                                </tr>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="pd-all-20 p-none-t">
                                <div class="flexbox-grid-default block-rps-768">
                                    <div class="flexbox-auto-right p-r5">

                                    </div>
                                    <div class="flexbox-auto-right pl5">
                                        <div class="table-wrap">
                                            <table class="table-normal table-none-border table-color-gray-text">
                                                <tbody>
                                                <tr>
                                                    <td class="text-right color-subtext"><?php echo e(trans('plugins/ecommerce::order.sub_amount')); ?></td>
                                                    <td class="text-right pl10">
                                                        <span><?php echo e(format_price($order->sub_total)); ?></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-right color-subtext mt10">
                                                        <p class="mb0"><?php echo e(trans('plugins/ecommerce::order.discount')); ?></p>
                                                        <?php if($order->coupon_code): ?>
                                                            <p class="mb0"><?php echo trans('plugins/ecommerce::order.coupon_code', ['code' => Html::tag('strong', $order->coupon_code)->toHtml()]); ?></p>
                                                        <?php elseif($order->discount_description): ?>
                                                            <p class="mb0"><?php echo e($order->discount_description); ?></p>
                                                        <?php endif; ?>
                                                    </td>
                                                    <td class="text-right p-none-b pl10">
                                                        <p class="mb0"><?php echo e(format_price($order->discount_amount)); ?></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-right color-subtext mt10">
                                                        <p class="mb0"><?php echo e(trans('plugins/ecommerce::order.shipping_fee')); ?></p>
                                                        <p class="mb0 font-size-12px"><?php echo e($order->shipping_method_name); ?></p>
                                                        <p class="mb0 font-size-12px"><?php echo e(ecommerce_convert_weight($weight)); ?> <?php echo e(ecommerce_weight_unit(true)); ?></p>
                                                    </td>
                                                    <td class="text-right p-none-t pl10">
                                                        <p class="mb0"><?php echo e(format_price($order->shipping_amount)); ?></p>
                                                    </td>
                                                </tr>
                                                <?php if(EcommerceHelper::isTaxEnabled()): ?>
                                                    <tr>
                                                        <td class="text-right color-subtext mt10">
                                                            <p class="mb0"><?php echo e(trans('plugins/ecommerce::order.tax')); ?></p>
                                                        </td>
                                                        <td class="text-right p-none-t pl10">
                                                            <p class="mb0"><?php echo e(format_price($order->tax_amount)); ?></p>
                                                        </td>
                                                    </tr>
                                                <?php endif; ?>
                                                <tr>
                                                    <td class="text-right mt10">
                                                        <p class="mb0 color-subtext"><?php echo e(trans('plugins/ecommerce::order.total_amount')); ?></p>
                                                        <?php if($order->payment->id): ?>
                                                            <p class="mb0  font-size-12px"><a href="<?php echo e(route('payment.show', $order->payment->id)); ?>" target="_blank"><?php echo e($order->payment->payment_channel->label()); ?></a></p>
                                                        <?php endif; ?>
                                                    </td>
                                                    <td class="text-right text-no-bold p-none-t pl10">
                                                        <?php if($order->payment->id): ?>
                                                            <a href="<?php echo e(route('payment.show', $order->payment->id)); ?>" target="_blank">
                                                                <span><?php echo e(format_price($order->amount)); ?></span>
                                                            </a>
                                                        <?php else: ?>
                                                            <span><?php echo e(format_price($order->amount)); ?></span>
                                                        <?php endif; ?>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="border-bottom"></td>
                                                    <td class="border-bottom"></td>
                                                </tr>
                                                <tr>
                                                    <td class="text-right color-subtext"><?php echo e(trans('plugins/ecommerce::order.paid_amount')); ?></td>
                                                    <td class="text-right color-subtext pl10">
                                                        <?php if($order->payment->id): ?>
                                                            <a href="<?php echo e(route('payment.show', $order->payment->id)); ?>" target="_blank">
                                                                <span><?php echo e(format_price($order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::COMPLETED ? $order->payment->amount : 0)); ?></span>
                                                            </a>
                                                        <?php else: ?>
                                                            <span><?php echo e(format_price($order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::COMPLETED ? $order->payment->amount : 0)); ?></span>
                                                        <?php endif; ?>
                                                    </td>
                                                </tr>
                                                <?php if($order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::REFUNDED): ?>
                                                    <tr class="hidden">
                                                        <td class="text-right color-subtext"><?php echo e(trans('plugins/ecommerce::order.refunded_amount')); ?></td>
                                                        <td class="text-right pl10">
                                                            <span><?php echo e(format_price($order->payment->amount)); ?></span>
                                                        </td>
                                                    </tr>
                                                <?php endif; ?>
                                                <tr class="hidden">
                                                    <td class="text-right color-subtext"><?php echo e(trans('plugins/ecommerce::order.amount_received')); ?></td>
                                                    <td class="text-right pl10">
                                                        <span><?php echo e(format_price($order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::COMPLETED ? $order->amount : 0)); ?></span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <br>
                                        <div class="text-right">
                                            <a href="<?php echo e(route('orders.generate-invoice', $order->id)); ?>" class="btn btn-info">
                                                <i class="fa fa-download"></i> <?php echo e(trans('plugins/ecommerce::order.download_invoice')); ?>

                                            </a>
                                        </div>
                                        <div class="pd-all-20">
                                            <form action="<?php echo e(route('orders.edit', $order->id)); ?>">
                                                <label class="text-title-field"><?php echo e(trans('plugins/ecommerce::order.note')); ?></label>
                                                <textarea class="ui-text-area textarea-auto-height" name="description" rows="3" placeholder="<?php echo e(trans('plugins/ecommerce::order.add_note')); ?>"><?php echo e($order->description); ?></textarea>
                                                <div class="mt10">
                                                    <button type="button" class="btn btn-primary btn-update-order"><?php echo e(trans('plugins/ecommerce::order.save')); ?></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pd-all-20 border-top-title-main">
                                <div class="flexbox-grid-default flexbox-align-items-center">
                                    <div class="flexbox-auto-left">
                                        <svg class="svg-next-icon svg-next-icon-size-20 <?php if($order->is_confirmed): ?> svg-next-icon-green <?php else: ?> svg-next-icon-gray <?php endif; ?>">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-checkmark"></use>
                                        </svg>
                                    </div>
                                    <div class="flexbox-auto-right ml15 mr15 text-upper">
                                        <?php if($order->is_confirmed): ?>
                                            <span><?php echo e(trans('plugins/ecommerce::order.order_was_confirmed')); ?></span>
                                        <?php else: ?>
                                            <span><?php echo e(trans('plugins/ecommerce::order.confirm_order')); ?></span>
                                        <?php endif; ?>
                                    </div>
                                    <?php if(!$order->is_confirmed): ?>
                                        <div class="flexbox-auto-left">
                                            <form action="<?php echo e(route('orders.confirm')); ?>">
                                                <input type="hidden" name="order_id" value="<?php echo e($order->id); ?>">
                                                <button class="btn btn-primary btn-confirm-order"><?php echo e(trans('plugins/ecommerce::order.confirm')); ?></button>
                                            </form>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="pd-all-20 border-top-title-main">
                                <div class="flexbox-grid-default flexbox-flex-wrap flexbox-align-items-center">
                                    <?php if($order->status == \Botble\Ecommerce\Enums\OrderStatusEnum::CANCELED): ?>
                                        <div class="flexbox-auto-left">
                                            <svg class="svg-next-icon svg-next-icon-size-24 svg-next-icon-gray">
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-error"></use>
                                            </svg>
                                        </div>
                                        <div class="flexbox-auto-content ml15 mr15 text-upper">
                                            <span><?php echo e(trans('plugins/ecommerce::order.order_was_canceled')); ?></span>
                                        </div>
                                    <?php elseif($order->payment->id): ?>
                                        <div class="flexbox-auto-left">
                                            <?php if(!$order->payment->status || $order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::PENDING): ?>
                                                <svg class="svg-next-icon svg-next-icon-size-24 svg-next-icon-gray">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-credit-card"></use>
                                                </svg>
                                            <?php elseif($order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::COMPLETED || $order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::PENDING): ?>
                                                <svg class="svg-next-icon svg-next-icon-size-20 svg-next-icon-green">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-checkmark"></use>
                                                </svg>
                                            <?php endif; ?>
                                        </div>
                                        <div class="flexbox-auto-content ml15 mr15 text-upper">
                                            <?php if(!$order->payment->status || $order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::PENDING): ?>
                                                <span><?php echo e(trans('plugins/ecommerce::order.pending_payment')); ?></span>
                                            <?php elseif($order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::COMPLETED): ?>
                                                <span><?php echo e(trans('plugins/ecommerce::order.payment_was_accepted', ['money' => format_price($order->payment->amount - $order->payment->refunded_amount)])); ?></span>
                                            <?php elseif($order->payment->amount - $order->payment->refunded_amount == 0): ?>
                                                <span><?php echo e(trans('plugins/ecommerce::order.payment_was_refunded')); ?></span>
                                            <?php endif; ?>
                                        </div>
                                        <?php if(!$order->payment->status || in_array($order->payment->status, [\Botble\Payment\Enums\PaymentStatusEnum::PENDING])): ?>
                                            <div class="flexbox-auto-left">
                                                <button class="btn btn-primary btn-trigger-confirm-payment" data-target="<?php echo e(route('orders.confirm-payment', $order->id)); ?>"><?php echo e(trans('plugins/ecommerce::order.confirm_payment')); ?></button>
                                            </div>
                                        <?php endif; ?>
                                        <?php if($order->payment->status == \Botble\Payment\Enums\PaymentStatusEnum::COMPLETED && (($order->payment->amount - $order->payment->refunded_amount > 0) || ($order->products->sum('qty') - $order->products->sum('restock_quantity') > 0))): ?>
                                            <div class="flexbox-auto-left">
                                                <button class="btn btn-secondary ml10 btn-trigger-refund"><?php echo e(trans('plugins/ecommerce::order.refund')); ?></button>
                                            </div>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="pd-all-20 border-top-title-main">
                                <div class="flexbox-grid-default flexbox-flex-wrap flexbox-align-items-center">
                                    <?php if($order->status == \Botble\Ecommerce\Enums\OrderStatusEnum::CANCELED && !$order->shipment->id): ?>
                                        <div class="flexbox-auto-left">
                                            <svg class="svg-next-icon svg-next-icon-size-20 svg-next-icon-green">
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-checkmark"></use>
                                            </svg>
                                        </div>
                                        <div class="flexbox-auto-content ml15 mr15 text-upper">
                                            <span><?php echo e(trans('plugins/ecommerce::order.all_products_are_not_delivered')); ?></span>
                                        </div>
                                    <?php else: ?>
                                        <?php if($order->shipment->id): ?>
                                            <div class="flexbox-auto-left">
                                                <svg class="svg-next-icon svg-next-icon-size-20 svg-next-icon-green">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-checkmark"></use>
                                                </svg>
                                            </div>
                                            <div class="flexbox-auto-content ml15 mr15 text-upper">
                                                <span><?php echo e(trans('plugins/ecommerce::order.delivery')); ?></span>
                                            </div>
                                        <?php else: ?>
                                            <div class="flexbox-auto-left">
                                                <svg class="svg-next-icon svg-next-icon-size-24 svg-next-icon-gray">
                                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-shipping"></use>
                                                </svg>
                                            </div>
                                            <div class="flexbox-auto-content ml15 mr15 text-upper">
                                                <span><?php echo e(trans('plugins/ecommerce::order.delivery')); ?></span>
                                            </div>
                                            <div class="flexbox-auto-left">
                                                <div class="item">
                                                    <button class="btn btn-primary btn-trigger-shipment" data-target="<?php echo e(route('orders.get-shipment-form', $order->id)); ?>"><?php echo e(trans('plugins/ecommerce::order.delivery')); ?></button>
                                                </div>
                                            </div>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <?php if(!$order->shipment->id): ?>
                                <div class="shipment-create-wrap hidden"></div>
                            <?php else: ?>
                                <?php echo $__env->make('plugins/ecommerce::orders.shipment-detail', ['shipment' => $order->shipment], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                            <?php endif; ?>
                        </div>
                        <div class="mt20 mb20">
                            <div>
                                <div class="comment-log ws-nm">
                                    <div class="comment-log-title">
                                        <label class="bold-light m-xs-b hide-print"><?php echo e(trans('plugins/ecommerce::order.history')); ?></label>
                                    </div>
                                    <div class="comment-log-timeline">
                                        <div class="column-left-history ps-relative" id="order-history-wrapper">
                                            <?php $__currentLoopData = $order->histories()->orderBy('id', 'DESC')->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $history): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <div class="item-card">
                                                    <div class="item-card-body clearfix">
                                                        <div class="item comment-log-item comment-log-item-date ui-feed__timeline">
                                                            <div class="ui-feed__item ui-feed__item--message">
                                                                <span class="ui-feed__marker <?php if($history->user_id): ?> ui-feed__marker--user-action <?php endif; ?>"></span>
                                                                <div class="ui-feed__message">
                                                                    <div class="timeline__message-container">
                                                                        <div class="timeline__inner-message">
                                                                            <?php if(in_array($history->action, ['confirm_payment', 'refund'])): ?>
                                                                                <a href="#" class="text-no-bold show-timeline-dropdown hover-underline" data-target="#history-line-<?php echo e($history->id); ?>">
                                                                                    <span><?php echo e(OrderHelper::processHistoryVariables($history)); ?></span>
                                                                                </a>
                                                                            <?php else: ?>
                                                                                <span><?php echo e(OrderHelper::processHistoryVariables($history)); ?></span>
                                                                            <?php endif; ?>
                                                                        </div>
                                                                        <time class="timeline__time"><span><?php echo e($history->created_at); ?></span></time>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <?php if($history->action == 'refund' && Arr::get($history->extras, 'amount', 0) > 0): ?>
                                                                <div class="timeline-dropdown" id="history-line-<?php echo e($history->id); ?>">
                                                                    <table>
                                                                        <tbody>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.order_number')); ?></th>
                                                                            <td><a href="<?php echo e(route('orders.edit', $order->id)); ?>" title="<?php echo e(get_order_code($order->id)); ?>"><?php echo e(get_order_code($order->id)); ?></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.description')); ?></th>
                                                                            <td><?php echo e($history->description . ' ' . trans('plugins/ecommerce::order.from') . ' ' . $order->payment->payment_channel->label()); ?></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.amount')); ?></th>
                                                                            <td><?php echo e(format_price(Arr::get($history->extras, 'amount', 0))); ?></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.status')); ?></th>
                                                                            <td><?php echo e(trans('plugins/ecommerce::order.successfully')); ?></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.transaction_type')); ?></th>
                                                                            <td><?php echo e(trans('plugins/ecommerce::order.refund')); ?></td>
                                                                        </tr>
                                                                        <?php if($order->payment->user->getFullName()): ?>
                                                                            <tr>
                                                                                <th><?php echo e(trans('plugins/ecommerce::order.staff')); ?></th>
                                                                                <td><?php echo e($order->payment->user->getFullName() ? $order->payment->user->getFullName() : trans('plugins/ecommerce::order.n_a')); ?></td>
                                                                            </tr>
                                                                        <?php endif; ?>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.refund_date')); ?></th>
                                                                            <td><?php echo e($history->created_at); ?></td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            <?php endif; ?>
                                                            <?php if($history->action == 'confirm_payment' && $order->payment): ?>
                                                                <div class="timeline-dropdown" id="history-line-<?php echo e($history->id); ?>">
                                                                    <table>
                                                                        <tbody>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.order_number')); ?></th>
                                                                            <td><a href="<?php echo e(route('orders.edit', $order->id)); ?>" title="<?php echo e(get_order_code($order->id)); ?>"><?php echo e(get_order_code($order->id)); ?></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.description')); ?></th>
                                                                            <td><?php echo trans('plugins/ecommerce::order.mark_payment_as_confirmed', ['method' => $order->payment->payment_channel->label()]); ?></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.transaction_amount')); ?></th>
                                                                            <td><?php echo e(format_price($order->payment->amount)); ?></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.payment_gateway')); ?></th>
                                                                            <td><?php echo e($order->payment->payment_channel->label()); ?></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.status')); ?></th>
                                                                            <td><?php echo e(trans('plugins/ecommerce::order.successfully')); ?></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.transaction_type')); ?></th>
                                                                            <td><?php echo e(trans('plugins/ecommerce::order.confirm')); ?></td>
                                                                        </tr>
                                                                        <?php if($order->payment->user->getFullName()): ?>
                                                                            <tr>
                                                                                <th><?php echo e(trans('plugins/ecommerce::order.staff')); ?></th>
                                                                                <td><?php echo e($order->payment->user->getFullName() ? $order->payment->user->getFullName() : trans('plugins/ecommerce::order.n_a')); ?></td>
                                                                            </tr>
                                                                        <?php endif; ?>
                                                                        <tr>
                                                                            <th><?php echo e(trans('plugins/ecommerce::order.payment_date')); ?></th>
                                                                            <td><?php echo e($history->created_at); ?></td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            <?php endif; ?>
                                                            <?php if($history->action == 'send_order_confirmation_email'): ?>
                                                                <div class="ui-feed__item ui-feed__item--action">
                                                                    <span class="ui-feed__spacer"></span>
                                                                    <div class="timeline__action-group">
                                                                        <a href="#" class="btn hide-print timeline__action-button hover-underline btn-trigger-resend-order-confirmation-modal" data-action="<?php echo e(route('orders.send-order-confirmation-email', $history->order_id)); ?>"><?php echo e(trans('plugins/ecommerce::order.resend')); ?></a>
                                                                    </div>
                                                                </div>
                                                            <?php endif; ?>
                                                        </div>
                                                    </div>
                                                </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="flexbox-layout-section-secondary mt20">
                    <div class="ui-layout__item">
                        <div class="wrapper-content mb20">
                            <div class="next-card-section p-none-b">
                                <div class="flexbox-grid-default flexbox-align-items-center">
                                    <div class="flexbox-auto-content-left">
                                        <label class="title-product-main text-no-bold"><?php echo e(trans('plugins/ecommerce::order.customer_label')); ?></label>
                                    </div>
                                    <div class="flexbox-auto-left">
                                        <img class="width-30-px radius-cycle" width="40" src="<?php echo e($order->user->id ? $order->user->avatar_url : $order->address->avatar_url); ?>" alt="<?php echo e($order->address->name); ?>">
                                    </div>
                                </div>
                            </div>
                            <div class="next-card-section border-none-t">
                                <div class="mb5">
                                    <strong class="text-capitalize"><?php echo e($order->user->name ?: $order->address->name); ?></strong>
                                </div>
                                <?php if($order->user->id): ?>
                                    <div><i class="fas fa-inbox mr5"></i><span><?php echo e($order->user->orders()->count()); ?></span> <?php echo e(trans('plugins/ecommerce::order.orders')); ?></div>
                                <?php endif; ?>
                                <ul class="ws-nm text-infor-subdued">
                                    <li class="overflow-ellipsis"><a class="hover-underline" href="mailto:<?php echo e($order->user->email ?: $order->address->email); ?>"><?php echo e($order->user->email ?: $order->address->email); ?></a></li>
                                    <?php if($order->user->id): ?>
                                        <li><div><?php echo e(trans('plugins/ecommerce::order.have_an_account_already')); ?></div></li>
                                    <?php else: ?>
                                        <li><div><?php echo e(trans('plugins/ecommerce::order.dont_have_an_account_yet')); ?></div></li>
                                    <?php endif; ?>
                                </ul>
                            </div>
                            <div class="next-card-section">
                                <div class="flexbox-grid-default flexbox-align-items-center">
                                    <div class="flexbox-auto-content-left">
                                        <label class="title-text-second"><strong><?php echo e(trans('plugins/ecommerce::order.shipping_address')); ?></strong></label>
                                    </div>
                                    <div class="flexbox-auto-content-right text-right">
                                        <a href="#" class="btn-trigger-update-shipping-address">
                                        <span data-placement="top" title="" data-toggle="tooltip" data-original-title="<?php echo e(trans('plugins/ecommerce::order.update_address')); ?>">
                                            <svg class="svg-next-icon svg-next-icon-size-12">
                                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-edit"></use>
                                            </svg>
                                        </span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <ul class="ws-nm text-infor-subdued shipping-address-info">
                                        <?php echo $__env->make('plugins/ecommerce::orders.shipping-address.detail', ['address' => $order->address], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <?php if(is_plugin_active('marketplace') && $order->store->name): ?>
                            <div class="wrapper-content bg-gray-white mb20">
                                <div class="pd-all-20">
                                    <div class="p-b10">
                                        <strong><?php echo e(trans('plugins/marketplace::store.store')); ?></strong>
                                        <ul class="p-sm-r mb-0">
                                            <li class="ws-nm">
                                                <a href="<?php echo e($order->store->url); ?>" class="ww-bw text-no-bold" target="_blank"><?php echo e($order->store->name); ?></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>

                        <div class="wrapper-content bg-gray-white mb20">
                            <div class="pd-all-20">
                                <a href="<?php echo e(route('orders.reorder', ['order_id' => $order->id])); ?>" class="btn btn-info"><?php echo e(trans('plugins/ecommerce::order.reorder')); ?></a>&nbsp;
                                <?php if(!in_array($order->status, [\Botble\Ecommerce\Enums\OrderStatusEnum::CANCELED, \Botble\Ecommerce\Enums\OrderStatusEnum::COMPLETED])): ?>
                                    <a href="#" class="btn btn-secondary btn-trigger-cancel-order" data-target="<?php echo e(route('orders.cancel', $order->id)); ?>"><?php echo e(trans('plugins/ecommerce::order.cancel')); ?></a>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php echo Form::modalAction('resend-order-confirmation-email-modal', trans('plugins/ecommerce::order.resend_order_confirmation'), 'info', trans('plugins/ecommerce::order.resend_order_confirmation_description', ['email' => $order->user->id ? $order->user->email : $order->address->email]), 'confirm-resend-confirmation-email-button', trans('plugins/ecommerce::order.send')); ?>

    <?php echo Form::modalAction('cancel-shipment-modal', trans('plugins/ecommerce::order.cancel_shipping_confirmation'), 'info', trans('plugins/ecommerce::order.cancel_shipping_confirmation_description'), 'confirm-cancel-shipment-button', trans('plugins/ecommerce::order.confirm')); ?>

    <?php echo Form::modalAction('update-shipping-address-modal', trans('plugins/ecommerce::order.update_address'), 'info', view('plugins/ecommerce::orders.shipping-address.form', ['address' => $order->address, 'orderId' => $order->id, 'url' => route('orders.update-shipping-address', $address->id ?? 0)])->render(), 'confirm-update-shipping-address-button', trans('plugins/ecommerce::order.update'), 'modal-md'); ?>

    <?php echo Form::modalAction('cancel-order-modal', trans('plugins/ecommerce::order.cancel_order_confirmation'), 'info', trans('plugins/ecommerce::order.cancel_order_confirmation_description'), 'confirm-cancel-order-button', trans('plugins/ecommerce::order.cancel_order')); ?>

    <?php echo Form::modalAction('confirm-payment-modal', trans('plugins/ecommerce::order.confirm_payment'), 'info', trans('plugins/ecommerce::order.confirm_payment_confirmation_description', ['method' => $order->payment->payment_channel->label()]), 'confirm-payment-order-button', trans('plugins/ecommerce::order.confirm_payment')); ?>

    <?php echo Form::modalAction('confirm-refund-modal', trans('plugins/ecommerce::order.refund'), 'info', view('plugins/ecommerce::orders.refund.modal', ['order' => $order, 'url' => route('orders.refund', $order->id)])->render(), 'confirm-refund-payment-button', trans('plugins/ecommerce::order.refund') . ' <span class="refund-amount-text">' . format_price($order->payment->amount - $order->payment->refunded_amount) . '</span>'); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('core/base::layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\realdriss\core\platform/plugins/ecommerce/resources/views//orders/edit.blade.php ENDPATH**/ ?>