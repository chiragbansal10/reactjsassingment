
import React from 'react';
import './ServiceOfferings.css'; 
import PieArcLabelservice from './PieArcLabelservice';
import LineChartComponent from './LineChartComponent';

const ServiceOfferings = () => {
  return (
    <div className="chart-container">
      <div className="chart-title">Service Offerings</div>
      <div className="chart-wrapper"> 
        <div className="chart-item">
          <PieArcLabelservice />
        </div>
        <div className="chart-item">
          <LineChartComponent />
        </div>
      </div>
      <div className="chart-legend">
        <div>
          <span className="legend-active"></span>
          Number of active services
        </div>
        <div>
          <span className="legend-new"></span>
          New services added
        </div>
        <div>
          <span className="legend-removed"></span>
          Services removed
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferings;
