<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Product::create([
            "name" => "Product 1",
            "sku" => "product-1",
            "qty" => 1,
        ]);

        Product::create([
            "name" => "Product 2",
            "sku" => "product-2",
            "qty" => 2,
        ]);

        Product::create([
            "name" => "Product 3",
            "sku" => "product-3",
            "qty" => 3,
        ]);
    }
}
