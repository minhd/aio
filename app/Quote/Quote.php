<?php

namespace MinhD\AIO\Quote;

use Illuminate\Database\Eloquent\Model;

/**
 * MinhD\AIO\Quote\Quote
 *
 * @mixin \Eloquent
 */
class Quote extends Model
{
    protected $fillable = ['content', 'author', 'user_id'];
}
