import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import petcare from "./petcare.png";
import profile from "./profile.png";

const PetCareWidget = () => {
  return (
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
        <img src={profile} alt="User 2" className="w-6 h-6 rounded-full -ml-2" />
      </div>
    </div>
  );
};

export default PetCareWidget;
