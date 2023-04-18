<?php

namespace RealDriss\Ecommerce\Providers;

use RealDriss\Base\Supports\Helper;
use RealDriss\Base\Traits\LoadAndPublishDataTrait;
use RealDriss\Ecommerce\Facades\CartFacade;
use RealDriss\Ecommerce\Facades\EcommerceHelperFacade;
use RealDriss\Ecommerce\Facades\OrderHelperFacade;
use RealDriss\Ecommerce\Http\Middleware\RedirectIfCustomer;
use RealDriss\Ecommerce\Http\Middleware\RedirectIfNotCustomer;
use RealDriss\Ecommerce\Models\Address;
use RealDriss\Ecommerce\Models\Brand;
use RealDriss\Ecommerce\Models\Currency;
use RealDriss\Ecommerce\Models\Customer;
use RealDriss\Ecommerce\Models\Discount;
use RealDriss\Ecommerce\Models\FlashSale;
use RealDriss\Ecommerce\Models\GroupedProduct;
use RealDriss\Ecommerce\Models\Order;
use RealDriss\Ecommerce\Models\OrderAddress;
use RealDriss\Ecommerce\Models\OrderHistory;
use RealDriss\Ecommerce\Models\OrderProduct;
use RealDriss\Ecommerce\Models\Product;
use RealDriss\Ecommerce\Models\ProductAttribute;
use RealDriss\Ecommerce\Models\ProductAttributeSet;
use RealDriss\Ecommerce\Models\ProductCategory;
use RealDriss\Ecommerce\Models\ProductCollection;
use RealDriss\Ecommerce\Models\ProductLabel;
use RealDriss\Ecommerce\Models\ProductTag;
use RealDriss\Ecommerce\Models\ProductVariation;
use RealDriss\Ecommerce\Models\ProductVariationItem;
use RealDriss\Ecommerce\Models\Review;
use RealDriss\Ecommerce\Models\Shipment;
use RealDriss\Ecommerce\Models\ShipmentHistory;
use RealDriss\Ecommerce\Models\Shipping;
use RealDriss\Ecommerce\Models\ShippingRule;
use RealDriss\Ecommerce\Models\ShippingRuleItem;
use RealDriss\Ecommerce\Models\StoreLocator;
use RealDriss\Ecommerce\Models\Tax;
use RealDriss\Ecommerce\Models\Wishlist;
use RealDriss\Ecommerce\Repositories\Caches\AddressCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\BrandCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\CurrencyCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\CustomerCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\DiscountCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\FlashSaleCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\GroupedProductCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\OrderAddressCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\OrderCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\OrderHistoryCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\OrderProductCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductAttributeCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductAttributeSetCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductCategoryCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductCollectionCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductLabelCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductTagCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductVariationCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ProductVariationItemCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ReviewCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ShipmentCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ShipmentHistoryCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ShippingCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ShippingRuleCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\ShippingRuleItemCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\StoreLocatorCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\TaxCacheDecorator;
use RealDriss\Ecommerce\Repositories\Caches\WishlistCacheDecorator;
use RealDriss\Ecommerce\Repositories\Eloquent\AddressRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\BrandRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\CurrencyRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\CustomerRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\DiscountRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\FlashSaleRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\GroupedProductRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\OrderAddressRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\OrderHistoryRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\OrderProductRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\OrderRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductAttributeRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductAttributeSetRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductCategoryRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductCollectionRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductLabelRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductTagRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductVariationItemRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ProductVariationRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ReviewRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ShipmentHistoryRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ShipmentRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ShippingRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ShippingRuleItemRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\ShippingRuleRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\StoreLocatorRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\TaxRepository;
use RealDriss\Ecommerce\Repositories\Eloquent\WishlistRepository;
use RealDriss\Ecommerce\Repositories\Interfaces\AddressInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\BrandInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\CurrencyInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\CustomerInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\DiscountInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\FlashSaleInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\GroupedProductInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\OrderAddressInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\OrderHistoryInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\OrderInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\OrderProductInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductAttributeInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductAttributeSetInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductCategoryInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductCollectionInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductLabelInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductTagInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductVariationInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ProductVariationItemInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ReviewInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ShipmentHistoryInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ShipmentInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ShippingInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ShippingRuleInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\ShippingRuleItemInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\StoreLocatorInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\TaxInterface;
use RealDriss\Ecommerce\Repositories\Interfaces\WishlistInterface;
use RealDriss\Ecommerce\Services\HandleApplyCouponService;
use RealDriss\Ecommerce\Services\HandleRemoveCouponService;
use RealDriss\LanguageAdvanced\Supports\LanguageAdvancedManager;
use Cart;
use EcommerceHelper;
use EmailHandler;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use SeoHelper;
use SlugHelper;

class EcommerceServiceProvider extends ServiceProvider
{

    use LoadAndPublishDataTrait;

    public function register()
    {
        config([
            'auth.guards.customer'     => [
                'driver'   => 'session',
                'provider' => 'customers',
            ],
            'auth.providers.customers' => [
                'driver' => 'eloquent',
                'model'  => Customer::class,
            ],
            'auth.passwords.customers' => [
                'provider' => 'customers',
                'table'    => 'ec_customer_password_resets',
                'expire'   => 60,
            ],
        ]);

        /**
         * @var Router $router
         */
        $router = $this->app['router'];

        $router->aliasMiddleware('customer', RedirectIfNotCustomer::class);
        $router->aliasMiddleware('customer.guest', RedirectIfCustomer::class);

        $this->app->bind(ProductInterface::class, function () {
            return new ProductCacheDecorator(
                new ProductRepository(new Product)
            );
        });

        $this->app->bind(ProductCategoryInterface::class, function () {
            return new ProductCategoryCacheDecorator(
                new ProductCategoryRepository(new ProductCategory)
            );
        });

        $this->app->bind(ProductTagInterface::class, function () {
            return new ProductTagCacheDecorator(
                new ProductTagRepository(new ProductTag)
            );
        });


        $this->app->bind(BrandInterface::class, function () {
            return new BrandCacheDecorator(
                new BrandRepository(new Brand)
            );
        });

        $this->app->bind(ProductCollectionInterface::class, function () {
            return new ProductCollectionCacheDecorator(
                new ProductCollectionRepository(new ProductCollection)
            );
        });

        $this->app->bind(CurrencyInterface::class, function () {
            return new CurrencyCacheDecorator(
                new CurrencyRepository(new Currency)
            );
        });

        $this->app->bind(ProductAttributeSetInterface::class, function () {
            return new ProductAttributeSetCacheDecorator(
                new ProductAttributeSetRepository(new ProductAttributeSet),
                ECOMMERCE_GROUP_CACHE_KEY
            );
        });

        $this->app->bind(ProductAttributeInterface::class, function () {
            return new ProductAttributeCacheDecorator(
                new ProductAttributeRepository(new ProductAttribute),
                ECOMMERCE_GROUP_CACHE_KEY
            );
        });

        $this->app->bind(ProductVariationInterface::class, function () {
            return new ProductVariationCacheDecorator(
                new ProductVariationRepository(new ProductVariation),
                ECOMMERCE_GROUP_CACHE_KEY
            );
        });

        $this->app->bind(ProductVariationItemInterface::class, function () {
            return new ProductVariationItemCacheDecorator(
                new ProductVariationItemRepository(new ProductVariationItem),
                ECOMMERCE_GROUP_CACHE_KEY
            );
        });

        $this->app->bind(TaxInterface::class, function () {
            return new TaxCacheDecorator(
                new TaxRepository(new Tax)
            );
        });

        $this->app->bind(ReviewInterface::class, function () {
            return new ReviewCacheDecorator(
                new ReviewRepository(new Review)
            );
        });

        $this->app->bind(ShippingInterface::class, function () {
            return new ShippingCacheDecorator(
                new ShippingRepository(new Shipping)
            );
        });

        $this->app->bind(ShippingRuleInterface::class, function () {
            return new ShippingRuleCacheDecorator(
                new ShippingRuleRepository(new ShippingRule)
            );
        });

        $this->app->bind(ShippingRuleItemInterface::class, function () {
            return new ShippingRuleItemCacheDecorator(
                new ShippingRuleItemRepository(new ShippingRuleItem)
            );
        });

        $this->app->bind(ShipmentInterface::class, function () {
            return new ShipmentCacheDecorator(
                new ShipmentRepository(new Shipment)
            );
        });

        $this->app->bind(ShipmentHistoryInterface::class, function () {
            return new ShipmentHistoryCacheDecorator(
                new ShipmentHistoryRepository(new ShipmentHistory)
            );
        });

        $this->app->bind(OrderInterface::class, function () {
            return new OrderCacheDecorator(
                new OrderRepository(new Order)
            );
        });

        $this->app->bind(OrderHistoryInterface::class, function () {
            return new OrderHistoryCacheDecorator(
                new OrderHistoryRepository(new OrderHistory)
            );
        });

        $this->app->bind(OrderProductInterface::class, function () {
            return new OrderProductCacheDecorator(
                new OrderProductRepository(new OrderProduct)
            );
        });

        $this->app->bind(OrderAddressInterface::class, function () {
            return new OrderAddressCacheDecorator(
                new OrderAddressRepository(new OrderAddress)
            );
        });

        $this->app->bind(DiscountInterface::class, function () {
            return new DiscountCacheDecorator(
                new DiscountRepository(new Discount)
            );
        });

        $this->app->bind(WishlistInterface::class, function () {
            return new WishlistCacheDecorator(
                new WishlistRepository(new Wishlist)
            );
        });

        $this->app->bind(AddressInterface::class, function () {
            return new AddressCacheDecorator(
                new AddressRepository(new Address)
            );
        });
        $this->app->bind(CustomerInterface::class, function () {
            return new CustomerCacheDecorator(
                new CustomerRepository(new Customer)
            );
        });

        $this->app->bind(GroupedProductInterface::class, function () {
            return new GroupedProductCacheDecorator(
                new GroupedProductRepository(new GroupedProduct)
            );
        });

        $this->app->bind(StoreLocatorInterface::class, function () {
            return new StoreLocatorCacheDecorator(
                new StoreLocatorRepository(new StoreLocator)
            );
        });

        $this->app->bind(FlashSaleInterface::class, function () {
            return new FlashSaleCacheDecorator(
                new FlashSaleRepository(new FlashSale)
            );
        });

        $this->app->bind(ProductLabelInterface::class, function () {
            return new ProductLabelCacheDecorator(
                new ProductLabelRepository(new ProductLabel)
            );
        });

        Helper::autoload(__DIR__ . '/../../helpers');

        $loader = AliasLoader::getInstance();
        $loader->alias('Cart', CartFacade::class);
        $loader->alias('OrderHelper', OrderHelperFacade::class);
        $loader->alias('EcommerceHelper', EcommerceHelperFacade::class);
    }

    public function boot()
    {
        SlugHelper::registerModule(Product::class, 'Products');
        SlugHelper::registerModule(Brand::class, 'Brands');
        SlugHelper::registerModule(ProductCategory::class, 'Product Categories');
        SlugHelper::registerModule(ProductTag::class, 'Product Tags');
        SlugHelper::setPrefix(Product::class, 'products');
        SlugHelper::setPrefix(Brand::class, 'brands');
        SlugHelper::setPrefix(ProductTag::class, 'product-tags');
        SlugHelper::setPrefix(ProductCategory::class, 'product-categories');

        $this->setNamespace('plugins/ecommerce')
            ->loadAndPublishConfigurations(['permissions'])
            ->loadAndPublishTranslations()
            ->loadRoutes([
                'base',
                'product',
                'tax',
                'review',
                'shipping',
                'order',
                'discount',
                'customer',
                'payment',
                'cart',
                'shipment',
                'wishlist',
                'compare',
            ])
            ->loadAndPublishConfigurations([
                'general',
                'shipping',
                'order',
                'cart',
                'email',
            ])
            ->loadAndPublishViews()
            ->loadMigrations()
            ->publishAssets();

        if (defined('LANGUAGE_MODULE_SCREEN_NAME') && defined('LANGUAGE_ADVANCED_MODULE_SCREEN_NAME')) {
            LanguageAdvancedManager::registerModule(Product::class, [
                'name',
                'description',
                'content',
            ]);

            LanguageAdvancedManager::registerModule(ProductCategory::class, [
                'name',
                'description',
            ]);

            LanguageAdvancedManager::registerModule(ProductAttribute::class, [
                'name',
                'description',
            ]);

            LanguageAdvancedManager::registerModule(ProductAttributeSet::class, [
                'name',
                'description',
            ]);

            LanguageAdvancedManager::registerModule(Brand::class, [
                'name',
                'description',
            ]);

            LanguageAdvancedManager::registerModule(ProductCollection::class, [
                'name',
                'description',
            ]);

            LanguageAdvancedManager::registerModule(ProductLabel::class, [
                'name',
                'description',
            ]);

            LanguageAdvancedManager::registerModule(FlashSale::class, [
                'name',
                'description',
            ]);

            add_action(LANGUAGE_ADVANCED_ACTION_SAVED, function ($data, $request) {
                if ($data->getModel() == Product::class) {
                    $variations = $data->variations()->get();

                    foreach ($variations as $variation) {
                        if (!$variation->product->id) {
                            continue;
                        }

                        LanguageAdvancedManager::save($variation->product, $request);
                    }
                }
            }, 1234, 2);
        }

        $this->app->register(HookServiceProvider::class);

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce',
                    'priority'    => 8,
                    'parent_id'   => null,
                    'name'        => 'plugins/ecommerce::ecommerce.name',
                    'icon'        => 'fa fa-shopping-cart',
                    'url'         => route('products.index'),
                    'permissions' => ['plugins.ecommerce'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce-report',
                    'priority'    => 0,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::reports.name',
                    'icon'        => 'far fa-chart-bar',
                    'url'         => route('ecommerce.report.index'),
                    'permissions' => ['ecommerce.report.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-flash-sale',
                    'priority'    => 0,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::flash-sale.name',
                    'icon'        => 'fa fa-bolt',
                    'url'         => route('flash-sale.index'),
                    'permissions' => ['flash-sale.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce-order',
                    'priority'    => 1,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::order.name',
                    'icon'        => 'fa fa-shopping-bag',
                    'url'         => route('orders.index'),
                    'permissions' => ['orders.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce-incomplete-order',
                    'priority'    => 2,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::order.incomplete_order',
                    'icon'        => 'fas fa-shopping-basket',
                    'url'         => route('orders.incomplete-list'),
                    'permissions' => ['orders.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce.product',
                    'priority'    => 3,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::products.name',
                    'icon'        => 'fa fa-camera',
                    'url'         => route('products.index'),
                    'permissions' => ['products.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-product-categories',
                    'priority'    => 4,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::product-categories.name',
                    'icon'        => 'fa fa-archive',
                    'url'         => route('product-categories.index'),
                    'permissions' => ['product-categories.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-product-tag',
                    'priority'    => 4,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::product-tag.name',
                    'icon'        => 'fa fa-tag',
                    'url'         => route('product-tag.index'),
                    'permissions' => ['product-tag.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-product-attribute',
                    'priority'    => 5,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::product-attributes.name',
                    'icon'        => 'fas fa-glass-martini',
                    'url'         => route('product-attribute-sets.index'),
                    'permissions' => ['product-attribute-sets.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-brands',
                    'priority'    => 6,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::brands.name',
                    'icon'        => 'fa fa-registered',
                    'url'         => route('brands.index'),
                    'permissions' => ['brands.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-product-collections',
                    'priority'    => 7,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::product-collections.name',
                    'icon'        => 'fa fa-file-excel',
                    'url'         => route('product-collections.index'),
                    'permissions' => ['product-collections.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-product-label',
                    'priority'    => 8,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::product-label.name',
                    'icon'        => 'fas fa-tags',
                    'url'         => route('product-label.index'),
                    'permissions' => ['product-label.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-ecommerce-review',
                    'priority'    => 9,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::review.name',
                    'icon'        => 'fa fa-comments',
                    'url'         => route('reviews.index'),
                    'permissions' => ['reviews.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce-shipping-provider',
                    'priority'    => 10,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::shipping.shipping',
                    'icon'        => 'fas fa-shipping-fast',
                    'url'         => route('shipping_methods.index'),
                    'permissions' => ['shipping_methods.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce-discount',
                    'priority'    => 11,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::discount.name',
                    'icon'        => 'fa fa-gift',
                    'url'         => route('discounts.index'),
                    'permissions' => ['discounts.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce-customer',
                    'priority'    => 13,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::customer.name',
                    'icon'        => 'fa fa-users',
                    'url'         => route('customer.index'),
                    'permissions' => ['customer.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-plugins-ecommerce.settings',
                    'priority'    => 999,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::ecommerce.settings',
                    'icon'        => 'fas fa-cogs',
                    'url'         => route('ecommerce.settings'),
                    'permissions' => ['ecommerce.settings'],
                ]);

            if (EcommerceHelper::isTaxEnabled()) {
                dashboard_menu()->registerItem([
                    'id'          => 'cms-plugins-ecommerce-tax',
                    'priority'    => 14,
                    'parent_id'   => 'cms-plugins-ecommerce',
                    'name'        => 'plugins/ecommerce::tax.name',
                    'icon'        => 'fas fa-money-check-alt',
                    'url'         => route('tax.index'),
                    'permissions' => ['tax.index'],
                ]);
            }

            EmailHandler::addTemplateSettings(ECOMMERCE_MODULE_SCREEN_NAME, config('plugins.ecommerce.email'));
        });

        $this->app->booted(function () {
            SeoHelper::registerModule([
                Product::class,
                Brand::class,
                ProductCategory::class,
                ProductTag::class,
            ]);
        });

        $this->app->register(EventServiceProvider::class);

        Event::listen(['cart.removed', 'cart.stored', 'cart.restored', 'cart.updated'], function ($cart) {
            $coupon = session('applied_coupon_code');
            if ($coupon) {
                $this->app->make(HandleRemoveCouponService::class)->execute();
                if (Cart::count() || ($cart instanceof \RealDriss\Ecommerce\Cart\Cart && $cart->count())) {
                    $this->app->make(HandleApplyCouponService::class)->execute($coupon);
                }
            }
        });
    }
}
