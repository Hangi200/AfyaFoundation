import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons'
import NewUser from './NewUser';

function DashboardMembers() {
 const [isOpen, setIsOpen] = useState(false);
   const [selectedFilter, setSelectedFilter] = useState("filter");
   const filters = ["All", "Members", "Pastors", "Prophets", "chaplain"];
   const handleFilterChange = (filter) => {
     setSelectedFilter(filter);
     setIsOpen(false);  // Close menu after selecting
     console.log(`Selected Filter: ${filter}`);
   };

   
   const data = [
     {
       id: 1,  
       name: "John Doe", 
       contact: "+255 756 544 359",
       baptism: "7/05/2023",
       role: "Pastor", 
       status: "Active",
       community: "MT.Luka",
       profilePic: "https://i.pravatar.cc/150?img=18",
     },
     {
       id: 2, 
       name: "Anna Doe",
       contact: "+255 756 544 359", 
       baptism: "7/05/2023",
       role: "Chaplain", 
       status: "Inactive",
       community: "MT.Paul",
       profilePic:"https://i.pravatar.cc/150?img=32"
     },
     {
       id: 3, 
       name: "Maria John",
       contact: "+255 756 544 359",
       baptism: "7/05/2023", 
       role: "Member", 
       status: "Active",
       community: "MT.Raphael",
       profilePic:" https://i.pravatar.cc/150?img=5"
     },
     {
       id: 4, 
       name: "Moni Tomas",
       contact: "+255 756 544 359",
       baptism: "7/05/2023", 
       role: "Prophet", 
       status: "Pending",
       community: "MT.Yohana",
       profilePic:" https://i.pravatar.cc/150?img=23"
     },
     {
       id: 5, 
       name: "Tom Doe",
       contact: "+255 756 544 359", 
       baptism: "7/05/2023",
       role: "Prophet", 
       status: "Inactive",
       community: "MT.Yohana",
       profilePic:" https://i.pravatar.cc/150?img=57"
     },
     {
       id: 6, 
       name: "Jane John", 
       contact: "+255 756 544 359",
       baptism: "7/05/2023",
       role: "Prophet", 
       status: "Active",
       community: "MT.Yohana",
       profilePic:"https://i.pravatar.cc/150?img=35"
     },
 
   ];
   return (
     <div className=' p-3 bg-white rounded-lg shadow-md border-l-4'>
     <div className='p-3 flex justify-between space-x-5  items-center '>
    <div className="head">
            <h1 className="text-xl text-gray-900 font-semibold">All Members</h1>
            
            </div>
 
            <div>
            <div className="relative flex items-center space-x-5">
              
              {/* Add Button */}
                <NewUser />

       {/* Filter Button */}
       <button 
         onClick={() => setIsOpen(!isOpen)} 
         className=" border border-fuchsia-700 p-5 h-10 flex bg-gray-50 text-gray-600 justify-between px-4 py-6 rounded-lg  transition duration-200 focus:outline-none  items-center space-x-3"
       >
         <span>{selectedFilter}</span>
          <FontAwesomeIcon icon={faFilter}  className=" size-3 text-fuchsia-700  " />
       </button>
 
       {/* Filter Dropdown */}
       {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
          <ul className="text-gray-700">
            {filters.map((filter) => (
              <li 
                key={filter}
                className={`cursor-pointer px-4 py-2 hover:bg-fuchsia-100 ${selectedFilter === filter ? "bg-fuchsia-200 font-semibold" : ""}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      )}
        
     </div>
  </div>
  </div>
 
     <div className='overflow-x-auto'>
       <table className='min-w-full p-5 bg-white border border-gray-50 shadow-lg rounded-lg'> 
         {/*table head*/}
         <thead className='bg-white-700 text-gray p-5 '>
           <tr>
             <th className='py-3 px-4 text-left font-medium '>ID</th>
             <th className="py-2 px-4 text-left font-medium">Profile</th>
             <th className="py-2 px-4 text-left font-medium">Contact Info</th>
             <th className="py-2 px-4 text-left font-medium">Baptism Date</th>
             <th className='py-3 px-4 text-left font-medium'>Community</th>
             <th className='py-3 px-4 text-left font-medium'>Role</th>
             <th className='py-3 px-4 text-left font-medium'>Status</th>
           </tr>
         </thead>
        {/*table body*/}
        <tbody>
         {data.map((item,index) =>(
           <tr
           key={item.id}
               className={`border-b border-gray-200 ${
                 index % 2 === 0 ? "bg-fuchsia-50" : "bg-white"
               } `}
             >
               <td className="py-2 px-4 font-medium text-gray-600">{item.id}</td>
               {/* Profile Picture */}
               <td className="py-2 px-4 flex items-center space-x-2 ">
                 <img
                   src={item.profilePic || "https://via.placeholder.com/50"} // Default avatar
                   alt={item.name}
                   className="w-9 h-9 rounded-full border-2 border-fuchsia-200 shadow-lg  object-cover"
                 /> <span className="py-2 px-4 font-medium text-gray-600 text-sm">{item.name}</span>
               </td>
               <td className="py-2 px-4 font-medium text-gray-600 text-sm">{item.contact}</td>
               <td className="py-2 px-4 font-medium text-gray-600 text-sm">{item.baptism}</td>
               <td className="py-2 px-4 font-medium text-gray-600 text-sm">{item.community}</td>
               <td className="py-2 px-4 font-medium text-gray-600 text-sm">{item.role}</td>
               <td className={`py-2 px-4 font-medium text-gray-600 text-sm" ${item.status === "Active" ? "text-green-600" : item.status === "Inactive" ? "text-red-600" : "text-yellow-400"}`}>
                 {item.status}
               </td>
             </tr>
 
         ))}
 
        </tbody>
       </table>
     </div>
 </div>  
   )
}

export default DashboardMembers