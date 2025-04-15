import React from 'react'
import bible from "../assets/Church_Bible.jpg";
import morning from "../assets/Church_Flyer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

function DashboardEvents() {
  return (
    <div className=" mx-auto bg-white rounded-lg shadow-md p-4">
      <div className='p-1 flex justify-between items-center '>
  <h2 className="text-xl text-gray-900 font-semibold font-bold mb-4">Ongoing Events</h2>
  <button className=" p-3 border border-fuchsia-700 bg-gray-50 text-gray-600 justify-between px-5 py-2 rounded-lg  transition duration-200 focus:outline-none flex items-center space-x-5" > 
          <p className='text-fuchsia-900 text-medium font'>View All</p>
        </button>
  </div>
  <div className="grid grid-cols-2 gap-4">
    {/* First Event Card */}
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <img src={bible} alt="Event 1" className="w-full h-40 object-cover rounded-lg mb-3" />
      <div className='space-y-2'>
      <h3 className="text-lg font-semibold">Bible Study</h3>
      <div className='flex space-x-5'>
        <span><h6 className="text-gray-900 text-bold font-semibold">Date:</h6></span>
        <p className="text-gray-600 text-bold">2025-04-21</p>
        </div>
        <div className='flex space-x-5'>
        <h6 className="text-gray-900 text-bold font-semibold">Time:</h6>
        <p className="text-gray-600 text-bold" >10:00 AM</p>
        </div>
        <div className='flex  justify-between items-center'>
        <div className='flex space-x-5 '>
        <h6 className="text-gray-900 text-bold font-semibold">Location:</h6>
        <p className="text-gray-600 text-sm" >Church Hall</p>
        </div>
        <div className='space-x-3'>
        <span className="font-medium text-fuchsia-700 cursor-pointer">view Event</span>
        <FontAwesomeIcon icon={faArrowRight} className=" text-fuchsia-700 cursor-pointer" />
        </div>
        </div>
        </div>
    </div>

    {/* Second Event Card */}
    <div className="bg-gray-100 p-4 rounded-lg shadow space-x-3">
      <img src={morning} alt="Event 2" className="w-full h-40 object-cover rounded-lg mb-3" />
      <div className='space-y-2'>
      <h3 className="text-lg font-semibold">Morning Glory</h3>
      <div className='flex space-x-5 '>
        <span><h6 className="text-gray-900 text-bold font-semibold">Date:</h6></span>
        <p className="text-gray-600 text-bold">2025-04-21</p>
        </div>
        <div className='flex space-x-5 '>
        <h6 className="text-gray-900 text-bold font-semibold">Time:</h6>
        <p className="text-gray-600 text-bold" >10:00 AM</p>
        </div>
        <div className='flex  justify-between items-center'>
        <div className='flex space-x-5 '>
        <h6 className="text-gray-900 text-bold font-semibold">Location:</h6>
        <p className="text-gray-600 text-bold" >Church Hall</p>
        </div>
        <div className='space-x-3'>
        <span className="font-medium text-fuchsia-700 cursor-pointer">view Event</span>
        <FontAwesomeIcon icon={faArrowRight} className=" text-fuchsia-700 cursor-pointer" />
        </div>
        </div>
        </div>
    </div>
  </div>

  
</div>




  )
}

export default DashboardEvents