<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTAuth;
use JWTAuthException;

class UserController extends Controller
{
    private function getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }
    public function login(Request $request)
    {
        $user = \App\User::where('email', $request->email)->get()->first();
        if ($user && \Hash::check($request->password, $user->password)) // The passwords match...
        {
            $token = self::getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();
            $response = ['success'=>true, 'data'=>['id'=>$user->id,'auth_token'=>$user->auth_token,'name'=>$user->name, 'email'=>$user->email]];           
        }
        else 
          $response = ['success'=>false, 'data'=>'Record doesnt exists'];
      
        return response()->json($response, 201);
    }
    public function register(Request $request)
    { 
        $payload = [
            'password' => \Hash::make($request->password),
            'email' => $request->email,
            'name' => $request->name,
            'profision' => 'profision',
            'auth_token' =>  ''
        ];
                  
        $user = new \App\User($payload);
        if ($user->save())
        {
            
            $token = self::getToken($request->email, $request->password); // generate user token
            
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\User::where('email', $request->email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            
            $response = ['success'=>true, 'data'=>['name'=>$user->name,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
        
        
        return response()->json($response, 201);
    }



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
