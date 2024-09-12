import React from "react";
import ToggleMenu from "./ToggleMenu";
import SearchBar from "./SearchBar";
import HeaderIcons from "./HeaderIcons";
import MainLeftButtons from "./MainLeftButtons";
import MainRightButtons from "./MainRightButtons";
import "../App.css";
import ActionButtons from "./ActionButtons";
import SupportWidget from "./SupportWidget";
import ComplianceWidget from "./ComplianceWidget";
import PendingSupportWidget from "./PendingSupportWidget";
import Solved from "./Solved";
import Coplaincestatus from "./Coplaincestatus";
import ThreeWidgets from "./ThreeWidgets";
// import ToggleMenu from "./ToggleMenu";
import MultiLineChart from "./MultiLineChart"
import MyLineChart from "./MyLineChart";
import WidgetContainer from "./WidgetContainer";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
     
      <header className="dashboard-header">
        <div className="header-left">
          <ToggleMenu />
        </div>
        
        <div className="header-center">
          <SearchBar />
        </div>
        
        <div className="header-right">
          <HeaderIcons />
        </div>
      </header>

     
      <main className="dashboard-main">
        <div className="left-section">
          <ActionButtons />
          <ThreeWidgets />
          
      <WidgetContainer />
    
         
        </div>

        
        <div className="right-section widget-container">
          <SupportWidget />
          <ComplianceWidget />
          <PendingSupportWidget/>
          <Solved/>
          <Coplaincestatus/>
          <button className="raise-ticket-button">Raise a Ticket</button>
        </div>
        
      </main>
      
    </div>
  );
}
;
export default Dashboard;
