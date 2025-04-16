import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for routing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChildren, faChurch, faGamepad, faNotesMedical, faPeopleRoof, faPersonDigging, faShieldHeart, faStaffSnake, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import morning from "./assets/mainlogo.png";
import health from "./assets/health1.jpg";
import health1 from "./assets/healthcare.png"
import health2 from "./assets/health2.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';




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
      Donate Now
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
      See Our Projects
    </a>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-16 bg-white px-16">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">About Us</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Afya Ustawi Foundation was established in 2025, this is a non-governmental organization that empowers the community in gaining more access toward matters conserning their health and social welfare,
           The organization  operates in Dodoma and Dar es salaam, Afya Ustawi 
          Foundation is nurtured by the late Mwl Julius Nyerere’s philosophy describing three enemies of Tanzania being Poverty, Diseases and Ignorance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The foundation believes that to achieve a healthier community it is necessary to address all 
          three enemies as one can be a causative and consequence of the other and the circle goes on. 
           </p>
        </div>
        <img src={health1} alt="" />
        </div>
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-5 space-y-2 ">
            <div className="bg-white shadow-lg rounded-lg p-5 items-center">
              <h4 className="text-xl font-semibold text-center mb-4 text-green-950">Our Mission</h4>
              <p className="text-gray-700 text-center">empowering people to gain more control over their health” 
                we serve to empower communities with resources 
                and skills that enable them to live heathier life styles through sustainable and community 
                driven initiatives, bridging the gap between ignorance, diseases, and poverty.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-center text-green-950">Our Vision</h4>
              <p className="text-gray-700 text-center">being the leading force in creating a future where people are empowered to live healthier, 
                more fulfilling lives.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4 text-center text-green-950">Our Values</h4>
              <p className="text-gray-700 text-center">.Quality of care, financial responsibility, Empathy</p>
              <span><p className="text-gray-700 text-center">.learning, Intergrity, inclusion, Resilience, Health sustainability.</p></span>
            </div>
            </div>

            {/* our history */}
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img src={health2} alt="" />
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Our History</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
          
Magreth is a founder and Managing Director of Afya Ustawi Foundation. 
By addressing the unique challenges faced by households in Dodoma and Dar es salaam Tanzania many of whom
live below the poverty line and limited access to medical services, missing opportunity to fulfilling lives.
She begun her mission to  seeking to create opportunities for healthier, more informed, and resilient
communities.

          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
          So she developed the passion of being an ambassador for healthier communities for people living with disabilities and most vulnerable communities, taking
cognizant of the suffering of households in Dodoma and Dar es salaam Tanzania, who live below the poverty
line; yet, compounded by numerous needs to reach full potential and live fulfilling lives.
 
           </p>
        </div>
       
        </div>
            
           
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Our Projects</h3>
          <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={20}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
          <SwiperSlide>
    <div className="bg-white shadow-lg rounded-lg p-5 px-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 flex justify-center items-center bg-green-50 shadow-xl rounded-full mb-3">
          <FontAwesomeIcon icon={faChildren} className="text-3xl text-green-800 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold mb-3 text-green-950">Rafiki Wa Kweli</h4>
        <p className="text-gray-700">Rafiki wa kweli donate to support CBR networks.</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div className="bg-white shadow-lg rounded-lg p-5 px-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 flex justify-center items-center bg-green-50 shadow-xl rounded-full mb-3">
          <FontAwesomeIcon icon={faPersonDigging} className="text-3xl text-green-800 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold mb-3 text-green-950">Kazi Ni Afya</h4>
        <p className="text-gray-700">work integration to mentor health empowerment and health education.</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <div className="bg-white shadow-lg rounded-lg p-5 px-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 flex justify-center items-center bg-green-50 shadow-xl rounded-full mb-3">
          <FontAwesomeIcon icon={faChildren} className="text-3xl text-green-800 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold mb-3 text-green-950">Ndugu Tusaidiane</h4>
        <p className="text-gray-700">Empowering local community to a local enterprise that will support most vulnerable groups in the community,
          a road to a self-sustainable community.</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-white shadow-lg rounded-lg p-5 px-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 flex justify-center items-center bg-green-50 shadow-xl rounded-full mb-3">
          <FontAwesomeIcon icon={faShieldHeart} className="text-3xl text-green-800 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold mb-3 text-green-950">Pendezesha</h4>
        <p className="text-gray-700">Healthy environment support human health and reduce risk of diseases.</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-white shadow-lg rounded-lg p-5 px-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 flex justify-center items-center bg-green-50 shadow-xl rounded-full mb-3">
          <FontAwesomeIcon icon={faGamepad} className="text-3xl text-green-800 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold mb-3 text-green-950">Michezo Advocacy</h4>
        <p className="text-gray-700">Advocating for health issue vie sports and games.</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-white shadow-lg rounded-lg p-5 px-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 flex justify-center items-center bg-green-50 shadow-xl rounded-full mb-3">
          <FontAwesomeIcon icon={faPeopleRoof} className="text-3xl text-green-800 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold mb-3 text-green-950">University Youth Club Mentorships</h4>
        <p className="text-gray-700">Mentoring young professions.</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-white shadow-lg rounded-lg p-5 px-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 flex justify-center items-center bg-green-50 shadow-xl rounded-full mb-3">
          <FontAwesomeIcon icon={faWarehouse} className="text-3xl text-green-800 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold mb-3 text-green-950">Capacity Building</h4>
        <p className="text-gray-700">For health care workers on public health .</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-white shadow-lg rounded-lg p-5 px-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 flex justify-center items-center bg-green-50 shadow-xl rounded-full mb-3">
          <FontAwesomeIcon icon={faNotesMedical} className="text-3xl text-green-800 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold mb-3 text-green-950">Healthy Education</h4>
        <p className="text-gray-700">Educating communities for healthier tomorrows.</p>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
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
        <p>&copy; 2025 Afya Ustawi Foundation. All Rights Reserved.</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
