import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChurch, faCross, faHandHoldingDollar, faSortDown, faTableColumns, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import DashboardCard from "./DashboardCard";
import { faUsers, faCalendarCheck,faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DashboardUser from "./DashboardUser";
import DashboardMembers from "./DashboardMembers";
import DashboardEvents from "./DashboardEvents";

const ChurchDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate(true);
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const filters = ["My Profile", "Log Out"];
  const [selectedFilter, setSelectedFilter] = useState();
  const handleFilterChange = (filter) => {
    setSelectedFilter();
    setOpen(false);  // Close menu after selecting
    console.log(`Selected Filter: ${filter}`);
  };
 
  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside
        className={`min-h-screen bg-fuchsia-800 text-white p-5 space-y-6 transition-all duration-300  ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Toggle Button */}
        
          <FontAwesomeIcon icon={faBars} className="absolute top-2 left-5 justify-center align-center px-40 text-black text-2xl"
           onClick={toggleSidebar}  />
      

        {/* Logo Section */}
        <div className="flex items-center space-x-2 space-y-4">
          <FontAwesomeIcon icon={faChurch} className="size-10" />
          {isOpen && (
            <h6 className="text-1xl space-x-5 sm:text-1xl font-semibold">ST. Raphael</h6>
          )}
        </div>

        {/* Navigation */}
        <nav className="py-10">
          <ul className="space-y-4">
            <div
              className="cursor-pointer hover:bg-fuchsia-600 p-2 rounded-lg flex items-center space-x-3"
              onClick={() => setActivePage("dashboard")} 
            >
              <FontAwesomeIcon icon={faTableColumns} className="size-5" />
              {isOpen && <span className="font-semibold">Dashboard</span>}
            </div>
            <div
              className="cursor-pointer hover:bg-fuchsia-600 p-2 rounded-lg flex items-center space-x-3"
              onClick={() => setActivePage("dioces")} 
            >
              <FontAwesomeIcon icon={faCross} className="size-5" />
              {isOpen && <span className="font-semibold">Diocese Management</span>}
            </div>

            <div
              className="cursor-pointer hover:bg-fuchsia-600 p-2 rounded-lg flex items-center space-x-3"
              onClick={() => setActivePage("members")}  
            >
              <FontAwesomeIcon icon={faUsers} className="size-5" />
              {isOpen && <span className="font-medium">Members</span>}
            </div>

            <div
              className="cursor-pointer hover:bg-fuchsia-600 p-2 rounded-lg flex items-center space-x-3"
              onClick={() => setActivePage("events")}  
            >
              <FontAwesomeIcon icon={faCalendarCheck} className="size-5" />
              {isOpen && <span className="font-medium">Events</span>}
            </div>

            <div
              className="cursor-pointer hover:bg-fuchsia-600 p-2 rounded-lg flex items-center space-x-3"
              onClick={() => setActivePage("donations")}  
            >
              <FontAwesomeIcon icon={faHandHoldingDollar} className="size-5" />
              {isOpen && <span className="font-medium">Donations</span>}
            </div>
          </ul>
        </nav>
      </aside>
     
      {/* Main Content */}
      <main className="flex-1 p-6 ">
        
      <div className="  text-gray-800 flex flex-col ">
      {/* Back Arrow */}
      <div className=" flex items-center space-x-2 "
           >
        <FontAwesomeIcon icon={faArrowLeft} className=" text-fuchsia-700 cursor-pointer" onClick={() => navigate("/")} />
        <span className="text-sm font-medium">Home</span>
      </div>
      </div>
        {activePage === "dashboard" && 
        <>
       
        <div className="head p-1 flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold">Welcome Back Stella!</h1>
        <div className="flex space-x-5 justify-between items-center ">
        <FontAwesomeIcon icon={faBell}  className=" size-5 text-fuchsia-700 P-5" />
        <div className="flex items-center space-x-3  ">
          <div className="flex items-center justify-between w-10 h-10 shadow-md rounded-full border-2 border-black-200 object-cover bg-white">
          <img src=" https://i.pravatar.cc/150?img=5" alt="" className="w-10  rounded-full shadow-lg object-cover" />
          </div>
      <span className=" grid ">
        <h6  className=" text-gray-800 font-semibold">Stella Hangi</h6>
        <p className="text-fuchsia-700 font-medium text-sm">Admin</p>
        </span> 
        <span className="p-2">{selectedFilter}</span>
        <span><FontAwesomeIcon icon={faSortDown} onClick={() => setOpen(!Open)}  className=" size-3 text-fuchsia-700 P-5 cursor-pointer" /></span>
        {Open && (
        <div className="absolute  w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
          <ul className="text-gray-700">
            {filters.map((filter) => (
              <li 
                key={filter}
                className={`cursor-pointer px-3 py-2 p-5 hover:bg-fuchsia-100 ${selectedFilter === filter ? "bg-fuchsia-200 font-semibold" : ""}`}
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
      <DashboardCard 
        title="Total Users" 
        value="1,245" 
        icon={<FontAwesomeIcon icon={faUsers} />} 
        color="border-gray-200"
      />

<DashboardCard 
        title="Total Events" 
        value="1,145" 
        icon={<FontAwesomeIcon icon={faCalendarCheck} />} 
        color="border-gray-200"
      />

<DashboardCard 
        title="Total Donation" 
        value="1,145" 
        icon={<FontAwesomeIcon icon={faHandHoldingDollar} />} 
        color="border-gray-200"
      />

<DashboardCard 
        title="Total Budgets" 
        value="1,245" 
        icon={<FontAwesomeIcon icon={faWallet} />} 
        color="border-gray-200"
      />
      </div>
        
    {/* <div className="  flex items-center space-between p-5 bg-white rounded-lg shadow-md border-l-4"> */}
<DashboardUser />
    {/* </div> */}
  

        
        </>
        }

        {/*members page*/}
        {activePage === "members" && 
        <>
        <div className="head p-1 flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold">Church Members</h1>
        <div className="flex space-x-5 justify-between items-center ">
        <FontAwesomeIcon icon={faBell}  className=" size-5 text-fuchsia-700 P-5" />
        <div className="flex items-center space-x-3  ">
          <div className="flex items-center justify-between w-10 h-10 shadow-md rounded-full border-2 border-black-200 object-cover bg-white">
          <img src=" https://i.pravatar.cc/150?img=5" alt="" className="w-10  rounded-full shadow-lg object-cover" />
          </div>
      <span className=" grid ">
        <h6  className=" text-gray-800 font-semibold">Stella Hangi</h6>
        <p className="text-fuchsia-700 font-medium text-sm">Admin</p>
        </span> 
        <span className="p-2">{selectedFilter}</span>
        <span><FontAwesomeIcon icon={faSortDown} onClick={() => setOpen(!Open)}  className=" size-3 text-fuchsia-700 P-5 cursor-pointer" /></span>
        {Open && (
        <div className="absolute  w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
          <ul className="text-gray-700">
            {filters.map((filter) => (
              <li 
                key={filter}
                className={`cursor-pointer px-3 py-2 p-5 hover:bg-fuchsia-100 ${selectedFilter === filter ? "bg-fuchsia-200 font-semibold" : ""}`}
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

        {/*numbers of members*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
      <DashboardCard 
        title="Total Members" 
        value="1,245" 
        icon={<FontAwesomeIcon icon={faUsers} className="text-fuchsia-700" />} 
        color="border-gray-200"
      />

<DashboardCard 
        title="Active Members" 
        value="945" 
        icon={<FontAwesomeIcon icon={faUsers} className="text-green-600"/>} 
        color="border-gray-200"
      />

<DashboardCard 
        title="InActive Members" 
        value="100" 
        icon={<FontAwesomeIcon icon={faUsers} className="text-red-600" />} 
        color="border-gray-200"
      />

<DashboardCard 
        title="Pending Members" 
        value="200" 
        icon={<FontAwesomeIcon icon={faUsers} className="text-yellow-400" />} 
        color="border-gray-200"
      />
      </div>
      <DashboardMembers />
        </>
        }

        {activePage === "events" &&
         <>
         <div className="head p-1 flex justify-between items-center border-b border-gray-300">
         <h1 className="text-2xl font-semibold">Church Events</h1>
         <div className="flex space-x-5 justify-between items-center ">
         <FontAwesomeIcon icon={faBell}  className=" size-5 text-fuchsia-700 P-5" />
         <div className="flex items-center space-x-3  ">
           <div className="flex items-center justify-between w-10 h-10 shadow-md rounded-full border-2 border-black-200 object-cover bg-white">
           <img src=" https://i.pravatar.cc/150?img=5" alt="" className="w-10  rounded-full shadow-lg object-cover" />
           </div>
       <span className=" grid ">
         <h6  className=" text-gray-800 font-semibold">Stella Hangi</h6>
         <p className="text-fuchsia-700 font-medium text-sm">Admin</p>
         </span> 
         <span className="p-2">{selectedFilter}</span>
         <span><FontAwesomeIcon icon={faSortDown} onClick={() => setOpen(!Open)}  className=" size-3 text-fuchsia-700 P-5 cursor-pointer" /></span>
         {Open && (
         <div className="absolute  w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
           <ul className="text-gray-700">
             {filters.map((filter) => (
               <li 
                 key={filter}
                 className={`cursor-pointer px-3 py-2 p-5 hover:bg-fuchsia-100 ${selectedFilter === filter ? "bg-fuchsia-200 font-semibold" : ""}`}
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
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
      <DashboardCard 
        title="Total Events" 
        value="1,245" 
        icon={<FontAwesomeIcon icon={faCalendarCheck} className="text-fuchsia-700" />} 
        color="border-gray-200"
      />

<DashboardCard 
        title="Attended Events" 
        value="945" 
        icon={<FontAwesomeIcon icon={faCalendarCheck} className="text-green-600"/>} 
        color="border-gray-200"
      />

<DashboardCard 
        title="Not Attended Events" 
        value="100" 
        icon={<FontAwesomeIcon icon={faCalendarCheck} className="text-red-600" />} 
        color="border-gray-200"
      />

<DashboardCard 
        title="Ongoing Events" 
        value="200" 
        icon={<FontAwesomeIcon icon={faCalendarCheck} className="text-yellow-400" />} 
        color="border-gray-200"
      />
      </div>
      <DashboardEvents />
         </>
         }
        {activePage === "donations" &&
         <>
         <div className="head p-1 flex justify-between items-center border-b border-gray-300">
         <h1 className="text-2xl font-semibold">Donation & Finance</h1>
         <div className="flex space-x-5 justify-between items-center ">
         <FontAwesomeIcon icon={faBell}  className=" size-5 text-fuchsia-700 P-5" />
         <div className="flex items-center space-x-3  ">
           <div className="flex items-center justify-between w-10 h-10 shadow-md rounded-full border-2 border-black-200 object-cover bg-white">
           <img src=" https://i.pravatar.cc/150?img=5" alt="" className="w-10  rounded-full shadow-lg object-cover" />
           </div>
       <span className=" grid ">
         <h6  className=" text-gray-800 font-semibold">Stella Hangi</h6>
         <p className="text-fuchsia-700 font-medium text-sm">Admin</p>
         </span> 
         <span className="p-2">{selectedFilter}</span>
         <span><FontAwesomeIcon icon={faSortDown} onClick={() => setOpen(!Open)}  className=" size-3 text-fuchsia-700 P-5 cursor-pointer" /></span>
         {Open && (
         <div className="absolute  w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
           <ul className="text-gray-700">
             {filters.map((filter) => (
               <li 
                 key={filter}
                 className={`cursor-pointer px-3 py-2 p-5 hover:bg-fuchsia-100 ${selectedFilter === filter ? "bg-fuchsia-200 font-semibold" : ""}`}
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
         </>
         }
         {activePage === "dioces" &&
         <>
         <div className="head p-1 flex justify-between items-center border-b border-gray-300">
         <h1 className="text-2xl font-semibold">Diocese Management</h1>
         <div className="flex space-x-5 justify-between items-center ">
         <FontAwesomeIcon icon={faBell}  className=" size-5 text-fuchsia-700 P-5" />
         <div className="flex items-center space-x-3  ">
           <div className="flex items-center justify-between w-10 h-10 shadow-md rounded-full border-2 border-black-200 object-cover bg-white">
           <img src=" https://i.pravatar.cc/150?img=5" alt="" className="w-10  rounded-full shadow-lg object-cover" />
           </div>
       <span className=" grid ">
         <h6  className=" text-gray-800 font-semibold">Stella Hangi</h6>
         <p className="text-fuchsia-700 font-medium text-sm">Admin</p>
         </span> 
         <span className="p-2">{selectedFilter}</span>
         <span><FontAwesomeIcon icon={faSortDown} onClick={() => setOpen(!Open)}  className=" size-3 text-fuchsia-700 P-5 cursor-pointer" /></span>
         {Open && (
         <div className="absolute  w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
           <ul className="text-gray-700">
             {filters.map((filter) => (
               <li 
                 key={filter}
                 className={`cursor-pointer px-3 py-2 p-5 hover:bg-fuchsia-100 ${selectedFilter === filter ? "bg-fuchsia-200 font-semibold" : ""}`}
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
         </>
         }
      </main>
    </div>
  );
};

export default ChurchDashboard;