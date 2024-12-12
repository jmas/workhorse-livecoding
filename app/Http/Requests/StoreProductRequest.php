<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ["required", "max:50"],
            "sku" => ["required", "max:100"],
            "qty" => ["required", "integer"],
        ];
    }
}
