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

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/home', function() {
    return redirect()->to('/');
});

Route::group(['prefix' => 'testapi'], function () {

    Route::get('/user', function (Request $request)    {
        return $request->user();
    });

    Route::get('/quotes/random', 'Api\QuoteController@random');

    Route::resource('quotes', 'Api\QuoteController');

});