<?php

namespace MinhD\AIO\Counter;

use Illuminate\Database\Eloquent\Model;
use MinhD\AIO\User;

class Counter extends Model
{
    protected $fillable = ['name'];

    public function events()
    {
        return $this->hasMany(CounterEvent::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function incrementBy($by, User $user)
    {
        $this->count = $this->count + $by;
        $this->events()->create([
            'message' => '',
            'increment' => $by,
            'user_id' => $user->id
        ]);
        // $this->recalculate();
        $this->save();
        return $this->load('events');
    }

    public function recalculate()
    {
        $this->load('events');
        $total = $this->events()->get()->pluck('increment')->sum();
        $this->count = $total;
        return $this->save();
    }

    public static function createForUser(User $user, $attributes)
    {
        $counter = new static;
        $counter->fill($attributes);
        $counter->user_id = $user->id;
        $counter->save();
        return $counter;
    }

}
