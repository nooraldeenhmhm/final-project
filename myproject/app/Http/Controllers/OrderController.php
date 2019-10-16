<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders= Order::all();
        return $orders;
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $address=$request->address;
 $status=$request->status;
 $customer_id=$request->customer_id;
 
 $date=$request->date;
 
        $order = new Order;

       
        $order->status =$status;
        $order->address =$address;
       
        $order->date =$date;
    
        $order->customer_id =$customer_id;
        $order->save();
        return response()->json([
      
            'message'=>'order settings updated'
        ]); 
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $order =  Order::where('id',$id)->get()->first();
        $order->update([ 
             'address' => $request->address,
             'status' => $request->status,
            
             'date' => $request->date,
             'customer_id' => $request->customer_id,

 
         ]);
 
         return $order;
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::where('id','&id');

        $order->delete();
        return response()->json([
            'success' => true,
            'message'=>'order deleted']);
        //
    }
}
