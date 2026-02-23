@extends('template1')
@section('contenu')
<h1>Remplir les champs</h1>
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<form action="{{ route('Product.store') }}" method="POST" enctype="multipart/form-data">
    @csrf
    code <input type="number" name='id_produit'/><br/>
    nom <input type="text" name='nomprod'/><br/>
    description <textarea id="description" name="description" rows="3" cols="46" ></textarea><br/>
    prix de produit <br/><input type="text" name='prixprod'/><br/>
    quantite stocker <br/><input type="text" name='quantiteStocker'/><br/>
    <br/><input type="file" name='image'/><br/>
    <input type="submit" value="ajouter"/><br/>
</form>
@endsection