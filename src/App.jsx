import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChurch, faStaffSnake } from '@fortawesome/free-solid-svg-icons'
import morning from "./assets/mainlogo.png";
import health from "./assets/health1.jpg";


function App() {
  const [navOpen, setNavOpen] = useState(false); // State for mobile menu

  return (
    <div className="font-sans bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-700 text-white py-4 ">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-3 space-y-4">
        
        <img src={morning} alt="Event 1" className="w-20 h-15 object-cover  rounded-lg " />
          <span><h1 className="text-1xl sm:text-2.5xl font-semibold">Afya Ustawi Foundation</h1></span>
          </div>
          {/* Mobile Menu Toggle */}
          {
          <button className="md:hidden text-white text-3xl " onClick={() => setNavOpen(!navOpen)}>
               <FontAwesomeIcon icon={faBars}  className=" size-5 text-white-700 " />
          </button>
          }

          {/* Navigation Links */}
          <nav className={`absolute md:relative top-20 left-0 w-full md:w-auto md:flex ${navOpen ? "block" : "hidden "} bg-gray-700 md:bg-transparent lg:top-2`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
              <li>
                <a href="#home" className="block py-2 px-2 font-medium hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-2 font-medium hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="#services" className="block py-2 px-2 font-medium hover:text-gray-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-2 font-medium hover:text-gray-300">Contact</a>
              </li>
              <li>
              <a
      href="#services"
      className="bg-green-800 text-lime-50 px-6 py-3 rounded-lg hover:bg-green-500 transition duration-300 inline-block"
    >
      Sign in
    </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
  id="home"
  className="relative bg-green-900 h-[400px] items-center bg-cover bg-center text-white py-20 text-center px-4"
  style={{ backgroundImage: `url(${health})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl text-green-500 font-bold mb-4">
      Welcome to Afya Ustawi Foundation
    </h2>
    <p className="text-lg font-semibold  mb-6">
    Empowering health. Enriching lives.
    </p>
    <a
      href="#services"
      className="bg-green-800 text-lime-50 px-6 py-3 rounded-lg hover:bg-green-500 transition duration-300 inline-block"
    >
      Discover Our Services
    </a>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">About Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our church is a vibrant community of believers who come together to worship, serve, and support one another. 
            We are passionate about spreading love and hope.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Sunday Worship</h4>
              <p className="text-gray-700">Join us every Sunday for an uplifting time of worship and teaching.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Prayer Meetings</h4>
              <p className="text-gray-700">We gather for prayer every Wednesday evening to support each other.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Youth Fellowship</h4>
              <p className="text-gray-700">A special gathering for the youth to grow in faith and community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
          <p className="text-lg mb-4">
            We would love to hear from you! Get in touch with us for more information or prayer requests.
          </p>
          <a href="mailto:info@churchname.com" className="bg-yellow-500 text-green-600 px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 inline-block">
            Send an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-100">
      <footer className="bg-green-700 text-white py-6 text-center">
        <p>&copy; 2024 Church Name. All Rights Reserved.</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
