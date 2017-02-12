<?php

namespace MinhD\AIO\Counter;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use MinhD\AIO\User;

/**
 * MinhD\AIO\Counter\Counter
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\MinhD\AIO\Counter\CounterEvent[] $events
 * @property-read \MinhD\AIO\User $user
 * @mixin \Eloquent
 */
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

    public function stats()
    {
        $events = collect($this->events()->get());
        $timezone = 'Australia/Canberra';
        return [
            'today' =>  $events->filter(function($item) use($timezone) {
                return $item->updated_at->timezone($timezone)->dayOfYear == Carbon::today($timezone)->dayOfYear;
            })->pluck('increment')->sum(),
            'yesterday' => $events->filter(function($item) use ($timezone) {
                return $item->updated_at->timezone($timezone)->dayOfYear == Carbon::yesterday($timezone)->dayOfYear;
            })->pluck('increment')->sum(),

            'this_week' => $events->filter(function($item) use ($timezone) {
                return $item->updated_at->timezone($timezone)->weekOfYear == Carbon::today($timezone)->weekOfYear;
            })->pluck('increment')->sum(),

        ];
    }

}
