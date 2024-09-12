
import React from "react";
import construction from "./construction.png";
import profile from "./profile.png";
import './ConstructionWidget.css'; 

const ConstructionWidget = () => {
  return (
    <div className="widget-container">
      <img
        src={construction}
        alt="Construction workers looking at blueprints"
        className="widget-image"
      />
      <h5 className="widget-title">Construction Sector</h5>
      <div className="info-container">
        <div className="profile-images">
          <img src={profile} alt="User 1" className="profile-image" />
          <img src={profile} alt="User 2" className="profile-image" />
        </div>
        <div className="info-item">
          <span className="info-number">+200</span>
          <span className="info-percentage">+11.02%</span>
        </div>
      </div>
    </div>
  );
};

export default ConstructionWidget;
