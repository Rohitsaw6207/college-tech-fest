import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/CodeFiesta.png"; // Import the image

const CODEFIESTA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "Code Fiesta: Where coding duos battle in a fast-paced quiz and intense problem-solving showdown. Master MCQs, conquer coding challenges in C, C++, or Java, and outpace competitors to emerge victorious.",
    Timeline: "",
    RegistrationFee: "50rs/Head & Outside Students: 100rs/Head",
    Contacts: "For any query contact:",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2",
    title: "Codefiesta",
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
            <h3>Codefiesta</h3>
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

export default CODEFIESTA;
