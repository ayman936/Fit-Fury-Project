<?php

namespace App\Http\Controllers;
use App\Models\produit;

use Illuminate\Http\Request;

class pfeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produit=produit::all();
        return $produit;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create()
    {
        return view('createproduit');
    }
    public function store(Request $request)
    {
        $request->validate([
            'id_produit' => 'required|numeric',
            'nomprod' => 'required|string|max:255',
            'description' => 'required|string',
            'prixprod' => 'required|integer',
            'quantiteStocker' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:20048',
        ]);
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('profile','public');
        }
        $Res=new produit();
        $Res->id_produit=$request->input('id_produit');
        $Res->nomprod=$request->input('nomprod');
        $Res->description=$request->input('description');
        $Res->prixprod=$request->input('prixprod');
        $Res->quantiteStocker=$request->input('quantiteStocker');
        $Res->image=$imagePath;
        
        $Res->save();
        return Redirect()->Route('Product.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return view('createproduit');
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
