
import { Nav, NavDropdown, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../Remove-bg.ai_1714305241460.png'
import { Link } from "react-scroll"
import Squat from '../Muscles-Squats.003.jpg'
import Deadlift from '../Deadlift.jpg'
import PullUps from '../PullUps.jpg'
import OverheadPress from '../shoulder_press_480x480.webp'
import BentOverRows from '../BentOverRows.png'
import RibeyeSteak from '../images (10).jpeg'
import Quinoa from '../instant-pot-quinoa-20-20211203.jpg'
import PeanutButter from '../images (11).jpeg'
import WholeMilk from '../milk.jpg'
import Eggs from '../eggs.jpg'
import SweetPotatoes from '../sweetPotato.jpg'
import Footer from "../footer"

export default function BulkAdvice() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
            <Navbar bg="dark" expand="lg" variant="dark" className="custom-navbar">
      <Navbar.Brand href="#">
        <img src={logo} alt="Logo" width={150} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="navbar navbar-expand-lg mx-auto nav-link-custom">
          <NavLink id='nav' to='/' className="nav-link text-white mr-5">Home</NavLink>
          <NavLink id='nav' to='/Product' className="nav-link text-white mr-5">Products</NavLink>
          <NavLink id='nav' to='/Pricing' className="nav-link text-white mr-5">Pricing</NavLink>
          <NavDropdown id='nav' title={<span className="text-white ">Programs</span>}  className="dropdown-item text-white">
            <NavLink id='nav' to="/BulkingProgram" className="dropdown-item text-black">Bulking Program</NavLink>
            <NavLink id='nav' to="/CutingProgram" className="dropdown-item text-black">Cuting Program</NavLink>
            <NavLink id='nav' to="/MacroCalculator" className="dropdown-item text-black">Macro Calculator</NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-black to-orange-500">
          <div className="container px-4 md:px-6 text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
              Every rep, Every set, Every Drop of Sweat is a Step Closer To The Best Version Of Yourself
              </h1>
              <p style={{marginLeft:'280px'}} className="text-center max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              "The best project you’ll ever work on is you." - Andrew Tate
              </p>
            </div>
          </div>
        </section>
        <section id="exercises" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Exercises for Weight Gain</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Incorporate these exercises into your routine to gain mass and build muscle.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <img src={Squat} width={200} height={200} alt="Squats" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Squats</h3>
                  <p className="text-gray-500">A compound exercise that works the legs, hips, and core.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Deadlift} width={200} height={200} alt="Deadlift" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Deadlifts</h3>
                  <p className="text-gray-500">A fundamental exercise for increasing chest, shoulder, and tricep size.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={PullUps} width={200} height={200} alt="PullUps" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Pull-Ups</h3>
                  <p className="text-gray-500">An effective exercise for developing the back, shoulders, and biceps.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={OverheadPress} width={250} height={250} alt="Overhead Press" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Overhead Press</h3>
                  <p className="text-gray-500">A key movement for building shoulder and upper body strength.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={BentOverRows} width={150} height={150} alt="Bent Over Rows" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Bent Over Rows</h3>
                  <p className="text-gray-500">A compound exercise that targets the back, promoting thickness and strength.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="nutrition" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-gray-800">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">Nutritious Foods for Weight Gain</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Incorporate these calorie-dense, high-protein foods into your diet to support your muscle-building goals
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <img src={RibeyeSteak} width={200} height={200} alt="Ribeye Steak" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Ribeye Steak</h3>
                  <p className="text-gray-400">Rich in protein and healthy fats, 420 calories, 33g protein per 6oz serving.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Quinoa} width={200} height={200} alt="Quinoa" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Quinoa</h3>
                  <p className="text-gray-400">High in protein and complex carbs, 222 calories, 8g protein per 1 cup cooked.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={PeanutButter} width={200} height={200} alt="Peanut Butter" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Peanut Butter</h3>
                  <p className="text-gray-400">Calorie-dense and packed with healthy fats, 188 calories, 8g protein per 2 tbsp.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={WholeMilk} width={200} height={200} alt="Whole Milk" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Whole Milk</h3>
                  <p className="text-gray-400">Calorie-rich and protein-packed, 150 calories, 8g protein per 1 cup.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Eggs} width={200} height={200} alt="Eggs" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Whole Eggs</h3>
                  <p className="text-gray-400">Nutrient-dense and calorie-rich, 143 calories, 12g protein per 2 large eggs.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={SweetPotatoes} width={200} height={200} alt="Sweet Potatoes" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Sweet Potatoes</h3>
                  <p className="text-gray-400">Juicy and calorie-dense, 209 calories, 26g protein per 3.5oz serving.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        </div>
      <Footer/>
    </div>
  )
}