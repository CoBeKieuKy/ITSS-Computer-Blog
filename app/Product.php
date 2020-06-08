<?php


namespace App;

use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    public static function loadAllProducts(): Paginator
    {
        return static::paginate();
    }
}
