
import React from 'react';
import MyLineChart from './MyLineChart'; // Importing the chart
import PieArcLabel from './PieArcLabel';
import IndiaMapWithPieChart from './IndiaMapWithPieChart';
import SectorMap from './SectorMap';
import IndiaMap from './IndiaMap';
import Topservice from './Topservice';
import ServiceWidgets from './ServiceWidgets';
import ConstructionWidget from './ConstructionWidget';
import HealthcareWidget from './HealthcareWidget';
import HomeServicesWidget from './HomeServicesWidget';
import PetCareWidget from './PetCareWidget';
import ServiceOfferings from './ServiceOfferings';

const WidgetContainer = () => {
  const sectorData = {
    'Andhra Pradesh': 'health',
    'Arunachal Pradesh': 'construction',
    'Assam': 'homeService',
    'Bihar': 'petcare',
    'Chhattisgarh': 'entertainment',
    'Goa': 'event',
    
  };
  return (
    <>
      <div style={styles.widgetContainer}>
        <h3 style={styles.widgetTitle}>Main Widget</h3>
        <div style={styles.chartContainer}>
          <MyLineChart />
        </div>
      </div>

      <div style={{ ...styles.widgetContainer, ...styles.secondWidgetContainer }}>
        <h3 style={styles.widgetTitle}>Service Provider Segmentation & Demographics</h3>
        <div style={styles.innerContainer}>
          <div style={styles.chartContainer}>
            <PieArcLabel />
          </div>
          <div style={styles.chartContainer}>
            {/* <IndiaMapWithPieChart /> */}
            {/* <SectorMap/> */}
            {/* <IndiaMap/> */}
            {/* <IndiaMap data={sectorData} />; */}
          </div>
        </div>
      </div>
      
      <div style={{ ...styles.widgetContainer, ...styles.secondWidgetContainer }}>
        <h3 style={styles.widgetTitle}>Top Service Providers</h3>
        <div style={styles.innerContainer}>
          <div>
            <ConstructionWidget/>
          </div>
          <div>
            
            <HealthcareWidget/>
          </div>
          <div >
           
            <HomeServicesWidget/>
          </div>
          <div>
           
            <PetCareWidget/>
          </div>
        </div>
      </div>
      <div style={{ ...styles.widgetContainer, ...styles.secondWidgetContainer }}>
        
        <div style={styles.innerContainer}>
         <ServiceOfferings/>
         
        </div>
      </div>
    </>
  );
};

const styles = {
  widgetContainer: {
    width: '850px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  widgetTitle: {
    textAlign: 'left',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  chartContainer: {
    height: '480px',
    flex: 1, 
    margin: '10px', 
    border: '1px solid #ccc', 
    borderRadius: '8px', 
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
  },
  chartContainertop: {
    height: '330px',
    flex: 1, 
    margin: '10px', 
    paddingLeft:'13px',
    paddingTop:'13px',
    border: '1px solid #ccc', 
    borderRadius: '8px', 
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
  },
  innerContainer: {
    display: 'flex', 
    justifyContent: 'space-between', 
  },
  secondWidgetContainer: {
    display: 'flex',
    flexDirection: 'column', 
  },
};

export default WidgetContainer;
