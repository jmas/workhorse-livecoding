<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(StoreProductRequest $request)
    {
        return Product::create($request->all());
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(UpdateProductRequest $request, Product $product)
    {
        return DB::update(
            "UPDATE products SET qty = qty + :diff WHERE id = :id",
            [
                ":diff" => $request->integer("diff"),
                ":id" => $product->id,
            ]
        );
    }

    public function destroy(Product $product)
    {
        return $product->delete();
    }
}
