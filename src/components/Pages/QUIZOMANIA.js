
import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/QuizomaniaP.png"; // Import the image

const QUIZOMANIA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "Get ready to dive into the most thrilling⚡quiz competition as Quizomania, presented by PRAGATI 2025, the Annual Technical Fest of MCKV Institute of Engineering (MCKVIE).",
    Timeline: "",
    RegistrationFee: "₹50 per head (in-house & external participants).",
    Contacts: "For any query contact: Semanti Ghosh: +91 9748662318 Rohit Kumar: +91 6207322327",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2-3",
    title: "QUIZOMANIA",
  };

  return (
    <div>
      <Background />
      <Background2 />
      <section className="event-section">
        <div className="content">
          <div className="card">
            <img src={card.image} alt={card.title} />
            <div className="overlay">
              <span>{card.rating}</span>
              <h2>{card.title}</h2>
            </div>
          </div>
          <div className="info">
            {/* Added Heading */}
            <h3>QUIZOMANIA</h3>
            <div className="tabs">
              {Object.keys(tabsContent).map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.replace(/([A-Z])/g, " $1").trim()}
                </button>
              ))}
            </div>
            <p>{tabsContent[activeTab]}</p>
            <div className="button-group">
              <a href="https://forms.gle/9DxVCV2iSZWxrh257"><button className="btn">Register</button></a>
              <a href=""><button className="btn">Rule Book</button></a>
              <a href="https://drive.google.com/file/d/1CeJkurMsE851m-eSa88T71toqM5iU6sS/view?usp=sharing"><button className="btn">General Rule</button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default QUIZOMANIA;
