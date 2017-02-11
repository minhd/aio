<?php

namespace MinhD\AIO\Counter;

use Illuminate\Database\Eloquent\Model;

class CounterEvent extends Model
{
    protected $fillable = ['message', 'user_id', 'increment', 'counter_id'];
}
