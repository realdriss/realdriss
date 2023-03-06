<?php

namespace Botble\Ecommerce\Supports;

use Botble\Base\Supports\Helper;
use Exception;

class EcommerceHelper
{
    /**
     * @return bool
     */
    public function isCartEnabled(): bool
    {
        return get_ecommerce_setting('shopping_cart_enabled', '1') == '1';
    }

    /**
     * @return bool
     */
    public function isReviewEnabled(): bool
    {
        return get_ecommerce_setting('review_enabled', '1') == '1';
    }

    /**
     * @return bool
     */
    public function isQuickBuyButtonEnabled(): bool
    {
        return get_ecommerce_setting('enable_quick_buy_button', '1') == '1';
    }

    /**
     * @return string
     */
    public function getQuickBuyButtonTarget(): string
    {
        return get_ecommerce_setting('quick_buy_target_page', 'checkout');
    }

    /**
     * @return bool
     */
    public function isZipCodeEnabled(): bool
    {
        return get_ecommerce_setting('zip_code_enabled', '0') == '1';
    }

    /**
     * @return bool
     */
    public function isDisplayProductIncludingTaxes(): bool
    {
        if (!$this->isTaxEnabled()) {
            return false;
        }

        return get_ecommerce_setting('display_product_price_including_taxes', '0') == '1';
    }

    /**
     * @return bool
     */
    public function isTaxEnabled(): bool
    {
        return get_ecommerce_setting('ecommerce_tax_enabled', '1') == '1';
    }

    /**
     * @return array
     */
    public function getAvailableCountries(): array
    {
        try {
            $selectedCountries = json_decode(get_ecommerce_setting('available_countries'), true);
        } catch (Exception $exception) {
            $selectedCountries = [];
        }

        if (empty($selectedCountries)) {
            return Helper::countries();
        }

        $countries = [];

        foreach (Helper::countries() as $key => $item) {
            if (in_array($key, $selectedCountries)) {
                $countries[$key] = $item;
            }
        }

        return $countries;
    }

    /**
     * @return array
     */
    public function getSortParams(): array
    {
        return [
            'default_sorting' => __('Default'),
            'date_asc'        => __('Oldest'),
            'date_desc'       => __('Newest'),
            'price_asc'       => __('Price: low to high'),
            'price_desc'      => __('Price: high to low'),
            'name_asc'        => __('Name: A-Z'),
            'name_desc'       => __('Name : Z-A'),
            'rating_asc'      => __('Rating: low to high'),
            'rating_desc'     => __('Rating: high to low'),
        ];
    }

    /**
     * @return array
     */
    public function getShowParams(): array
    {
        return [
            12    => 12,
            24    => 24,
            36    => 36,
        ];
    }

    /**
     * @return float
     */
    public function getMinimumOrderAmount()
    {
        return get_ecommerce_setting('minimum_order_amount', 0);
    }

    /**
     * @return bool
     */
    public function isEnabledGuestCheckout(): bool
    {
        return get_ecommerce_setting('enable_guest_checkout', '1') == '1';
    }
}
