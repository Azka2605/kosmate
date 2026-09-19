
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KosController;

Route::get('/', function () {
    return view('react');
});

Route::resource('kos', KosController::class);
