<?php

namespace MinhD\AIO\Http\Controllers\Api;

use MinhD\AIO\Quote\Quote;
use Illuminate\Http\Request;
use MinhD\AIO\Http\Controllers\Controller;

class QuoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Quote::all();
    }

    public function random()
    {
        return Quote::inRandomOrder()->take(1)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'content' => 'required'
        ]);

        if ($validator->fails()) {
            return $validator->errors();
        }

        return Quote::create(['content' => $request->input('content')]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \MinhD\AIO\Quote\Quote $quote
     * @return \Illuminate\Http\Response
     */
    public function show(Quote $quote)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \MinhD\AIO\Quote\Quote $quote
     * @return \Illuminate\Http\Response
     */
    public function edit(Quote $quote)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \MinhD\AIO\Quote\Quote $quote
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Quote $quote)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \MinhD\AIO\Quote\Quote $quote
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quote $quote)
    {
        //
    }
}
