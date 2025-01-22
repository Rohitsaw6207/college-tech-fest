import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/InnovativeModel.jpg"; // Import the image

const InnovativeModelCompetition = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "The article submission guidelines specify domains like healthcare, agriculture, robotics, renewable energy, IoT, mobile and web app development, smart education, environment sustainability, future mobility, sensors, VLSI, and more. Submissions must follow a structured format including title, domain, problem definition, theoretical background, implementation, solution uniqueness, and a presentation with specific content",
    Timeline: "",
    RegistrationFee: "MCKVIE Students: 100rs/Team & Outside Students: 200rs/Team",
    Contacts: "For any query contact: Kunal Das: +91 6289974806 Parna Biswas: +917439453055",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 1-4",
    title: "Innovative Model Competitiont",
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
            <h3>Innovative Model Competition</h3>
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
            <a href=""><button className="btn">Register</button></a>
              <a href=""><button className="btn">Rule Book</button></a>
              <a href=""><button className="btn">General Rule</button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InnovativeModelCompetition;
