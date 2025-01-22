// Event.js
import React from "react";
import Card from "./Card";
import Footer from '../Footer';
import "./css/Event.css";
import "./css/index.css";
import Background from "./Background";
import Background2 from "./Background2";
import InnovativeIdeaContest from "../images/eventps/InovativeIdea.jpg";
import InnovativeModelCompetition from "../images/eventps/InnovativeModel.jpg";
import TechnicalPosterPresentation from "../images/eventps/TechnicalPoster.png";

const Innovation = () => {
  return (
    <div> <Background />
    <Background2 />
       <div className="pages"> 
     <div className="segment11">
        <div className="segment11-1">
        <h1 className="Events-title">EVENT :: INNOVATION</h1>
    <div className="Events-container">

      <div className="cardEvent__grid">
        <Card
          image={InnovativeIdeaContest}
          title="INNOVATIVE IDEA CONTEST"
          description="TEAM:: (4-6), INNOVATION"
          link="/InnovativeIdeaContest"  // unique link for this card
        />
        <Card
          image={InnovativeModelCompetition}
          title="INNOVATIVE MODEL COMPETITION"
          description="TEAM:: (1-4), INNOVATION"
          link="/InnovativeModelCompetition"  // unique link for this card
        />
        <Card
          image={TechnicalPosterPresentation}
          title="TECHNICAL POSTER PRESENTATION"
          description="TEAM:: (1-3), INNOVATION"
          link="/TechnicalPosterPresentation"  // unique link for this card
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