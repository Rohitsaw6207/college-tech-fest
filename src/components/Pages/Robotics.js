// Event.js
import React from "react";
import Card from "./Card";
import Footer from '../Footer';
import "./css/Event.css";
import "./css/index.css";
import Background from "./Background";
import Background2 from "./Background2";
import CHASE_THE_MAZE from "../images/eventps/chazethemaize.jpg";
import ROBO_FIFA from "../images/eventps/RoboFIFA.jpg";
import ROBO_WAR from "../images/eventps/RoboWar.jpg";

const Innovation = () => {
  return (
    <div><Background />
    <Background2 />
       <div className="pages"> 
     <div className="segment11">
        <div className="segment11-1">
        <h1 className="Events-title">COMPITITION :: ROBOTICS</h1>
    <div className="Events-container">
      <div className="cardEvent__grid">
        <Card
          image={ROBO_FIFA}
          title="ROBO FIFA"
          description="TEAM:: (2-4), ROBOTICS"
          link="/ROBO_FIFA"  // unique link for this card
        />
        <Card
          image={ROBO_WAR}
          title="ROBO WAR"
          description="TEAM:: (2-4), ROBOTICS"
        link="/ROBO_WAR"  // unique link for this card
        />
        <Card
          image={CHASE_THE_MAZE}
          title="CHASE THE MAZE"
          description="TEAM:: (2), ROBOTICS"
          link="/CHASE_THE_MAZE"  // unique link for this card
        />
      </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
  </div>
  );
};

export default Innovation;