<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class produit extends Model
{
    use HasFactory;
    protected $table="produit";
    protected $primaryKey="id_produit";
    public $incrementing=false;
    public $timestamps=false;
    public function commande(){
        return $this->belongsToMany(commande::class,'contenir','id_produit','id_commande')->withPivot('qtecommander');
    }

}
