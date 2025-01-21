import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Allocation } from "./components/Pages/Allocation";
import { Schedule } from "./components/Pages/Schedule";
import { Contact } from "./components/Pages/Contact";
import { Roomstart } from "./components/Pages/Roomstart";
import MouseShadow from "./components/MouseShadow";
import Innovation from "./components/Pages/Innovation";
import CodingAndEngineering from "./components/Pages/CodingAndEngineering";
import QuizAndMathAptitude from "./components/Pages/QuizAndMathAptitude";
import Gaming from "./components/Pages/Gaming";
import Robotics from "./components/Pages/Robotics";
import Preloader from "./components/Preloader"; // Import Preloader component
import { Members } from "./components/Pages/Members";


import CODEFIESTA from "./components/Pages/CODEFIESTA"; // Component of /CodingAndEngineering
import CATIA_desginContest from "./components/Pages/CATIA_desginContest"; // Component of /CodingAndEngineering
import CircuitDesign from "./components/Pages/CircuitDesign"; // Component of /CodingAndEngineering
import ML_MANIA from "./components/Pages/ML_MANIA"; // Component of /CodingAndEngineering

import InnovativeIdeaContest from "./components/Pages/InnovativeIdeaContest"; // Component of /CodingAndEngineering
import InnovativeModelCompetition from "./components/Pages/InnovativeModelCompetition"; // Component of /CodingAndEngineering
import TechnicalPosterPresentation from "./components/Pages/TechnicalPosterPresentation"; // Component of /CodingAndEngineering

import ENIGMA from "./components/Pages/ENIGMA"; // Component of /QuizAndMathAptitude
import QUIZOMANIA from "./components/Pages/QUIZOMANIA"; // Component of /QuizAndMathAptitude
import MATH_MANIA from "./components/Pages/MATH_MANIA"; // Component of /QuizAndMathAptitude

import NFS_MOSTWANTED from "./components/Pages/NFS_MOSTWANTED"; // Component of /Gaming
import FIFA from "./components/Pages/FIFA"; // Component of /Gaming

import ROBO_FIFA from "./components/Pages/ROBO_FIFA"; // Component of /Robotics
import ROBO_WAR from "./components/Pages/ROBO_WAR"; // Component of /Robotics
import CHASE_THE_MAZE from "./components/Pages/CHASE_THE_MAZE"; // Component of /Robotics

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate loading 5000
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading
  }

  return (
    <Router>
      <NavBar />
      <MouseShadow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allocation" element={<Allocation />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roomstart" element={<Roomstart />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route
          path="/coding-and-engineering"
          element={<CodingAndEngineering />}
        />
        <Route
          path="/quiz-and-math-aptitude"
          element={<QuizAndMathAptitude />}
        />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/members" element={<Members />} />{" "}
        
        <Route path="/CODEFIESTA" element={<CODEFIESTA />} />
        <Route path="/CATIA_desginContest" element={<CATIA_desginContest />} />
        <Route path="/CircuitDesign" element={<CircuitDesign />} />
        <Route path="/ML_MANIA" element={<ML_MANIA />} />
        {/* Component of /CodingAndEngineering */}

        <Route path="/InnovativeIdeaContest" element={<InnovativeIdeaContest />} />
        <Route path="/InnovativeModelCompetition" element={<InnovativeModelCompetition />} />
        <Route path="/TechnicalPosterPresentation" element={<TechnicalPosterPresentation />} />
        {/* Component of /Innovation */}

        <Route path="/ENIGMA" element={<ENIGMA />} />
        <Route path="/QUIZOMANIA" element={<QUIZOMANIA />} />
        <Route path="/MATH_MANIA" element={<MATH_MANIA />} />
        {/* Component of /QuizAndMathAptitude */}

        <Route path="/NFS_MOSTWANTED" element={<NFS_MOSTWANTED />} />
        <Route path="/FIFA" element={<FIFA />} />
        {/* Component of /Gaming */}

        <Route path="/ROBO_FIFA" element={<ROBO_FIFA />} />
        <Route path="/ROBO_WAR" element={<ROBO_WAR />} />
        <Route path="/CHASE_THE_MAZE" element={<CHASE_THE_MAZE />} />
        {/* Component of /Robotics */}
      </Routes>
    </Router>
  );
}

export default App;
