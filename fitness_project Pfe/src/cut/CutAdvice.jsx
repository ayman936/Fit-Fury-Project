
import { Nav, NavDropdown, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../Remove-bg.ai_1714305241460.png'
import { Link } from "react-scroll"
import Squat from '../Muscles-Squats.003.jpg'
import Burpees from '../Muscles-Burpees.002.jpg'
import Jump from '../Muscles-Jumping-jacks.001.jpg'
import Lunges from '../Lunges.png'
import MountainClimbers from '../Muscles-Mountain-Climber.002.jpg'
import ChickenBreast from '../Chicken Breast.jpg'
import Salamon from '../salmoncrudo-featured.jpg'
import GreekYogurt from '../greek-yogurt-3.jpg'
import Broccoli from '../Broccoli-78ec54e.jpg'
import Eggs from '../eggs.jpg'
import Lentils from '../red-lentils-1-2.jpg'
import Footer from "../footer"

export default function CutAdvice() {
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
                Unlock Your Fitness Potential
              </h1>
              <p style={{marginLeft:'280px'}} className="text-center max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                "The only way to do great work is to love what you do." - Steve Jobs
              </p>
            </div>
          </div>
        </section>
        <section id="exercises" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Exercises for Weight Loss</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Incorporate these exercises into your routine to burn calories and build muscle.
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
                <img src={Burpees} width={200} height={200} alt="Burpees" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Burpees</h3>
                  <p className="text-gray-500">A full-body exercise that combines a push-up and a jump.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Jump} width={200} height={200} alt="Jumping Jacks" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Jumping Jacks</h3>
                  <p className="text-gray-500">A classic cardio exercise that gets your heart rate up.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Lunges} width={200} height={200} alt="Lunges" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Lunges</h3>
                  <p className="text-gray-500">A lower-body exercise that targets the glutes and quads.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={MountainClimbers} width={200} height={200} alt="Mountain Climbers" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Mountain Climbers</h3>
                  <p className="text-gray-500">A high-intensity cardio exercise that works the core.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="nutrition" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-gray-800">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">Nutritious Foods for Weight Loss</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Incorporate these low-calorie, high-protein foods into your diet to support your fitness goals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <img src={ChickenBreast} width={200} height={200} alt="Chicken Breast" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Chicken Breast</h3>
                  <p className="text-gray-400">Lean protein, 165 calories, 31g protein per 4oz serving.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Salamon} width={200} height={200} alt="Salmon" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Salmon</h3>
                  <p className="text-gray-400">Healthy fats, 182 calories, 26g protein per 4oz serving.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={GreekYogurt} width={200} height={200} alt="Greek Yogurt" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Greek Yogurt</h3>
                  <p className="text-gray-400">Protein-rich, 100 calories, 17g protein per 6oz serving.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Broccoli} width={200} height={200} alt="Broccoli" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Broccoli</h3>
                  <p className="text-gray-400">Nutrient-dense, 31 calories, 2.6g protein per 1 cup serving.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Eggs} width={200} height={200} alt="Eggs" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Eggs</h3>
                  <p className="text-gray-400">Protein-packed, 72 calories, 6g protein per 1 large egg.</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img src={Lentils} width={200} height={200} alt="Lentils" className="rounded-full" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-orange-500">Lentils</h3>
                  <p className="text-gray-400">Fiber-rich, 115 calories, 9g protein per 1/2 cup serving.</p>
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

function DumbbellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}