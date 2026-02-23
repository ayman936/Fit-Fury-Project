import './pricing.css';
import CheckIcon from "../circle.png";
import logo from "../Remove-bg.ai_1714305241460.png";
import Cart from '../cart.png';
import bg from '../strong-bald-bodybuilder-six-pack-600nw-553440583.webp'
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import  './Home.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Footer from '../footer';
import {Link} from 'react-scroll';
import { useState, useEffect } from 'react';
import man from '../pngtree-an-old-gym-setting-with-dumbbells-image_2569910.jpg'
import u1 from '../user1.png';
import u2 from '../user2.png';
import u3 from '../user3.png';
import L from '../limit.jpg';
import { Element, animateScroll as scroll } from 'react-scroll';
import { ProgramContext } from '../context';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [perfectBodies, setPerfectBodies] = useState(0);
  const [workingHours, setWorkingHours] = useState(0);
  const [successStories, setSuccessStories] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { setSelectedProgram } = useContext(ProgramContext);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById('statsSection');
    const onScroll = () => {
      if (element && element.getBoundingClientRect().top < window.innerHeight) {
        startCounting();
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const startCounting = () => {
    const interval = setInterval(() => {
      setHappyCustomers(prev => prev < 5000 ? prev + 1 : 5000);
    }, 10);
    setTimeout(() => clearInterval(interval), 5000);

    const interval2 = setInterval(() => {
      setPerfectBodies(prev => prev < 4560 ? prev + 1 : 4560);
    }, 10);
    setTimeout(() => clearInterval(interval2), 4560);

    const interval3 = setInterval(() => {
      setWorkingHours(prev => prev < 900 ? prev + 1 : 900);
    }, 10);
    setTimeout(() => clearInterval(interval3), 900);

    const interval4 = setInterval(() => {
      setSuccessStories(prev => prev < 900 ? prev + 1 : 900);
    }, 10);
    setTimeout(() => clearInterval(interval4), 900);
};

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
          <NavDropdown id='nav' title={<span className="text-white "style={{}}>Programs</span>}  className="dropdown-item text-white">
            <NavLink id='nav' to="/BulkingProgram" className="dropdown-item text-black">Bulking Program</NavLink>
            <NavLink id='nav' to="/CutingProgram" className="dropdown-item text-black">Cuting Program</NavLink>
            <NavLink id='nav' to="/MacroCalculator" className="dropdown-item text-black">Macro Calculator</NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <main>
      <section
  className="relative h-[80vh] w-full bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${L})`,
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust the alpha value (0.5) for the desired transparency
    backgroundAttachment:'fixed'
  }}
>
          <div className="absolute inset-0 bg-gray-900" style={{ opacity: 0.8 }} />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Take your fitness to the next level
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8">
            Our fitness plans are designed to help you achieve your goals and transform your body.
          </p>
          <Link to={'packs'} className="nav-link text-white " smooth={true} duration={500}>
            <button id='button' style={{border: '2px solid #FF6B00'}}>Get Started</button>
          </Link>
          </div>
        </section>
        <section className="py-20 px-4 lg:px-6" id="start">
          <Element name="packs"><div class="cards" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">  
            
            <div class="card" className="bg-gray-950 rounded-lg p-8 flex flex-col items-center justify-between"id="div1">
              
            
              <div>
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-4xl font-bold mt-4">
                  $9
                  <span className="text-lg font-normal">/month</span>
                </p>
                <ul className="mt-6 space-y-4 text-white-400">
                  <li>
                    <img src={CheckIcon} alt="" className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    
                    Access to workout plans
                  </li>
                  <li>
                  <img src={CheckIcon} alt="" className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Nutrition guidance
                  </li>
                  <li>
                    <img src={CheckIcon} alt="" className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Basic progress tracking
                  </li>
                </ul>
                
    
              </div>
              <NavLink to={'/CoachingForm'} style={{textDecoration:'none'}}>
                <button className="mt-8 rounded-full bg-[#FF6B00] px-8 py-3 text-lg font-medium text-white hover:bg-[#FF5200] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2" 
                variant="primary"  onClick={() => setSelectedProgram('Basic')}>
                  Upgrade
                </button>
              </NavLink>
            </div>
            <div className="bg-gray-950 rounded-lg p-8 flex flex-col items-center justify-between"id="div1">
              
              <div>
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-4xl font-bold mt-4">
                  $19
                  <span className="text-lg font-normal">/month</span>
                </p>
                <ul className="mt-6 space-y-4 text-white-400">
                  <li>
                    <img src={CheckIcon} alt="" className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Access to workout plans
                  </li>
                  <li>
                    <img src={CheckIcon} alt="" className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Nutrition guidance
                  </li>
                  <li>
                    <img src={CheckIcon} alt="" className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Advanced progress tracking
                  </li>
                  <li>
                    <img src={CheckIcon} alt="" className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Personal coaching
                  </li>
                </ul>
              </div>
              <NavLink to={'/CoachingForm'} style={{textDecoration:'none'}}>
                <button 
                className="mt-8 rounded-full bg-[#FF6B00] px-8 py-3 text-lg font-medium text-white hover:bg-[#FF5200] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2" 
                variant="primary"  onClick={() => setSelectedProgram('Pro')}>
                  Upgrade
                </button>
              </NavLink>
            </div>
            <div className="bg-gray-950 rounded-lg p-8 flex flex-col items-center justify-between"id="div1">
              <div>
                <h3 className="text-2xl font-bold">Elite</h3>
                <p className="text-4xl font-bold mt-4">
                  $29
                  <span className="text-lg font-normal">/month</span>
                </p>
                <ul className="mt-6 space-y-4 text-white-400">
                  <li>
                  <img src={CheckIcon} className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Access to workout plans
                  </li>
                  <li>
                  <img src={CheckIcon} className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Nutrition guidance
                  </li>
                  <li>
                    <img src={CheckIcon} className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Advanced progress tracking
                  </li>
                  <li>
                  <img src={CheckIcon} className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Personal coaching
                  </li>
                  <li>
                  <img src={CheckIcon} className="h-5 w-5 text-orange-500 inline-block mr-2"/>
                    Exclusive workout
                  </li>
                </ul>
              </div>
              <NavLink to={'/CoachingForm'} style={{textDecoration:'none'}}>
                <button className="mt-8 rounded-full bg-[#FF6B00] px-8 py-3 text-lg font-medium text-white hover:bg-[#FF5200] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2" 
                variant="primary"  onClick={() => setSelectedProgram('Elite')}>
                  Upgrade
                </button>
              </NavLink>
            </div>
            
          </div>
          </Element>
        </section>
        
        <section className="py-20 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg p-8"id="div1">
                <blockquote>
                  <p className="text-lg font-medium">
                    "This fitness program has transformed my body and my life. I highly recommend it!"
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height={48}
                      src={u1}
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width={48}
                    />
                  </div>
                  <div className="ml-4"><div className="text-base font-medium">John Doe</div>
                    <div className="text-sm text-gray-400">Fitness Enthusiast</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-8"id="div1">
                <blockquote>
                  <p className="text-lg font-medium">
                    "I've never felt better. The personalized coaching and nutrition plan have been a game-changer."
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height={48}
                      src={u2}
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width={48}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium">Jane Smith</div>
                    <div className="text-sm text-gray-400">Fitness Junkie</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-8"id="div1">
                <blockquote>
                  <p className="text-lg font-medium">
                    "This is the best fitness program I've ever tried. The results speak for themselves."
                  </p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height={48}
                      src={u3}
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width={48}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium">Michael Johnson</div>
                    <div className="text-sm text-gray-400">Fitness Enthusiast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

<section class="sectionPadding" className="relative h-[80vh] w-full bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${man})`,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',// Adjust the alpha value (0.5) for the desired transparency
    backgroundAttachment:'fixed',
    height:'100px' 
  }}>
  <div class="bgColor" className="absolute inset-0 bg-gray-900" style={{ opacity: 0.5,height:'100px' }}>
    <div id="statsSection" class="statsSection">
      <div class="statsItem">
        <div class="statsValue" id="happyCustomers"><b>{happyCustomers}+</b></div>
        <div class="statsLabel"><b>Happy Customers</b></div>
      </div>
      <div class="statsItem">
        <div class="statsValue"><b>{workingHours}+</b></div>
        <div class="statsLabel"><b>Working Hours</b></div>
      </div>
    </div>
  </div>
</section>


      </main>
      
      <Footer/>
      
    </div>
  );
}
