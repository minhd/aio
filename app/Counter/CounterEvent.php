<?php

namespace MinhD\AIO\Counter;

use Illuminate\Database\Eloquent\Model;

/**
 * MinhD\AIO\Counter\CounterEvent
 *
 * @mixin \Eloquent
 */
class CounterEvent extends Model
{
    protected $fillable = ['message', 'user_id', 'increment', 'counter_id'];
}
