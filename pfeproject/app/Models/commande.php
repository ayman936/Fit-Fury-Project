<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class commande extends Model
{
    use HasFactory;
    protected $table="commande";
    protected $primaryKey="id_commande";
    public $incrementing=false;
    public $timestamps=false;
    public function produit(){
        return $this->belongsToMany(produit::class,'contenir','id_produit','id_commande')->withPivot('qtecommander');
    }
    public function utilisateur(){
        return $this->belongsMany(commande::class,'id_user','id_commande');
    }
}
