<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\OrderItems;
class OrderItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders= OrderItems::all();
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

        $quantity=$request->quantity;
        $order=$request->order;
        $item=$request->item;
        
        
        
               $orderItems = new OrderItems;
       
              
               $orderItems->order =$order;
               $orderItems->quantity =$quantity;
  
           
               $orderItems->item =$item;
               $orderItems->save();
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

        $orderitem =  OrderItems::where('order',$id)->get()->first();
       $item->update([ 
            'item' => $request->itme,
            'quantity' => $request->quantity,
           
          

        ]);

        return $orderitem;
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
        //
    }
}
