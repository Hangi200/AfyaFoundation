import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const DashboardMembers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Added!");
    setIsModalOpen(false);
  };

  return (
    <div className="p-5 flex">
      {/* Add Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-fuchsia-700 text-white px-4 py-3 flex justify-between items-center space-x-4 rounded-md "
      >
         
        <h6 className="text-1xl text-gray-100 font-semibold">Add User</h6>
        
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <FontAwesomeIcon icon={faPlus}  className=" size-3 text-gray-100 P-5 space-y-8" />
            <h2 className="text-2xl font-bold mb-4 text-center">Add New member</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                />
              </div>
              {/*contact info */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                />
              </div>
              {/*date*/}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Baptism Date</label>
                <input
                  type="date"
                  placeholder="Enter Date"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                />
              </div>
              {/* community Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Community</label>
                <select
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                >
                  <option value="Member" className="bg-fuchsia-100">MT.Luka</option>
                  <option value="Pastor">MT.Yohana</option>
                  <option value="Prophet">MT.Raphael</option>
                  <option value="Chaplain">MT.Maria</option>
                </select>
              </div>

              {/* Role Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                >
                  <option value="Member">Member</option>
                  <option value="Pastor">Pastor</option>
                  <option value="Prophet">Prophet</option>
                  <option value="Chaplain">Chaplain</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-fuchsia-100 text-black px-5 py-2 rounded-md hover:bg-fuchsia-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-fuchsia-700 text-white px-5 py-2 rounded-md hover:bg-fuchsia-800"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardMembers;
