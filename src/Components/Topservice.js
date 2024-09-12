import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import construction from "./construction.png";
import healthcare from "./healthcare.png";
import homeservice from "./homeservice.png";
import petcare from "./petcare.png";
import profile from "./profile.png";

const Topservice = () => {
  return (
    <div className="p-8">
      <h4 className="text-2xl font-bold mb-6">Top Service Providers</h4>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src={construction}
            alt="Construction workers looking at blueprints"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h5 className="text-lg font-semibold mt-4">Construction Sector</h5>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faUsers} className="text-gray-500" />
            <span className="ml-2 text-gray-500">200</span>
            <span className="ml-auto text-green-500 font-semibold">+11.02%</span>
          </div>
          <div className="flex mt-2">
            <img src={profile} alt="User 1" className="w-6 h-6 rounded-full" />
            <img
              src={profile}
              alt="User 2"
              className="w-6 h-6 rounded-full -ml-2"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src={healthcare}
            alt="Healthcare workers"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h5 className="text-lg font-semibold mt-4">Health Care Sector</h5>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faUsers} className="text-gray-500" />
            <span className="ml-2 text-gray-500">100</span>
            <span className="ml-auto text-green-500 font-semibold">+10.02%</span>
          </div>
          <div className="flex mt-2">
            <img src={profile} alt="User 1" className="w-6 h-6 rounded-full" />
            <img
              src={profile}
              alt="User 2"
              className="w-6 h-6 rounded-full -ml-2"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src={homeservice}
            alt="Home service workers"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h5 className="text-lg font-semibold mt-4">Home Services Sector</h5>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faUsers} className="text-gray-500" />
            <span className="ml-2 text-gray-500">100</span>
            <span className="ml-auto text-green-500 font-semibold">+9%</span>
          </div>
          <div className="flex mt-2">
            <img src={profile} alt="User 1" className="w-6 h-6 rounded-full" />
            <img
              src={profile}
              alt="User 2"
              className="w-6 h-6 rounded-full -ml-2"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src={petcare}
            alt="Pet care workers"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h5 className="text-lg font-semibold mt-4">Pet Care Sector</h5>
          <div className="flex items-center mt-2">
            <FontAwesomeIcon icon={faUsers} className="text-gray-500" />
            <span className="ml-2 text-gray-500">100</span>
            <span className="ml-auto text-green-500 font-semibold">+5%</span>
          </div>
          <div className="flex mt-2">
            <img src={profile} alt="User 1" className="w-6 h-6 rounded-full" />
            <img
              src={profile}
              alt="User 2"
              className="w-6 h-6 rounded-full -ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topservice;