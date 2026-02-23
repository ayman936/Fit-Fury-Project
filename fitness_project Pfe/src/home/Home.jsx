import React from "react";
import "./App.css";
import Footer from '../footer.js';
import backgroundImage from '../sddefault.jpg';
import logo from '../Remove-bg.ai_1714305241460.png';
import DumbbellIcon from "../gym.png";
import GroupIcon from "../people.png";
import LeafIcon from "../leaves.png";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Pricing from "../pricing/Pricing.jsx";
import u1 from '../user1.png';
import u2 from '../user2.png';
import u3 from '../user3.png';

export default function Home() {
  return (
    <div className="App">
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
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the alpha value (0.5) for the desired transparency
    backgroundAttachment:'fixed'
  }}
>
  <div className="absolute inset-0 bg-gray-900" style={{ opacity: 0.7 }} />
  <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      Unleash Your Fitness Potential with FitFury
    </h1>
    <p className="mt-4 max-w-xl text-lg leading-relaxed">
      Experience personalized training, expert-led group classes, and tailored nutrition plans to transform your
      body and mind.
    </p>
    <button class='b'><NavLink to='/Pricing' className="nav-link text-white ">Get Started</NavLink></button>
  </div>
</section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4" id="div">
              <img src={DumbbellIcon} className="h-12 w-12 text-[#FF6B00]" />
              <h3 className="text-2xl font-bold text-black">Personal Training</h3>
              <p className="text-gray-600 text-center">
                Work one-on-one with our certified trainers to achieve your fitness goals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 "id="div">
              <img src={GroupIcon} className="h-12 w-12 text-[#FF6B00]" />
              <h3 className="text-2xl font-bold text-black">Group Classes</h3>
              <p className="text-gray-600 text-center">
                Join our high-energy group classes and get fit with a supportive community.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4"id="div">
              <img src={LeafIcon} className="h-12 w-12 text-[#FF6B00]" />
              <h3 className="text-2xl font-bold text-black">Nutrition Plans</h3>
              <p className="text-gray-600 text-center">Fuel your body with personalized nutrition plans designed by our experts.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center" >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">What Our Clients Say</h2>
            <p className="mt-4 text-gray-400">
              Hear from our satisfied customers about their transformative experiences with FitFury.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md" id="div">
              <blockquote className="text-lg font-medium leading-relaxed">
                "FitFury has completely changed my life. The personalized training and nutrition plan have helped me
                achieve my fitness goals in a way I never thought possible."
              </blockquote>
              <div className="mt-4 flex items-center space-x-4">
                <img
                  alt="Testimonial 1"
                  className="h-12 w-12 rounded-full object-cover"
                  height={48}
                  src={u1}
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <div>
                  <div className="font-medium text-black">Sarah Johnson</div>
                  <div className="text-gray-600">Accountant</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md" id="div">
              <blockquote className="text-lg font-medium leading-relaxed">
                "I was hesitant to try group classes, but the FitFury team made me feel so welcome and supported. The
                classes are challenging but so much fun!"
              </blockquote>
              <div className="mt-4 flex items-center space-x-4">
                <img
                  alt="Testimonial 2"
                  className="h-12 w-12 rounded-full object-cover"
                  height={48}
                  src={u2}
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <div>
                  <div className="font-medium text-black">Michael Lee</div>
                  <div className="text-gray-600">Software Engineer</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md" id="div">
              <blockquote className="text-lg font-medium leading-relaxed">
                "The nutrition plan from FitFury has helped me fuel my body in a way I never thought possible. I have so
                much more energy and focus throughout the day."
              </blockquote>
              <div className="mt-4 flex items-center space-x-4">
                <img
                  alt="Testimonial 3"
                  className="h-12 w-12 rounded-full object-cover"
                  height={48}
                  src={u3}
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <div>
                  <div className="font-medium text-black">Emily Chen</div>
                  <div className="text-gray-600">Marketing Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    
    <section  id="section2"style={{height:"900px"}}><div class="propos"><h2 
        style={{letterSpacing:"3px",fontFamily:"serif",fontSize:"45px",marginLeft:"100px",marginTop:"40px"}}>
          <div style={{fontFamily:"serif"}}>A propos de notre centre</div> <div style={{fontFamily:"serif"}}>d'espagnole et de preparation</div>
         
           <div style={{fontFamily:"serif"}}>aux examens</div></h2><div style={{marginLeft:"100px",fontSize:"25px",marginTop:"10px",fontFamily:"Helvetica"}}>Nous sommes là pour aider les étudiants à réaliser </div>
            <div style={{marginLeft:"100px",fontSize:"25px",marginTop:"5px",fontFamily:"Helvetica"}}>
              leurs rêves linguistiques et académiques.</div> <div style={{borderBottom:"1px solid rgb(218, 217, 217)",width:"200px",marginLeft:"900px",position:"absolute",marginTop:"150px"}}></div></div><h4 style={{}}></h4>
              
              <div class="div1"style={{position:"absolute",marginLeft:"900px",marginRight:"200px",marginTop:"-450px",lineHeight:"1.5",fontFamily:"Verdana",color:"white"}}>
                Notre mission est de fournir les outils nécessaires aux étudiants 
                pour exceller dans leur apprentissage de la langue espagnole 
                et réussir les prestigieux examens DELE et Selectividad,
                En offrant un environnement d'apprentissage interactif et engageant.</div>
                 <div   class="div"style={{position:"absolute",marginLeft:"900px",marginRight:"200px",marginTop:"-280px",lineHeight:"1.5",fontFamily:"Verdana",color:"white"}}>
                  
                  nous permettons aux étudiants de développer leurs compétences linguistiques
                   et d'atteindre leurs objectifs éducatifs. Rejoignez-nous et commencez
                    votre voyage vers la maîtrise de l'espagnol 
                    et la réalisation de vos aspirations académiques.</div>
                    
                    </section>
      <Footer/>
    </div>
  );
}
