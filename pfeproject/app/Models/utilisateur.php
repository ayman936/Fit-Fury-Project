<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class utilisateur extends Model
{
    use HasFactory;
    protected $table = "utilisateur";
    protected $primaryKey = "id_user";
    protected $fillable = ['nomuser', 'prenomuser', 'emailuser', 'adresseuser', 'selected_program_id'];
    public $incrementing = false;
    public $timestamps = false;

    public function programmes()
    {
        return $this->belongsToMany(Programme::class, 'suivre', 'user_id', 'programme_id')
                    ->withTimestamps()
                    ->withPivot('start_date');
    }
    public function commande(){
        return $this->hasMany(commande::class,'id_user','id_commande');
    }
}
