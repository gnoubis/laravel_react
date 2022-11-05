<?php

namespace App\Http\Controllers;

use App\Models\projet;
use Illuminate\Http\Request;

class projectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $projet = projet::get();
       return response()->json($projet);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $projet = new projet();
        $projet->name = $request->name;
        $projet->description = $request->description;
        $projet->save();
       return response()->json($projet);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $projet = projet::find($id);
        return response()->json($projet);

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

        $projet = projet::find($id);
        $projet->name = $request->name;
        $projet->description = $request->description;
        $projet->save();

        return response()->json($projet);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        projet::destroy($id);
        return response()->json(['mesaage' => 'supprimer']);

    }
}
