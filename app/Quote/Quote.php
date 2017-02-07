<?php

namespace MinhD\AIO\Quote;

use Illuminate\Database\Eloquent\Model;

class Quote extends Model
{
    protected $fillable = ['content', 'author', 'user_id'];
}
