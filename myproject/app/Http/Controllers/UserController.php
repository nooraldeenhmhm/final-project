<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $users= User::all();
        return $users;

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

        $name=$request->name;

 $email=$request->email;
 $password=$request->password;

 $profision=$request->image;
 $image=$request->image;
 $role=$request->role;
        $user = new User;

        $user->name =$request->name;
        $user->password =$password;
        $user->email =$email;
        $user->profision =$profision;
        $user->image =$image;
        $user->role =$role;

        $user->save();
        return response()->json([
      
            'message'=>'user settings updated'
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
        $user =  User::where('id',$id)->get()->first();
        $user->update([ 
             'name' => $request->name,
             'email' => $request->email,
             'password' => $request->password,
             'profision' => $request->profision,
             'image' => $request->image,
             'role' => $request->role,

 
         ]);
 
         return $user;
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
        $user = User::where('id','&id');

        $user->delete();
        return response()->json([
            'success' => true,
            'message'=>'user deleted']);
        //
    }
}
