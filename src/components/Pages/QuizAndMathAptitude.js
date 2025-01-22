// Event.js
import React from "react";
import Card from "./Card";
import Footer from '../Footer';
import "./css/Event.css";
import "./css/index.css";
import Background from "./Background";
import Background2 from "./Background2";
import ENIGMA from "../images/eventps/EnigmaP.png";
import QUIZOMANIA from "../images/eventps/QuizomaniaP.png";
import MATH_MANIA from "../images/eventps/MathManiaPoster.png";

const Innovation = () => {
  return (
    <div>
       <div className="pages"> 
     <div className="segment11">
        <div className="segment11-1"><Background />
        <Background2 />
        <h1 className="Events-title">EVENT :: QUIZ AND MATH APTITUDE</h1>
    <div className="Events-container">
      <div className="cardEvent__grid">
        <Card
          image={ENIGMA}
          title="ENIGMA"
          description="TEAM:: (2-3), QUIZ AND MATH APTITUDE"
          link="/ENIGMA"  // unique link for this card
        />
        <Card
          image={QUIZOMANIA}
          title="QUIZOMANIA"
          description="TEAM:: (1-3), QUIZ AND MATH APTITUDE"
          link="/QUIZOMANIA"  // unique link for this card
        />
        <Card
          image={MATH_MANIA}
          title="MATH MANIA"
          description="TEAM:: (2), QUIZ AND MATH APTITUDE"
          link="/MATH_MANIA"  // unique link for this card
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