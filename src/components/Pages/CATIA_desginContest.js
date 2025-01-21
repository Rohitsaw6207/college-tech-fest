import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/eventps/CATIAP.png"; // Import the image

const CATIA_desginContest = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "Gear up for a drafting duel in 'Design with AutoCAD/Catia'! This challenge invites pairs of aspiring engineers to unleash their design dexterity and architectural acumen. Armed only with traditional drafting tools—leave your cell phones behind—you'll race against time to sketch the future.",
    Timeline: "10:00 a.m. - 01:00 p.m., 6th February",
    RegistrationFee: " MCKVIE STUDENTS: Rs. 50/head and EXTERNAL STUDENTS: Rs. 100/head ",
    Contacts: "For any query contact: SOHAMDEEP DAS:+919330339458",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2",
    title: "CATIA-Desgin Contest",
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
            <h3>CATIA-Desgin Contest</h3>
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
            <a href="https://forms.gle/twqYmDEbSVvmzadr7"><button className="btn">Register</button></a>
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

export default CATIA_desginContest;
