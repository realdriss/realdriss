<?php

use Botble\Ecommerce\Notifications\ConfirmEmailNotification;

return [
    'prefix'                               => 'ecommerce_',
    'display_big_money_in_million_billion' => env('DISPLAY_BIG_MONEY_IN_MILLION_BILLION', false),

    'customer' => [
        /*
    |--------------------------------------------------------------------------
    | Notification
    |--------------------------------------------------------------------------
    |
    | This is the notification class that will be sent to users when they receive
    | a confirmation code.
    |
    */
        'notification' => ConfirmEmailNotification::class,
    ],
];
