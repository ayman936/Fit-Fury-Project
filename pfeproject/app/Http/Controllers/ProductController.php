<?php

namespace App\Http\Controllers;

use App\Models\produit;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function addToCart(Request $request)
{
    // Validate the incoming request
    $request->validate([
        'id_produit' => 'required|exists:products,id',
        'quantiteStocker' => 'required|integer|min:1',
    ]);

    $id_produit = $request->input('id_produit');
    $quantiteStocker = $request->input('quantiteStocker');
    $product = Produit::find($id_produit);

    if (!$product) {
        return response()->json(['error' => 'Produit non trouvé'], 404);
    }

    if ($product->stock < $quantiteStocker) {
        return response()->json(['error' => 'Stock insuffisant'], 400);
    }

    // Code to add to cart here (assuming you have logic for that)

    // Update the stock
    $product->stock -= $quantiteStocker;
    $product->save();

    return response()->json(['success' => 'Produit ajouté au panier']);
}

}
