import React from 'react';// Assuming you have a button component in the specified path
import './Bulk.css';
import DumbbellIcon from '../dumbell.png';
import CheckIcon from '../circle.png'
import NutIcon from '../nature.png';
import RecycleIcon from '../recycling.png';
import Cart from '../cart.png';
import Haltere from '../haltere.png';
import TimerIcon from '../timer.png';
import logo from "../Remove-bg.ai_1714305241460.png";
import BodyBuilder from '../ai-generated-8378233_1280.webp'
import AccessibilityIcon from '../wheelchair.png';
import Meal from '../iifym-guide-1296x728-feature.jpg'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Footer from '../footer';

export default function BulkingProgram() {
  return (
    <div className="bg-gray-950 text-gray-50">
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
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${Haltere})`,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the alpha value (0.5) for the desired transparency
  }}>
        <div className="absolute inset-0 bg-gray-900" style={{ opacity: 0.8 }}>
          <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Bulk Up with Our Proven Program
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">
              Unlock your true muscle-building potential with our comprehensive bulking program.
            </p>
            <button id='b'>
              <span><NavLink to='/BulkAdvice' className="nav-link text-black">Learn More</NavLink></span>
              <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-20 px-4 md:px-6">
        <div className="container mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Program Details</h2>
            <p className="mt-4 text-lg text-gray-400">Discover the key components of our proven bulking program.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg" id="div">
              <img src={DumbbellIcon} className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-bold">Strength Training</h3>
              <p className="text-gray-400">Comprehensive strength-building workouts to maximize muscle growth.</p>
            </div>
            <div className="space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg" id="div">
              <img src={NutIcon} className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-bold">Nutrition Plan</h3>
              <p className="text-gray-400">Tailored meal plans to fuel your body for optimal muscle development.</p>
            </div>
            <div className="space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg" id="div">
              <img src={RecycleIcon} className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-bold">Training Scales</h3>
              <p className="text-gray-400">Training progression with scalable exercises for improved results.</p>
            </div>
            
            
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meal Plan</h2>
            <p className="mt-4 text-lg text-gray-400">Fuel your body with our carefully crafted meal plan.</p>
            <ul className="mt-8 space-y-4 text-gray-400">
              <li className="flex items-start">
                <img src={CheckIcon} className="mr-4 h-6 w-6 flex-shrink-0 text-orange-500" />
                <span>High-calorie, nutrient-dense meals</span>
              </li>
              <li className="flex items-start">
                <img src={CheckIcon} className="mr-4 h-6 w-6 flex-shrink-0 text-orange-500" />
                <span>Balanced macronutrient ratios</span>
              </li>
              <li className="flex items-start">
                <img src={CheckIcon} className="mr-4 h-6 w-6 flex-shrink-0 text-orange-500" />
                <span>Customizable to your dietary needs</span>
              </li>
            </ul>
          </div>
          <img
            alt="Meal Plan"
            className="mx-auto aspect-video w-full max-w-md rounded-lg object-cover"
            height="400"
            src={Meal}
            width="600"
          />
        </div>
      </section>
      <section className="bg-gray-800 py-20 px-4 md:px-6">
        <div className="container mx-auto space-y-12">
          <div className="text-center" >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Workout Routine</h2>
            <p className="mt-4 text-lg text-gray-400">Maximize your gains with our comprehensive workout program.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" >
            <div className="space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg" id="div">
            <img src={DumbbellIcon} className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-bold">Results Checks</h3>
              <p className="text-gray-400">Regular tracking and evaluation to ensure optimal progress.</p>
            </div>
            <div className="space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg" id="div">
            <img src={TimerIcon} className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-bold">Schedule</h3>
              <p className="text-gray-400">Tailored workout schedules to optimize your time and progress.</p>
            </div>
            <div className="space-y-4 rounded-lg bg-gray-950 p-6 shadow-lg" id="div">
            <img src={AccessibilityIcon} className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-bold">Support</h3>
              <p className="text-gray-400">Access to expert nutritionists and coaches to assist with your goals.</p>
            </div>
            
            
            
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}


