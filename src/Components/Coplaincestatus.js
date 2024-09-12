import React from "react";
import './PendingSupportWidget.css';
const ProgressBar = ({ progress }) => {
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    );
  };
const Coplaincestatus = () => {
    return (
        <div >
         
          <div className="support-header">
            <h4>In Progress</h4>
            <button className="view-all-button">View All</button>
          </div>
          
          {/* First support item */}
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
            
              {/* Buttons */}
              <div className="button-container">
                <button className="tech-error-button">Technical Error</button>
                <button className="healthcare-button">Healthcare</button>
              </div>
            </div>
            <h4>Status: Pending</h4>
            <ProgressBar progress={50} />
            
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
            <h4>Status: Pending</h4>
            <ProgressBar progress={75} />
           
          </div>
        </div>
      );
};

export default Coplaincestatus;
