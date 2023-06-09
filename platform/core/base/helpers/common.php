<?php

use RealDriss\Base\Facades\DashboardMenuFacade;
use RealDriss\Base\Facades\PageTitleFacade;
use RealDriss\Base\Supports\Editor;
use RealDriss\Base\Supports\PageTitle;

if (!function_exists('anchor_link')) {
    /**
     * @param string $link
     * @param string $name
     * @param array $options
     * @return string
     * @throws Throwable
     * @deprecated
     */
    function anchor_link(?string $link, ?string $name, array $options = []): string
    {
        return Html::link($link, $name, $options);
    }
}

if (!function_exists('language_flag')) {
    /**
     * @param string $flag
     * @param string $name
     * @return string
     */
    function language_flag(string $flag, ?string $name = null): string
    {
        return Html::image(asset(BASE_LANGUAGE_FLAG_PATH . $flag . '.svg'), $name, ['title' => $name, 'width' => 16]);
    }
}

if (!function_exists('render_editor')) {
    /**
     * @param string $name
     * @param string|null $value
     * @param bool $withShortCode
     * @param array $attributes
     * @return string
     * @throws Throwable
     */
    function render_editor(string $name, ?string $value = null, $withShortCode = false, array $attributes = []): string
    {
        return (new Editor)->render($name, $value, $withShortCode, $attributes);
    }
}

if (!function_exists('is_in_admin')) {
    /**
     * @param bool $force
     * @return bool
     */
    function is_in_admin($force = false): bool
    {
        $prefix = BaseHelper::getAdminPrefix();

        $segments = array_slice(request()->segments(), 0, count(explode('/', $prefix)));

        $isInAdmin = implode('/', $segments) === $prefix;

        return $force ? $isInAdmin : apply_filters(IS_IN_ADMIN_FILTER, $isInAdmin);
    }
}

if (!function_exists('page_title')) {
    /**
     * @return PageTitle
     */
    function page_title()
    {
        return PageTitleFacade::getFacadeRoot();
    }
}

if (!function_exists('dashboard_menu')) {
    /**
     * @return \RealDriss\Base\Supports\DashboardMenu
     */
    function dashboard_menu()
    {
        return DashboardMenuFacade::getFacadeRoot();
    }
}

if (!function_exists('get_cms_version')) {
    /**
     * @return string //version of our app
     */
    function get_cms_version(): string
    {
        try {
            return trim(get_file_data(core_path('VERSION'), false));
        } catch (Exception $exception) {
            return 'v1.0.0';
        }
    }
}

if (!function_exists('platform_path')) {
    /**
     * @param string|null $path
     * @return string  //platform root path
     */
    function platform_path($path = null): string
    {
        return base_path('platform/' . $path);
    }
}

if (!function_exists('core_path')) {
    /**
     * @param string|null $path
     * @return string //core root path
     */
    function core_path($path = null): string
    {
        return platform_path('core/' . $path);
    }
}

if (!function_exists('package_path')) {
    /**
     * @param string|null $path
     * @return string //packages root path
     */
    function package_path($path = null): string
    {
        return platform_path('packages/' . $path);
    }
}
