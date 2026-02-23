// Component.js
import ActivityIcon from "../treadmill.png";
import DumbbellIcon from '../gym.png';
import CardioIcon from '../cardio.png'
import Footer from "../footer";
import './cut.css';
import Regen from '../ACP235-750x500.jpg'
import meal from '../mealplanning.png'
import logo from '../Remove-bg.ai_1714305241460.png';
import body from '../BarBend-Feature-Image-1200-x-675-36.jpg'
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


/*const App = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-gray-50">
      <HeroSection />
      <FitnessSection />
      <NutritionSection />
      <RecoverySection />
      <Footer />
    </div>
  );
};*/
export default function CutingProgram(){
    return(
        <div className="App bg-gray-900">
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
    <section
  className="relative h-[80vh] w-full bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${body})`,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the alpha value (0.5) for the desired transparency
    backgroundAttachment:'fixed'
  }}
>
  <div className="absolute inset-0 bg-gray-900" style={{ opacity: 0.7 }} />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-orange-500">
              Unlock Your Fitness Potential
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed">
              Join our community of fitness enthusiasts and transform your body and mind with our expert-led programs.
            </p>
            <a  class="button" href="#">
            <span class="button__icon-wrapper">
                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
            <NavLink to={'/CutAdvice'} className="nav-link text-black mr-5"> Explore All </NavLink>
        </a>
        </div>
    </section>
    <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4" id="div">
              <img src={DumbbellIcon} className="h-12 w-12 text-[#FF6B00]" />
              <h3 className="text-2xl font-bold text-black">Strength Training</h3>
              <p className="text-gray-600 text-center">
              Build muscle and improve your overall strength with our expert-led strength training programs.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 "id="div">
              <img src={CardioIcon} className="h-12 w-12 text-[#FF6B00]" />
              <h3 className="text-2xl font-bold text-black">Yoga & Meditation</h3>
              <p className="text-gray-600 text-center">
              Improve your flexibility, balance, and mindfulness with our expert-led yoga and meditation classes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4"id="div">
              <img src={ActivityIcon} className="h-12 w-12 text-[#FF6B00]" />
              <h3 className="text-2xl font-bold text-black">Cardio Workouts</h3>
              <p className="text-gray-600 text-center">Improve your cardiovascular health and endurance with ourexpert-led cardio programs.</p>
            </div>
          </div>
        </div>
      </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-500">
              Nutrition & Meal Planning
            </h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Fuel your fitness journey with our expert-led nutrition and meal planning programs.
            </p>
          </div>
        </div>
        <img
          alt="Nutrition Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-first"
          height="650"
          src={meal}
          width="650"
        />
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6">
        <img
          alt="Recovery Hero"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          height="650"
          src={Regen}
          width="650"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-500">
              Recovery & Regeneration
            </h2>
            <p className="max-w-[600px] text-black-300 md:text-xl">
              Optimize your recovery and regeneration with our expert-led programs, including massage, stretching, and more.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <button>
              <a href="#" class="btn2" id="but">
                <span class="spn2">
                  <NavLink to={'/CutAdvice'} className="nav-link text-black mr-5">Learn More</NavLink>
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
    )
}