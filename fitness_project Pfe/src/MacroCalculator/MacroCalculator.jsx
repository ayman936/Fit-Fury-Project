
import { useState } from "react"
import './MacroCalculator.css'

export default function MacroCalculator() {
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [age, setAge] = useState()
  const [goal, setGoal] = useState("bulking")
  const [results, setResults] = useState(null)
  const calculateMacros = () => {
    let proteinIntake, calorieIntake, carbIntake
    if (goal === "bulking") {
        // Protein intake in grams per kg of body weight
        proteinIntake = Math.round(weight * 1.6);
        // Total calorie intake
        calorieIntake = Math.round(weight * 25 + 500);
        // Carbohydrate intake in grams
        carbIntake = Math.round((calorieIntake - proteinIntake * 4 - weight * 0.5 * 9) / 4);
      } else {
        // Protein intake in grams per kg of body weight
        proteinIntake = Math.round(weight * 1.2);
        // Total calorie intake
        calorieIntake = Math.round(weight * 22 - 500);
        // Carbohydrate intake in grams
        carbIntake = Math.round((calorieIntake - proteinIntake * 4 - weight * 0.5 * 9) / 4);
      }
    setResults({ proteinIntake, calorieIntake, carbIntake })
  }
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-black text-center">Macro Calculator</h1>
        <p className="text-gray-500 mb-8 text-center" style={{fontWeight:'bolder'}}>
          Enter your height, weight, age, and goal to get your recommended daily protein, calorie, and carbohydrate
          intake.
        </p>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div class="inputGroup">
              <input 
                type="text" 
                autocomplete="on" 
                name="number" 
                class="input" 
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(parseInt(e.target.value))}
              />
            </div>
            <div class="inputGroup">
              <input 
                type="text" 
                autocomplete="on" 
                name="number" 
                class="input" 
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div class="inputGroup">
              <input 
                type="text" 
                autocomplete="on" 
                name="number" 
                class="input" 
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
              />
            </div>
            </div>

            <div 
               class="relative group rounded-lg 
               w-64 bg-black overflow-hidden 
               before:absolute before:w-12 
               before:h-12 before:content[''] 
               before:right-0 before:bg-gradient-to-orange 
               before:from-black-500 before:to-orange before:rounded-full 
               before:blur-lg before:[box-shadow:-60px_20px_10px_10px_orange]">
                <svg
                  y="0"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  height="100"
                  class="w-8 h-8 absolute right-0 -rotate-45 stroke-white top-1.5 
                  group-hover:rotate-0 duration-300">
                  <path
                    stroke-width="4"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    fill="none"
                    d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
                    class="svg-stroke-primary" 
                  ></path>
                </svg>
                <select
                  onChange={(e) => setGoal(e.target.value)}
                  class="appearance-none hover:placeholder-shown:bg-emerald-500 
                  relative text-white bg-transparent ring-0 outline-none 
                  border border-neutral-500 placeholder-violet-700 
                  text-sm font-bold rounded-lg focus:ring-violet-500 
                  focus:border-violet-500 block w-full p-2.5"
                >
                  <optgroup>
                    <option value="" disabled selected hidden>Choose Your Goal</option>
                    <option value="bulking" className="text-black">Bulking</option>
                    <option value="cutting" className="text-black">Cutting</option>
                  </optgroup>
                </select>
            </div>
          <button class="button type1" onClick={calculateMacros}>
            <span class="btn-txt">Calculate</span>
          </button>

        </div>
        {results  && (
          <div className="mt-8 bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-black">Your Recommended Macros</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2 text-black">Protein</h3>
                <p className="text-4xl font-bold text-orange-500">{results.proteinIntake}g</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-black">Calories</h3>
                <p className="text-4xl font-bold text-orange-500">{results.calorieIntake}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-black">Carbs</h3>
                <p className="text-4xl font-bold text-orange-500">{results.carbIntake}g</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}