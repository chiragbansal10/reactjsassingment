import React from "react";

const HeaderIcons = () => {
  return (
    <>
      <button className="icon-button">🔔</button>
      <button className="icon-button">💬</button>
      <button className="icon-button">⚙️</button>
      <div className="profile-section">
        <img src="profile-pic-url" alt="Profile" className="profile-pic" />
      </div>
    </>
  );
};

export default HeaderIcons;
