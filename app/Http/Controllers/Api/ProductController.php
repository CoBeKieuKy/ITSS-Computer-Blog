<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Product;

class ProductController extends Controller
{
    /**
     * Get all Products
     */
    public function index(){
        return Product::loadAllProducts();
    }

    public function show($id){
        return Product::findOrFail($id);
    }
}
