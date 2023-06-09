<?php

namespace RealDriss\Shortcode\Http\Controllers;

use RealDriss\Base\Http\Controllers\BaseController;
use RealDriss\Base\Http\Responses\BaseHttpResponse;
use Closure;
use Illuminate\Support\Arr;

class ShortcodeController extends BaseController
{
    /**
     * @param string $key
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function ajaxGetAdminConfig($key, BaseHttpResponse $response)
    {
        $registered = shortcode()->getAll();

        $data = Arr::get($registered, $key . '.admin_config');
        if ($data instanceof Closure) {
            $data = call_user_func($data);
        }
        $data = apply_filters(SHORTCODE_REGISTER_CONTENT_IN_ADMIN, $data, $key);

        return $response->setData($data);
    }
}
