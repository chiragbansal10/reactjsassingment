
import React from "react";
import "./Widget1.css"; 

const Widget1 = ({ mainImage, secondImage, title, amount, percentageChange }) => {
  return (
    <div className="widget1-container">
      <div className="widget1-content">
        <img src={mainImage} alt="Service Provider Icon" className="widget1-icon" />
        <div>
          <h3>{title}</h3>
          <p>{amount}</p>
        </div>
      </div>
      
      {/* Second image placed within the same container */}
      <div className="widget1-second-image-container">
        <img src={secondImage} alt="Additional Icon" className="widget1-icon" />
        <div>{percentageChange}</div>
      </div>
    </div>
  );
};

export default Widget1;
