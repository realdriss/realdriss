<?php

return [
    '401_title' => 'Permission Denied',
    '401_msg' => '<li>You have not been granted access to the section by the administrator.</li>'."\r\n"
        .'	                <li>You may have the wrong account type.</li>'."\r\n"
        .'	                <li>You are not authorized to view the requested resource.</li>'."\r\n"
        .'	                <li>Your subscription may have expired.</li>',
    '404_title' => 'Page could not be found',
    '404_msg' => '<li>The page you requested does not exist.</li>',
    '500_title' => 'Page could not be loaded',
    '500_msg' => '<li>The page you requested does not exist.</li>'."\r\n"
        .'	                <li>The link you clicked is no longer.</li>'."\r\n"
        .'	                <li>The page may have moved to a new location.</li>'."\r\n"
        .'	                <li>An error may have occurred.</li>'."\r\n"
        .'	                <li>You are not authorized to view the requested resource.</li>',
    'reasons' => 'This may have occurred because of several reasons',
    'try_again' => 'Please try again in a few minutes, or alternatively return to the homepage by <a href="http://localhost:8000/admin">clicking here</a>.',
    'not_found' => 'Not Found',
];
