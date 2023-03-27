<?php if(count($sliders) > 0): ?>
    <div class="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
        <div class="container">
            <div class="row">
                <div class="<?php if(theme_option('collapsing_product_categories_on_homepage', 'no') == 'no'): ?> col-lg-9 offset-lg-3 <?php else: ?> col-12 <?php endif; ?>">
                    <div id="carouselExampleControls" class="carousel slide light_arrow" data-ride="carousel">
                        <div class="carousel-inner">
                            <?php $__currentLoopData = $sliders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $slider): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <div class="carousel-item <?php if($loop->first): ?> active <?php endif; ?> background_bg" data-img-src="<?php echo e(RvMedia::getImageUrl($slider->image, null, false, RvMedia::getDefaultImage())); ?>">
                                    <div class="banner_slide_content banner_content_inner">
                                        <div class="col-lg-8 col-10">
                                            <div class="banner_content overflow-hidden">
                                                <?php if($slider->description): ?>
                                                    <h5 class="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s"><?php echo e($slider->description); ?></h5>
                                                <?php endif; ?>
                                                <?php if($slider->title): ?>
                                                    <h2 class="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s"><?php echo e($slider->title); ?></h2>
                                                <?php endif; ?>
                                                <?php if($slider->link): ?>
                                                    <?php
                                                        $buttonText = MetaBox::getMetaData($slider, 'button_text', true);
                                                    ?>
                                                    <a class="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="<?php echo e($slider->link); ?>" data-animation="slideInLeft" data-animation-delay="1.5s"><?php echo clean($buttonText ?: __('Shop Now')); ?></a>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>
                        <ol class="carousel-indicators indicators_style1">
                            <?php $__currentLoopData = $sliders; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $slider): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <li data-target="#carouselExampleControls" data-slide-to="<?php echo e($loop->index); ?>" <?php if($loop->first): ?> class="active" <?php endif; ?>></li>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/themes/shopwise/partials/shortcodes/sliders.blade.php ENDPATH**/ ?>