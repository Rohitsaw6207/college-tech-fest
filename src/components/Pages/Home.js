import React, { useEffect, useState } from "react";
import "./css/home.css";
import "./css/index.css";
import Footer from "../Footer";
import Background from "./Background";
import Background2 from "./Background2";
export const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("February 4, 2025 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Background />
      <Background2 />
      <div className="pages">
        <div className="segment1">
          <div className="segment1-1" style={{ zIndex: 10 }}>
            <h1>
              Welcome To
              <div className="unique-container">
                <span>PRAGATI 2025</span>
              </div>
              Annual Tech Fest of MCKVIE
            </h1>
            <br />
            <br />
            <p></p>
            <br />
            <br />
            <h2>EVENT STARTS IN</h2>
            <div className="timer-container" style={{ zIndex: 10 }}>
              <div className="timer" style={{ zIndex: 10 }}>
                <div className="time-box">
                  <span className="time">{timeLeft.days}</span>
                  <span className="label">Days</span>
                </div>
                <div className="time-box">
                  <span className="time">{timeLeft.hours}</span>
                  <span className="label">Hours</span>
                </div>
                <div className="time-box">
                  <span className="time">{timeLeft.minutes}</span>
                  <span className="label">Minutes</span>
                </div>
                <div className="time-box">
                  <span className="time">{timeLeft.seconds}</span>
                  <span className="label">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};