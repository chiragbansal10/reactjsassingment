import React from "react";

const ComplianceWidget = () => {
  return (
    <div>
      <div className="support-header">
            <h4>In Progress</h4>
            <button className="view-all-button">View All</button>
          </div>
          
      <div className="widget-item">
      <div className="profile-section">
        <img
          className="profile-pic"
          src="https://via.placeholder.com/40"
          alt="Profile"
        />
        <div className="profile-name">
          <h4>John Doe</h4>
        </div>
      

      {/* Buttons */}
      <div className="button-container">
        <button className="tech-error-button">Technical Error</button>
        <button className="healthcare-button">Healthcare</button>
      </div>
    </div>
      <h4>I am facing Technical issue during the signup process</h4>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex laboriosam numquam, delectus, fugit impedit odio maiores qui reprehenderit, officiis molestiae quis vel? Voluptatem temporibus assumenda optio perspiciatis expedita vel.</p>
    <button className="open-button">Status: Open</button>
      </div>
      <div className="widget-item">
      <div className="profile-section">
        <img
          className="profile-pic"
          src="https://via.placeholder.com/40"
          alt="Profile"
        />
        <div className="profile-name">
          <h4>John Doe</h4>
        </div>
      

     
      <div className="button-container">
        <button className="tech-error-button">Technical Error</button>
        <button className="healthcare-button">Healthcare</button>

      </div>
    </div>
      <h4>I am facing Technical issue during the signup process</h4>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex laboriosam numquam, delectus, fugit impedit odio maiores qui reprehenderit, officiis molestiae quis vel? Voluptatem temporibus assumenda optio perspiciatis expedita vel.</p>
    <button className="open-button">Status: Open</button>
      </div>
     
    </div>
  );
};

export default ComplianceWidget;
