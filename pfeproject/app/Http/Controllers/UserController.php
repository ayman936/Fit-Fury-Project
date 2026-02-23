<?php

namespace App\Http\Controllers;

use App\Models\Programme;
use App\Models\utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validate the incoming request data
            $validatedData = $request->validate([
                'nomuser' => 'required|string|max:255',
                'prenomuser' => 'required|string|max:255',
                'emailuser' => 'required|email|max:255',
                'adresseuser' => 'required|string|max:255',
                'selectedProgram' => 'required|string|max:255'
            ]);

            // Find or create the programme
            $programme = Programme::firstOrCreate(['name' => $validatedData['selectedProgram']]);

            // Create the user
            $user = new utilisateur();
            $user->nomuser = $validatedData['nomuser'];
            $user->prenomuser = $validatedData['prenomuser'];
            $user->emailuser = $validatedData['emailuser'];
            $user->adresseuser = $validatedData['adresseuser'];
            $user->selected_program_id = $programme->id; // Save the program ID
            $user->save();

            // Attach the user to the programme with start_date
            $user->programmes()->attach($programme->id, ['start_date' => now()]);

            return response()->json(['message' => 'User created successfully'], 201);
        } catch (\Exception $e) {
            // Log the error
            Log::error('Error creating user', ['exception' => $e]);
        }
    }
}
