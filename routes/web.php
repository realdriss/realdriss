<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;
use App\Events\Test;



Route::get('/broadcast', function () {
	broadcast(new Test());
});




Route::get('/playground', function (Request $request) {
	
	return null;
});

