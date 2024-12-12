<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", function () {
    return Inertia::render("Pages/Index", [
        "data" => Product::all(),
    ]);
});
