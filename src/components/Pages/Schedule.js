import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component for navigation
import Footer from "../Footer";
import "./css/schedule.css";
import "../MouseShadow.css";
import Background from "./Background";
import Background2 from "./Background2";

export const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  const dayDates = {
    "Day 1": "4th February",
    "Day 2": "5th February",
    "Day 3": "6th February",
  };

  // Schedule data for each day
  const scheduleData = {
    "Day 1": [
      {
        title: "09:00 AM - 09:30 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 09:30 am, participant registration will continue
              at Amtala in MCKVIE College campus. Participants are requested to
              bring valid college ID to register at the registration desk.
            </li>
          </ul>
        ),
      },
      {
        title:
          "09:30 AM - 10:00 AM IST - Inauguration Program (Malay Manch/ Seminar Hall, Room: B-312)",
        description: (
          <ul>
            <li>
              From 09:00 am - 09:30 am, participant registration will continue
              at Amtala in MCKVIE College campus. Participants are requested to
              bring valid college ID to register at the registration desk.
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 11:00 AM IST - Kickoff Pragati 2025",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeModelCompetition">INOVATIVE MODEL</Link>
            </li>
            <li>
              <Link to="/MATH_MANIA">MATH MANIA</Link>
            </li>
            <li>
              <Link to="/CATIA_desginContest">CATIA </Link>
            </li>
            <li>
              <Link to="/CircuitDesign">CIRCUIT DESIGN </Link>
            </li>
            <li>
              <Link to="/ROBO_FIFA">ROBO FIFA (1st/2nd/Final Round)</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "11:00 AM - 12:00 AM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeModelCompetition">INOVATIVE MODEL</Link>
            </li>
            <li>
              <Link to="/MATH_MANIA">MATH MANIA</Link>
            </li>
            <li>
              <Link to="/CATIA_desginContest">CATIA </Link>
            </li>
            <li>
              <Link to="/CircuitDesign">CIRCUIT DESIGN </Link>
            </li>
            <li>
              <Link to="/ROBO_FIFA">ROBO FIFA (1st/2nd/Final Round)</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "12:00 PM - 01:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeModelCompetition">INOVATIVE MODEL</Link>
            </li>
            <li>
              <Link to="/MATH_MANIA">MATH MANIA</Link>
            </li>
            <li>
              <Link to="/CATIA_desginContest">CATIA </Link>
            </li>
            <li>
              <Link to="/CircuitDesign">CIRCUIT DESIGN </Link>
            </li>
            <li>
              <Link to="/ROBO_FIFA">ROBO FIFA (1st/2nd/Final Round)</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "01:00 PM - 02:00 PM IST - Break Time",
      },
      {
        title: "02:00 PM - 03:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeModelCompetition">INOVATIVE MODEL</Link>
            </li>
            <li>
              <Link to="/MATH_MANIA">MATH MANIA</Link>
            </li>
            <li>
              <Link to="/TechnicalPosterPresentation">TECHNICAL POSTER </Link>
            </li>
            <li>
              <Link to="/NFS_MOSTWANTED">NFS (MOST WANTED) </Link>
            </li>
            <li>
              <Link to="/ROBO_FIFA">ROBO FIFA (1st/2nd/Final Round)</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "03:00 PM - 04:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeModelCompetition">INOVATIVE MODEL</Link>
            </li>
            <li>
              <Link to="/MATH_MANIA">MATH MANIA</Link>
            </li>
            <li>
              <Link to="/TechnicalPosterPresentation">TECHNICAL POSTER </Link>
            </li>
            <li>
              <Link to="/NFS_MOSTWANTED">NFS (MOST WANTED) </Link>
            </li>
            <li>
              <Link to="/ROBO_FIFA">ROBO FIFA (1st/2nd/Final Round)</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "04:00 PM - 05:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeModelCompetition">INOVATIVE MODEL</Link>
            </li>
            <li>
              <Link to="/MATH_MANIA">MATH MANIA</Link>
            </li>
            <li>
              <Link to="/TechnicalPosterPresentation">TECHNICAL POSTER </Link>
            </li>
            <li>
              <Link to="/NFS_MOSTWANTED">NFS (MOST WANTED) </Link>
            </li>
            <li>
              <Link to="/ROBO_FIFA">ROBO FIFA (1st/2nd/Final Round)</Link>
            </li>
          </ul>
        ),
      },
    ],
    "Day 2": [
      {
        title: "09:00 AM - 10:00 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 10:00 am, participant registration will continue
              at Amtala in MCKVIE College campus.
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 11:00 AM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeIdeaContest">INNOVATIVE IDEA </Link>
            </li>
            <li>
              <Link to="/ROBO_WAR">ROBO WAR (1st/2nd/Final Round)</Link>
            </li>
            <li>
              <Link to="/CHASE_THE_MAZE">
                CHASE THE MAZE (1st/2nd/Final Round)
              </Link>
            </li>
            <li>
              <Link to="/ENIGMA"> ENIGMA (TREASURE HUNT)</Link>
            </li>
            <li>
              <Link to="/CODEFIESTA"> CODE FIESTA</Link>
            </li>
            <li>
              <Link to="/FIFA"> eFOOTBALL Mobile 2025</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "11:00 AM - 12:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeIdeaContest">INNOVATIVE IDEA </Link>
            </li>
            <li>
              <Link to="/ROBO_WAR">ROBO WAR (1st/2nd/Final Round)</Link>
            </li>
            <li>
              <Link to="/CHASE_THE_MAZE">
                CHASE THE MAZE (1st/2nd/Final Round)
              </Link>
            </li>
            <li>
              <Link to="/ENIGMA"> ENIGMA (TREASURE HUNT)</Link>
            </li>
            <li>
              <Link to="/CODEFIESTA"> CODE FIESTA</Link>
            </li>
            <li>
              <Link to="/FIFA"> eFOOTBALL Mobile 2025</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "12:00 PM - 01:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeIdeaContest">INNOVATIVE IDEA </Link>
            </li>
            <li>
              <Link to="/ROBO_WAR">ROBO WAR (1st/2nd/Final Round)</Link>
            </li>
            <li>
              <Link to="/CHASE_THE_MAZE">
                CHASE THE MAZE (1st/2nd/Final Round)
              </Link>
            </li>
            <li>
              <Link to="/ENIGMA"> ENIGMA (TREASURE HUNT)</Link>
            </li>
            <li>
              <Link to="/CODEFIESTA"> CODE FIESTA</Link>
            </li>
            <li>
              <Link to="/FIFA"> eFOOTBALL Mobile 2025</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "01:00 PM - 02:00 PM IST - Break Time",
      },
      {
        title: "02:00 PM - 03:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeIdeaContest">INNOVATIVE IDEA </Link>
            </li>
            <li>
              <Link to="/ROBO_WAR">ROBO WAR (1st/2nd/Final Round)</Link>
            </li>
            <li>
              <Link to="/CHASE_THE_MAZE">
                CHASE THE MAZE (1st/2nd/Final Round)
              </Link>
            </li>
            <li>
              <Link to="/ENIGMA"> ENIGMA (TREASURE HUNT)</Link>
            </li>
            <li>
              <Link to="/CODEFIESTA"> CODE FIESTA</Link>
            </li>
            <li>
              <Link to="/ML_MANIA">ML MANIA</Link>
            </li>
            <li>
              <Link to="/FIFA"> eFOOTBALL Mobile 2025</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "03:00 PM - 04:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeIdeaContest">INNOVATIVE IDEA </Link>
            </li>
            <li>
              <Link to="/ROBO_WAR">ROBO WAR (1st/2nd/Final Round)</Link>
            </li>
            <li>
              <Link to="/CHASE_THE_MAZE">
                CHASE THE MAZE (1st/2nd/Final Round)
              </Link>
            </li>
            <li>
              <Link to="/ENIGMA"> ENIGMA (TREASURE HUNT)</Link>
            </li>
            <li>
              <Link to="/CODEFIESTA"> CODE FIESTA</Link>
            </li>
            <li>
              <Link to="/ML_MANIA">ML MANIA</Link>
            </li>
            <li>
              <Link to="/FIFA"> eFOOTBALL Mobile 2025</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "04:00 PM - 05:00 PM IST - Event continues",
        description: (
          <ul>
            <li>
              <Link to="/InnovativeIdeaContest">INNOVATIVE IDEA </Link>
            </li>
            <li>
              <Link to="/ROBO_WAR">ROBO WAR (1st/2nd/Final Round)</Link>
            </li>
            <li>
              <Link to="/CHASE_THE_MAZE">
                CHASE THE MAZE (1st/2nd/Final Round)
              </Link>
            </li>
            <li>
              <Link to="/ENIGMA"> ENIGMA (TREASURE HUNT)</Link>
            </li>
            <li>
              <Link to="/CODEFIESTA"> CODE FIESTA</Link>
            </li>
            <li>
              <Link to="/ML_MANIA">ML MANIA</Link>
            </li>
            <li>
              <Link to="/FIFA"> eFOOTBALL Mobile 2025</Link>
            </li>
          </ul>
        ),
      },
    ],
    "Day 3": [
      {
        title: "09:00 AM - 10:00 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 10:00 am, participant registration will continue
              at Amtala in MCKVIE College campus.
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 01:00 PM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/QUIZOMANIA">QUIZOMANIA</Link>
            </li>
            <li>Buffer Time for completion of any events.</li>
          </ul>
        ),
      },

      {
        title: "01:00 PM - 02:00 PM IST - Break Time",
      },
      {
        title: "03:00 PM - 05:00 PM IST - PRIZE DISTRIBUTION (SIT HALL)",
        description: (
          <ul>
            <li>Prize Distribution (SIT Hall)</li>
          </ul>
        ),
      },
    ],
  };

  return (
    <div>
      <Background />
      <Background2 />
      <div className="pages">
        <div className="segment11">
          <div className="segment11-1">
            {/* Buttons for Selecting Days */}
            <br></br>
            <div className="day-selector">
              {Object.keys(scheduleData).map((day) => (
                <button
                  key={day}
                  className={`day-button ${
                    selectedDay === day ? "active" : ""
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            <h2 className="selected-date">{dayDates[selectedDay]}</h2>

            {/* Timeline for the Selected Day */}
            <section className="time-line">
              {scheduleData[selectedDay].map((item, index) => (
                <div
                  className="schedule-container"
                  key={index}
                  style={{ "--dly": `${index * 0.5}s` }}
                >
                  <div className="text-content">
                    <h2>{item.title}</h2>
                    <div>{item.description}</div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
