import React from "react";

const ActionButtons = () => {
  return (
    <div className="action-buttons-container">
      <button className="main-button">📅 Calendar</button>
      <button className="main-button">Location</button>
      <button className="main-button">Status</button>
      <button className="main-button primary-button">Assign Order</button>
      <button className="main-button primary-button">Add New Service Provider</button>
    </div>
  );
};

export default ActionButtons;
