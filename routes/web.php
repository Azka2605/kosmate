
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KosController;

Route::get('/', function () {
    return redirect()->route('kos.index');
});

Route::resource('kos', KosController::class);

Route::get('/', function () {
    return view('welcome');
});
