
import React from "react";
import './SupportWidget.css';
const SupportWidget = () => {
  return (
    <div >
      <h3>Support & Compliance</h3>
      <div className="support-header">
      <h4>Support tickets</h4>
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
        <h5>019273645</h5>
          <h5>Name of the Raiser</h5>
        </div>
      

     
      <div className="button-container">
        <button className="tech-error-button">Technical Error</button>
        <button className="healthcare-button">Healthcare</button>
      </div>
    </div>
        <h4>I am facing Technical issue during the signup process</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex laboriosam numquam, delectus fugit impedit odio maiores qui reprehenderit.</p>
        <button className="escalated-button">Status: Escalated</button>
      </div>

      {/* Second support item */}
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex laboriosam numquam, delectus fugit impedit odio maiores qui reprehenderit.</p>
        <button className="open-button">Status: Open</button>
      </div>

     
     </div>
  );
};

export default SupportWidget;
