import React from "react";
import Footer from "../Footer";
import Background from "./Background";
import Background2 from "./Background2";
import "./css/about.css";
import mckv from "../images/mckv.png";

export const About = () => {
  return (
    <div>
      <Background />
      <Background2 />
      <div>
        <div className="pages">
          <div className="segment11">
            <div className="segment11-1">
              <h1 className="about-title">About</h1>
              <div className="about-1">
                <div className="lef">
                  <img src={mckv} alt="Description of image" className="colg-logo" />
                </div>
                <div className="rig">
                  Pragati 2025 - Igniting Innovation at MCKV Institute of Engineering, Liluah
                  <br />
                  <br />
                  Dear Tech Enthusiasts,
                  <br />
                  Join us at Pragati 2025, MCKVIE's premier TechFest, where innovation meets excellence. Mark your calendars for February 4th to 6th, 2025, at MCKV Institute of Engineering, Liluah.
                  <br />
                  <br />
                  Experience the pinnacle of technology and innovation at Pragati 2025, hosted by MCKV Institute of Engineering, Liluah from 6th to 8th March 2025. Engage in a Coding Extravaganza, witness epic Robo Wars, and compete in Gaming Galore featuring FIFA and NFS. Explore cutting-edge Machine Learning challenges and tackle brain-teasing Math Olympiads. This event invites tech enthusiasts from other colleges to join in a celebration where innovation steals the spotlight. Join us for an unforgettable experience at Pragati 2025!
                  <br />
                  <br />
                  Open Invitation to Colleges: Pragati 2025 welcomes students from other colleges to join us for an extraordinary event.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
