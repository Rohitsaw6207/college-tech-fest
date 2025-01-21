// Event.js
import React from "react";
import Card from "./Card";
import Footer from '../Footer';
import "./css/Event.css";
import "./css/index.css";
import Background from "./Background";
import Background2 from "./Background2";
import NFS_MOSTWANTED from "../images/eventps/Nfs.jpg";
import eFootball from "../images/eventps/eFOOTBALL.jpg"
const Innovation = () => {
  return (
    <div><Background />
    <Background2 />
       <div className="pages"> 
     <div className="segment11">
        <div className="segment11-1">
        <h1 className="Events-title">EVENT :: GAMING</h1>

    <div className="Events-container">
      <div className="cardEvent__grid">
        <Card
          image={NFS_MOSTWANTED}
          title="NFS-MOST WANTED"
          description="SOLO PATICIPATION, GAMING"
          link="/NFS_MOSTWANTED"  // unique link for this card
        />
        <Card
          image={eFootball}
          title="E FOOTBALL"
          description="SOLO PATICIPATION, GAMING"
          link="/FIFA"  // unique link for this card
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