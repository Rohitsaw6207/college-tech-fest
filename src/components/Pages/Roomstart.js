import React from "react";
import Background from "./Background";
import Background2 from "./Background2";

export const Roomstart = () => {
  return (
    <><Background />
    <Background2 />
    <div className="container">
      <h1>Room has not started yet OR Invalid code !!</h1>
    </div>
    </>
    
  );
};

