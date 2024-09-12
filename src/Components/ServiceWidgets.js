import React from "react";
import ConstructionWidget from "./ConstructionWidget";
import HealthcareWidget from "./HealthcareWidget";
import HomeServicesWidget from "./HomeServicesWidget";
import PetCareWidget from "./PetCareWidget";

const ServiceWidgets = () => {
  return (
    <div className="p-8">
      <h4 className="text-2xl font-bold mb-6">Top Service Providers</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"> 
        <ConstructionWidget />
        <HealthcareWidget />
        <HomeServicesWidget />
        <PetCareWidget />
      </div>
    </div>
  );
};

export default ServiceWidgets;
