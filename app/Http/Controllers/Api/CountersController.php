<?php

namespace MinhD\AIO\Http\Controllers\Api;

use MinhD\AIO\Counter\Counter;
use Illuminate\Http\Request;
use MinhD\AIO\Http\Controllers\Controller;

class CountersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Counter::all()->load('events');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);

        $counter = Counter::createForUser(
            $request->user(),
            $request->only(['name'])
        );

        return response()->json($counter);
    }

    public function increments(Request $request, Counter $counter, $value)
    {
        $counter->incrementBy($value, $request->user());

        return $counter;
    }

    public function recalculate(Counter $counter)
    {
        $counter->recalculate();

        return $counter;
    }

    /**
     * Display the specified resource.
     *
     * @param  \MinhD\AIO\Counter\Counter $counter
     * @return \Illuminate\Http\Response
     */
    public function show(Counter $counter)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \MinhD\AIO\Counter\Counter $counter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Counter $counter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \MinhD\AIO\Counter\Counter $counter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Counter $counter)
    {
        $counter->delete();
        return ['Success'];
    }
}
