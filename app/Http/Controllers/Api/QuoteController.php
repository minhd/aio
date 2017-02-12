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
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = $request->input('query');
        $limit = $request->input('limit') ?: 10;
        $offset = $request->input('offset') ?: 0;
        $orderBy = $request->input('sortBy') ?: 'updated_at';
        $orderDirection = $request->input('sortDirection') ?: 'desc';

        $quotes = Quote::limit($limit)->offset($offset)
            ->orderBy($orderBy, $orderDirection);

        if ($request->user()) {
            $quotes = $quotes->where('user_id', $request->user()->id);
        }

        if ($query) {
            $quotes = $quotes->where('content', 'like', "%$query%");
        }

        return $quotes->get();
    }

    public function random(Request $request)
    {
        $quote = Quote::inRandomOrder();

        if ($request->input('butnot')) {
            $quote = $quote->where('id', '!=', $request->input('butnot'));
        }

        return $quote->take(1)->get();
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
        $this->validate($request, [
            'content' => 'required'
        ]);

        return Quote::create([
            'content' => $request->input('content'),
            'author' => $request->input('author'),
            'user_id' => $request->input('user_id') ?: $request->user()->id
        ]);
    }



    /**
     * Display the specified resource.
     *
     * @param  \MinhD\AIO\Quote\Quote $quote
     * @return \Illuminate\Http\Response
     */
    public function show(Quote $quote)
    {
        return response()->json($quote);
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
        $quote->delete();
        return ['success'];
    }
}
