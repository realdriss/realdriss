<?php

namespace Botble\Ecommerce\Providers;

use Assets;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\Dashboard\Supports\DashboardWidgetInstance;
use Botble\Ecommerce\Models\Brand;
use Botble\Ecommerce\Models\Customer;
use Botble\Ecommerce\Models\ProductCategory;
use Botble\Ecommerce\Repositories\Interfaces\CustomerInterface;
use Botble\Ecommerce\Repositories\Interfaces\OrderInterface;
use Botble\Ecommerce\Repositories\Interfaces\ProductInterface;
use Botble\Ecommerce\Repositories\Interfaces\ReviewInterface;
use Botble\Payment\Supports\PaymentHelper;
use Form;
use Html;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Menu;
use OrderHelper;
use Throwable;

class HookServiceProvider extends ServiceProvider
{

    /**
     * @var Collection
     */
    protected $pendingOrders = [];

    public function boot()
    {
        if (defined('MENU_ACTION_SIDEBAR_OPTIONS')) {
            Menu::addMenuOptionModel(Brand::class);
            Menu::addMenuOptionModel(ProductCategory::class);
            add_action(MENU_ACTION_SIDEBAR_OPTIONS, [$this, 'registerMenuOptions'], 12);
        }

        add_filter(DASHBOARD_FILTER_ADMIN_LIST, [$this, 'registerDashboardWidgets'], 208, 2);

        if (function_exists('theme_option')) {
            add_action(RENDERING_THEME_OPTIONS_PAGE, [$this, 'addThemeOptions'], 35);
        }

        add_filter(BASE_FILTER_TOP_HEADER_LAYOUT, [$this, 'registerTopHeaderNotification'], 121);
        add_filter(BASE_FILTER_APPEND_MENU_NAME, [$this, 'getPendingOrders'], 130, 2);

        add_filter(RENDER_PRODUCTS_IN_CHECKOUT_PAGE, [$this, 'renderProductsInCheckoutPage'], 1000, 1);

        $this->app->booted(function () {
            add_filter(DASHBOARD_FILTER_ADMIN_LIST, function ($widgets) {
                foreach ($widgets as $key => $widget) {
                    if (in_array($key, [
                            'widget_total_themes',
                            'widget_total_users',
                            'widget_total_plugins',
                            'widget_total_pages',
                        ]) && $widget['type'] == 'stats') {
                        Arr::forget($widgets, $key);
                    }
                }

                return $widgets;
            }, 150);

            add_filter(DASHBOARD_FILTER_ADMIN_LIST, function ($widgets, $widgetSettings) {
                $items = app(OrderInterface::class)->count(['is_finished' => 1]);
                return (new DashboardWidgetInstance)
                    ->setType('stats')
                    ->setPermission('orders.index')
                    ->setTitle(trans('plugins/ecommerce::order.name'))
                    ->setKey('widget_total_1')
                    ->setIcon('fas fa-users')
                    ->setColor('#32c5d2')
                    ->setStatsTotal($items)
                    ->setRoute(route('orders.index'))
                    ->init($widgets, $widgetSettings);
            }, 2, 2);

            add_filter(DASHBOARD_FILTER_ADMIN_LIST, function ($widgets, $widgetSettings) {
                $items = app(ProductInterface::class)->count([
                    'status'       => BaseStatusEnum::PUBLISHED,
                    'is_variation' => 0,
                ]);

                return (new DashboardWidgetInstance)
                    ->setType('stats')
                    ->setPermission('products.index')
                    ->setTitle(trans('plugins/ecommerce::products.name'))
                    ->setKey('widget_total_2')
                    ->setIcon('far fa-file-alt')
                    ->setColor('#1280f5')
                    ->setStatsTotal($items)
                    ->setRoute(route('products.index'))
                    ->init($widgets, $widgetSettings);
            }, 3, 2);

            add_filter(DASHBOARD_FILTER_ADMIN_LIST, function ($widgets, $widgetSettings) {
                $items = app(CustomerInterface::class)->count();
                return (new DashboardWidgetInstance)
                    ->setType('stats')
                    ->setPermission('customer.index')
                    ->setTitle(trans('plugins/ecommerce::customer.name'))
                    ->setKey('widget_total_3')
                    ->setIcon('fas fa-users')
                    ->setColor('#75b6f9')
                    ->setStatsTotal($items)
                    ->setRoute(route('customer.index'))
                    ->init($widgets, $widgetSettings);
            }, 4, 2);

            add_filter(DASHBOARD_FILTER_ADMIN_LIST, function ($widgets, $widgetSettings) {
                $items = app(ReviewInterface::class)->count(['status' => BaseStatusEnum::PUBLISHED]);
                return (new DashboardWidgetInstance)
                    ->setType('stats')
                    ->setPermission('reviews.index')
                    ->setTitle(trans('plugins/ecommerce::review.name'))
                    ->setKey('widget_total_4')
                    ->setIcon('far fa-file-alt')
                    ->setColor('#074f9d')
                    ->setStatsTotal($items)
                    ->setRoute(route('reviews.index'))
                    ->init($widgets, $widgetSettings);
            }, 5, 2);

            if (defined('PAYMENT_FILTER_PAYMENT_PARAMETERS')) {
                add_filter(PAYMENT_FILTER_PAYMENT_PARAMETERS, function ($html) {
                    if (!auth('customer')->check()) {
                        return $html;
                    }

                    return $html . Form::hidden('customer_id', auth('customer')->id())
                            ->toHtml() . Form::hidden('customer_type', Customer::class)->toHtml();
                }, 123);
            }

            if (defined('PAYMENT_FILTER_REDIRECT_URL')) {
                add_filter(PAYMENT_FILTER_REDIRECT_URL, function ($checkoutToken) {
                    return route('public.checkout.success', $checkoutToken ?: OrderHelper::getOrderSessionToken());
                }, 123);
            }

            if (defined('PAYMENT_FILTER_CANCEL_URL')) {
                add_filter(PAYMENT_FILTER_CANCEL_URL, function ($checkoutToken) {
                    return route('public.checkout.information', $checkoutToken ?: OrderHelper::getOrderSessionToken());
                }, 123);
            }

            if (defined('PAYMENT_ACTION_PAYMENT_PROCESSED')) {
                add_action(PAYMENT_ACTION_PAYMENT_PROCESSED, function ($data) {

                    $orderIds = (array)$data['order_id'];

                    if ($orderIds) {
                        $orders = $this->app->make(OrderInterface::class)->allBy([['id', 'IN', $orderIds]]);
                        foreach ($orders as $order) {
                            $data['amount'] = $order->amount;
                            $data['order_id'] = $order->id;
                            $data['currency'] = strtoupper(cms_currency()->getDefaultCurrency()->title);

                            PaymentHelper::storeLocalPayment($data);
                        }
                    }

                    return OrderHelper::processOrder($orderIds, $data['charge_id']);
                }, 123);
            }
        });
    }

    public function addThemeOptions()
    {
        theme_option()
            ->setSection([
                'title'      => trans('plugins/ecommerce::ecommerce.theme_options.name'),
                'desc'       => trans('plugins/ecommerce::ecommerce.theme_options.description'),
                'id'         => 'opt-text-subsection-ecommerce',
                'subsection' => true,
                'icon'       => 'fa fa-shopping-cart',
                'fields'     => [
                    [
                        'id'         => 'number_of_products_per_page',
                        'type'       => 'number',
                        'label'      => trans('plugins/ecommerce::ecommerce.theme_options.number_products_per_page'),
                        'attributes' => [
                            'name'    => 'number_of_products_per_page',
                            'value'   => 12,
                            'options' => [
                                'class' => 'form-control',
                            ],
                        ],
                    ],
                    [
                        'id'         => 'number_of_cross_sale_product',
                        'type'       => 'number',
                        'label'      => trans('plugins/ecommerce::ecommerce.theme_options.number_of_cross_sale_product'),
                        'attributes' => [
                            'name'    => 'number_of_cross_sale_product',
                            'value'   => 4,
                            'options' => [
                                'class' => 'form-control',
                            ],
                        ],
                    ],
                    [
                        'id'         => 'max_filter_price',
                        'type'       => 'number',
                        'label'      => trans('plugins/ecommerce::ecommerce.theme_options.max_price_filter'),
                        'attributes' => [
                            'name'    => 'max_filter_price',
                            'value'   => 100000,
                            'options' => [
                                'class' => 'form-control',
                            ],
                        ],
                    ],
                    [
                        'id'         => 'logo_in_the_checkout_page',
                        'type'       => 'mediaImage',
                        'label'      => trans('plugins/ecommerce::ecommerce.theme_options.logo_in_the_checkout_page'),
                        'attributes' => [
                            'name'  => 'logo_in_the_checkout_page',
                            'value' => null,
                        ],
                    ],
                    [
                        'id'         => 'logo_in_invoices',
                        'type'       => 'mediaImage',
                        'label'      => trans('plugins/ecommerce::ecommerce.theme_options.logo_in_invoices'),
                        'attributes' => [
                            'name'  => 'logo_in_invoices',
                            'value' => null,
                        ],
                    ],
                ],
            ]);
    }

    /**
     * Register sidebar options in menu
     *
     * @throws Throwable
     */
    public function registerMenuOptions()
    {
        if (Auth::user()->hasPermission('brands.index')) {
            Menu::registerMenuOptions(Brand::class, trans('plugins/ecommerce::brands.menu'));
        }

        if (Auth::user()->hasPermission('product-categories.index')) {
            Menu::registerMenuOptions(ProductCategory::class, trans('plugins/ecommerce::product-categories.menu'));
        }

        return true;
    }

    /**
     * @param array $widgets
     * @param Collection $widgetSettings
     * @return array
     * @throws Throwable
     */
    public function registerDashboardWidgets($widgets, $widgetSettings)
    {
        if (!Auth::user()->hasPermission('ecommerce.report.index')) {
            return $widgets;
        }

        Assets::addScriptsDirectly(['vendor/core/plugins/ecommerce/js/report.js']);

        return (new DashboardWidgetInstance)
            ->setPermission('ecommerce.report.index')
            ->setKey('widget_ecommerce_report_general')
            ->setTitle(trans('plugins/ecommerce::ecommerce.name'))
            ->setIcon('fas fa-shopping-basket')
            ->setColor('#7ad03a')
            ->setRoute(route('ecommerce.report.dashboard-widget.general'))
            ->setBodyClass('scroll-table')
            ->setColumn('col-md-6 col-sm-6')
            ->init($widgets, $widgetSettings);
    }

    /**
     * @param string $options
     * @return string
     *
     * @throws Throwable
     */
    public function registerTopHeaderNotification($options)
    {
        if (Auth::user()->hasPermission('orders.edit')) {
            $orders = $this->setPendingOrders();

            if ($orders->count() == 0) {
                return $options;
            }

            return $options . view('plugins/ecommerce::orders.notification', compact('orders'))->render();
        }

        return $options;
    }

    /**
     * @param int $number
     * @param string $menuId
     * @return string
     * @throws BindingResolutionException
     */
    public function getPendingOrders($number, $menuId)
    {
        if (Auth::user()->hasPermission('orders.index')) {
            if (in_array($menuId, ['cms-plugins-ecommerce', 'cms-plugins-ecommerce-order'])) {

                $this->setPendingOrders();
                if (count($this->pendingOrders) > 0) {
                    return Html::tag('span', (string)count($this->pendingOrders), ['class' => 'badge badge-success'])
                        ->toHtml();
                }
            }
        }

        return $number;
    }

    /**
     * @return Collection
     * @throws BindingResolutionException
     */
    protected function setPendingOrders(): Collection
    {
        if (!$this->pendingOrders) {
            $this->pendingOrders = $this->app->make(OrderInterface::class)->allBy([
                'status'      => BaseStatusEnum::PENDING,
                'is_finished' => 1,
            ], ['address']);
        }

        return $this->pendingOrders;
    }

    /**
     * @param Collection|string $products
     * @return string
     */
    public function renderProductsInCheckoutPage($products)
    {
        if ($products instanceof Collection) {
            return view('plugins/ecommerce::orders.checkout.products', compact('products'))->render();
        }

        return $products;
    }
}
