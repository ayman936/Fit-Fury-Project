<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Programme extends Model
{
    protected $fillable = ['name'];
    public function users()
    {
        return $this->belongsToMany(User::class, 'suivre', 'programme_id', 'user_id')
            ->withTimestamps()
            ->withPivot('start_date');
    }
}

