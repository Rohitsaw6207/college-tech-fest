import React from "react";
import Card from "./Card";
import Footer from "../Footer";
import "./css/Event.css";
import "./css/index.css";
import Background from "./Background";
import Background2 from "./Background2";
import CODEFIESTA from "../images/eventps/CodeFiesta.png";
import CATIA_desginContest from "../images/eventps/CATIAP.png";
import CircuitDesign from "../images/eventps/CircuitDesign.png";
import ML_MANIA from "../images/eventps/MLMania.png";

const CodingAndEngineering = () => {
  return (
    <div><Background /><Background2 />
    <div className="pages">
      <div className="segment11">
        <div className="segment11-1">
          <h1 className="Events-title">EVENT :: CODING AND ENGINEERING DESIGN</h1>
          <div className="Events-container">
            <div className="cardEvent__grid">
              {/* Card components */}
              <Card
                image={CODEFIESTA}
                title="CODEFIESTA"
                description="TEAM:: (2), CODING AND ENGINEERING"
                link="./CODEFIESTA" // unique link for this card
              />
              <Card
                image={CATIA_desginContest}
                title="CATIA - DESIGN COMPETITION"
                description="TEAM:: (2), CODING AND ENGINEERING"
              link="/CATIA_desginContest" // unique link for this card
              />
              <Card
                image={CircuitDesign}
                title="CIRCUIT DESIGN COMPETITION"
                description="TEAM:: (1-3), CODING AND ENGINEERING"
                link="/CircuitDesign" // unique link for this card
              />
              <Card
                image={ML_MANIA}
                title="ML MANIA"
                description="TEAM:: (2), CODING AND ENGINEERING"
                link="/ML_MANIA" // unique link for this card
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default CodingAndEngineering;
