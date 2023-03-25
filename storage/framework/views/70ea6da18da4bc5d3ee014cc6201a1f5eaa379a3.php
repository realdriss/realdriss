<?php
    Theme::asset()->remove('app-js');
    Theme::set('pageName', $product->name);
?>

<div class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-5 mb-4 mb-md-0">
                <div class="product-image">
                    <div class="product_img_box">
                        <img id="product_img" src="<?php echo e(RvMedia::getImageUrl($product->image, null, false, RvMedia::getDefaultImage())); ?>" data-zoom-enable="true" data-zoom-image="<?php echo e(RvMedia::getImageUrl($product->image, null, false, RvMedia::getDefaultImage())); ?>" alt="<?php echo e($product->name); ?>" />
                        <a href="#" class="product_img_zoom" title="Zoom">
                            <span class="linearicons-zoom-in"></span>
                        </a>
                    </div>
                    <div id="pr_item_gallery" class="product_gallery_item slick_slider" data-slides-to-show="4" data-slides-to-scroll="1" data-infinite="false">
                        <?php $__currentLoopData = $productImages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $img): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="item">
                                <a href="#" class="product_gallery_item <?php if($loop->first): ?> active <?php endif; ?>" data-image="<?php echo e(RvMedia::getImageUrl($img)); ?>" data-zoom-image="<?php echo e(RvMedia::getImageUrl($img)); ?>">
                                    <img src="<?php echo e(RvMedia::getImageUrl($img, 'thumb')); ?>" alt="<?php echo e($product->name); ?>"/>
                                </a>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="pr_detail">
                <div class="product_description">
                    <h4 class="product_title"><a href="<?php echo e($product->url); ?>"><?php echo e($product->name); ?></a></h4>
                    <div class="product_price">
                        <span class="price product-sale-price-text"><?php echo e(format_price($product->front_sale_price_with_taxes)); ?></span>
                        <del class="product-price-text" <?php if($product->front_sale_price == $product->price): ?> style="display: none" <?php endif; ?>><?php echo e(format_price($product->price_with_taxes)); ?></del>
                        <div class="on_sale" <?php if($product->front_sale_price == $product->price): ?> style="display: none" <?php endif; ?>>
                            <span class="on_sale_percentage_text"><?php echo e(get_sale_percentage($product->price, $product->front_sale_price)); ?></span> <span><?php echo e(__('Off')); ?></span>
                        </div>
                    </div>
                    <?php if(EcommerceHelper::isReviewEnabled()): ?>
                        <?php if($product->reviews_count > 0): ?>
                            <div class="rating_wrap">
                                <div class="rating">
                                    <div class="product_rate" style="width: <?php echo e($product->reviews_avg * 20); ?>%"></div>
                                </div>
                                <span class="rating_num">(<?php echo e($product->reviews_count); ?>)</span>
                            </div>
                        <?php endif; ?>
                    <?php endif; ?>
                    <div class="clearfix"></div>
                    <div class="pr_desc">
                        <p><?php echo clean($product->description, 'youtube'); ?></p>
                    </div>
                    <?php if($product->variations()->count() > 0): ?>
                        <div class="pr_switch_wrap">
                            <?php echo render_product_swatches($product, [
                                'selected' => $selectedAttrs,
                                'view'     => Theme::getThemeNamespace() . '::views.ecommerce.attributes.swatches-renderer'
                            ]); ?>

                        </div>
                    <?php endif; ?>

                    <hr />
                    <div class="cart_extra">
                        <form class="add-to-cart-form" method="POST" action="<?php echo e(route('public.cart.add-to-cart')); ?>">
                            <?php echo csrf_field(); ?>
                            <?php echo apply_filters(ECOMMERCE_PRODUCT_DETAIL_EXTRA_HTML, null); ?>

                            <input type="hidden" name="id" id="hidden-product-id" value="<?php echo e(($product->is_variation || !$product->defaultVariation->product_id) ? $product->id : $product->defaultVariation->product_id); ?>"/>
                            <?php if(EcommerceHelper::isCartEnabled()): ?>
                                <div class="cart-product-quantity">
                                    <div class="quantity float-left">
                                        <input type="button" value="-" class="minus">
                                        <input type="text" name="qty" value="1" title="<?php echo e(__('Qty')); ?>" class="qty" size="4">
                                        <input type="button" value="+" class="plus">
                                    </div> &nbsp;
                                    <div class="float-right number-items-available" style="<?php if(!$product->isOutOfStock()): ?> display: none; <?php endif; ?> line-height: 45px;">
                                        <?php if($product->isOutOfStock()): ?>
                                            <span class="text-danger">(<?php echo e(__('Out of stock')); ?>)</span>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <br>
                            <?php endif; ?>
                            <div class="cart_btn">
                                <?php if(EcommerceHelper::isCartEnabled()): ?>
                                    <button class="btn btn-fill-out btn-addtocart <?php if($product->isOutOfStock()): ?> btn-disabled <?php endif; ?>" type="submit" <?php if($product->isOutOfStock()): ?> disabled <?php endif; ?>><i class="icon-basket-loaded"></i> <?php echo e(__('Add to cart')); ?></button>
                                <?php endif; ?>
                                <?php if(EcommerceHelper::isQuickBuyButtonEnabled()): ?>
                                    &nbsp;
                                    <button class="btn btn-dark btn-addtocart <?php if($product->isOutOfStock()): ?> btn-disabled <?php endif; ?>" type="submit" <?php if($product->isOutOfStock()): ?> disabled <?php endif; ?> name="checkout"><?php echo e(__('Quick Buy')); ?></button>
                                <?php endif; ?>
                                <a class="add_compare js-add-to-compare-button" data-url="<?php echo e(route('public.compare.add', $product->id)); ?>" href="#"><i class="icon-shuffle"></i></a>
                                <a class="add_wishlist js-add-to-wishlist-button" href="#" data-url="<?php echo e(route('public.wishlist.add', $product->id)); ?>"><i class="icon-heart"></i></a>
                            </div>
                            <br>
                            <div class="success-message text-success" style="display: none;">
                                <span></span>
                            </div>
                            <div class="error-message text-danger" style="display: none;">
                                <span></span>
                            </div>
                        </form>
                    </div>
                    <hr />
                    <ul class="product-meta">
                        <li><?php echo e(__('SKU')); ?>: <span id="product-sku"><?php echo e($product->sku); ?></span></li>
                        <li><?php echo e(__('Category')); ?>:
                            <?php $__currentLoopData = $product->categories()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <a href="<?php echo e($category->url); ?>"><?php echo e($category->name); ?></a><?php if(!$loop->last): ?>,<?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </li>
                        <?php if(!$product->tags->isEmpty()): ?>
                            <li><?php echo e(__('Tags')); ?>:
                                <?php $__currentLoopData = $product->tags; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <a href="<?php echo e($tag->url); ?>" rel="tag"><?php echo e($tag->name); ?></a><?php if(!$loop->last): ?>,<?php endif; ?>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </li>
                        <?php endif; ?>
                    </ul>

                    <div class="product_share">
                        <span><?php echo e(__('Share')); ?>:</span>
                        <ul class="social_icons">
                            <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo e(urlencode($product->url)); ?>&title=<?php echo e(rawurldecode($product->description)); ?>" target="_blank" title="<?php echo e(__('Share on Facebook')); ?>"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="https://twitter.com/intent/tweet?url=<?php echo e(urlencode($product->url)); ?>&text=<?php echo e(rawurldecode($product->description)); ?>" target="_blank" title="<?php echo e(__('Share on Twitter')); ?>"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo e(urlencode($product->url)); ?>&summary=<?php echo e(rawurldecode($product->description)); ?>&source=Linkedin" title="<?php echo e(__('Share on Linkedin')); ?>" target="_blank"><i class="ion-social-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="large_divider clearfix"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="tab-style3">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true"><?php echo e(__('Description')); ?></a>
                        </li>
                        <?php if(EcommerceHelper::isReviewEnabled()): ?>
                            <li class="nav-item">
                                <a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false"><?php echo e(__('Reviews')); ?> (<?php echo e($product->reviews_count); ?>)</a>
                            </li>
                        <?php endif; ?>
                    </ul>
                    <div class="tab-content shop_info_tab">
                        <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                            <div id="app">
                                <?php echo clean($product->content, 'youtube'); ?>

                            </div>
                            <?php if(theme_option('facebook_comment_enabled_in_product', 'yes') == 'yes'): ?>
                                <br />
                                <?php echo apply_filters(BASE_FILTER_PUBLIC_COMMENT_AREA, Theme::partial('comments')); ?>

                            <?php endif; ?>
                        </div>
                        <?php if(EcommerceHelper::isReviewEnabled()): ?>
                            <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                <div id="list-reviews">
                                    <div class="comments">
                                        <h5 class="product_tab_title"><?php echo e(__(':count Reviews For :product', ['count' => $product->reviews_count, 'product' => $product->name])); ?></h5>
                                        <product-reviews-component url="<?php echo e(route('public.ajax.product-reviews', $product->id)); ?>"></product-reviews-component>
                                    </div>
                                </div>
                                <div class="review_form field_form mt-3">
                                    <h5><?php echo e(__('Add a review')); ?></h5>
                                    <?php if(!auth('customer')->check()): ?>
                                        <p class="text-danger"><?php echo e(__('Please')); ?> <a href="<?php echo e(route('customer.login')); ?>"><?php echo e(__('login')); ?></a> <?php echo e(__('to write review!')); ?></p>
                                    <?php endif; ?>
                                    <?php echo Form::open(['route' => 'public.reviews.create', 'method' => 'post', 'class' => 'row form-review-product']); ?>

                                        <input type="hidden" name="product_id" value="<?php echo e($product->id); ?>">
                                        <input type="hidden" name="star" value="1">
                                        <div class="form-group col-12">
                                            <div class="star_rating">
                                                <span data-value="1"><i class="ion-star"></i></span>
                                                <span data-value="2"><i class="ion-star"></i></span>
                                                <span data-value="3"><i class="ion-star"></i></span>
                                                <span data-value="4"><i class="ion-star"></i></span>
                                                <span data-value="5"><i class="ion-star"></i></span>
                                            </div>
                                        </div>
                                        <div class="form-group col-12">
                                            <textarea class="form-control" name="comment" id="txt-comment" rows="4" placeholder="<?php echo e(__('Write your review')); ?>" <?php if(!auth('customer')->check()): ?> disabled <?php endif; ?>></textarea>
                                        </div>
                                        <div class="form-group col-12">
                                            <button type="submit" class="btn btn-fill-out <?php if(!auth('customer')->check()): ?> btn-disabled <?php endif; ?>" <?php if(!auth('customer')->check()): ?> disabled <?php endif; ?> name="submit" value="Submit">Submit Review</button>
                                        </div>
                                    <?php echo Form::close(); ?>

                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
            $crossSellProducts = get_cross_sale_products($product);
        ?>
        <?php if(count($crossSellProducts) > 0): ?>
            <div class="row">
                <div class="col-12">
                    <div class="small_divider"></div>
                    <div class="divider"></div>
                    <div class="medium_divider"></div>
                </div>
            </div>
            <div class="row shop_container grid">
                <div class="col-12">
                    <div class="heading_s1">
                        <h3><?php echo e(__('Customers who bought this item also bought')); ?></h3>
                    </div>
                    <div class="releted_product_slider carousel_slider owl-carousel owl-theme" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
                        <?php $__currentLoopData = $crossSellProducts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $crossSellProduct): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <?php echo Theme::partial('product-item-grid', ['product' => $crossSellProduct]); ?>

                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>

        <div class="row shop_container grid">
            <div class="col-12">
                <div class="heading_s1">
                    <h3><?php echo e(__('Related Products')); ?></h3>
                </div>
                <div class="releted_product_slider carousel_slider owl-carousel owl-theme" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
                    <?php
                        $relatedProducts = get_related_products($product);
                    ?>
                    <?php if(!empty($relatedProducts)): ?>
                        <?php $__currentLoopData = $relatedProducts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $related): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <?php echo Theme::partial('product-item-grid', ['product' => $related]); ?>

                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/ecommerce/product.blade.php ENDPATH**/ ?>