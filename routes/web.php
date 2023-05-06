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
use App\Http\Controllers\JsonRpcController;
use App\Http\Controllers\RpcTestController;


Route::post('/handle', [JsonRpcController::class, 'handle']);

