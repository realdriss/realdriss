<?php

use Botble\Base\Http\Controllers\SystemController;


Route::group(['namespace' => 'Botble\Base\Http\Controllers', 'middleware' => ['web', 'core']], function () {
    //a.prefixed e.g --admin/**/
    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {
        //i.prefixed --admin/system/info/**/
        Route::group(['prefix' => 'system/info'], function () {
            //--admin/system/info
            Route::match(['GET', 'POST'], '', [
                'as'         => 'system.info',
                'uses'       => 'SystemController@getInfo',
                'permission' => ACL_ROLE_SUPER_USER,
            ]);
        });
        //ii.prefixed --admin/system/cache/**/
        Route::group(['prefix' => 'system/cache'], function () {
            //--admin/system/cache
            Route::get('', [
                'as'         => 'system.cache',
                'uses'       => 'SystemController@getCacheManagement',
                'permission' => ACL_ROLE_SUPER_USER,
            ]);

            //--admin/system/cache/clear
            Route::post('clear', [
                'as'         => 'system.cache.clear',
                'uses'       => 'SystemController@postClearCache',
                'permission' => ACL_ROLE_SUPER_USER,
                'middleware' => 'preventDemo',
            ]);
        });

        //iii.prefixed --admin/membership/authorize
        Route::post('membership/authorize', [
            'as'         => 'membership.authorize',
            'uses'       => 'SystemController@authorize',
            'permission' => false,
        ]);
    });

     //b. --settings-language/{alias}
    Route::get('settings-language/{alias}', [SystemController::class, 'getLanguage'])->name('settings.language');
});
