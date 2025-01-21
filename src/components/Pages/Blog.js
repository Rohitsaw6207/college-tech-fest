import React from "react";
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import "./css/Blog.css"; // Import the Blog CSS;
import Background from "./Background";
import Background2 from "./Background2";

export const Blog = () => {
  const navigate = useNavigate();
  return (

    <div><Background />
    <Background2/>
       <div className="pages"> 
     <div className="segment11">
        <div className="segment11-1">
        <h1 className="blog-title">EVENTS</h1>
        {/* <h1>Competitions</h1> */}
        <div className="blog-container">
      <div className="blog-cards-container">
        {/* Card 1 */}
        <div className="blog-card">
          {/*<img
            src="https://via.placeholder.com/300"
            alt="Card 1"
            className="blog-card-image"
          />*/}
          <h2 className="blog-card-title">INNOVATION</h2>
          <p className="blog-card-description">
            
          </p>
          <div className="blog-card-footer">
            <button
              className="blog-card-button"
              onClick={() => navigate("/innovation")}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="blog-card">
          {/*<img
            src="https://via.placeholder.com/300"
            alt="Card 2"
            className="blog-card-image"
          />*/}
          <h2 className="blog-card-title">CODING AND ENGINEERING</h2>
          <p className="blog-card-description">
            
          </p>
          <div className="blog-card-footer">
            <button
              className="blog-card-button"
              onClick={() => navigate("/coding-and-engineering")}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="blog-card">
          {/*<img
            src="https://via.placeholder.com/300"
            alt="Card 3"
            className="blog-card-image"
          />*/}
          <h2 className="blog-card-title">QUIZ AND MATH APTITUDE</h2>
          <p className="blog-card-description">
           
          </p>
          <div className="blog-card-footer">
            <button
              className="blog-card-button"
              onClick={() => navigate("/quiz-and-math-aptitude")}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="blog-card">
          {/*<img
            src="https://via.placeholder.com/300"
            alt="Card 4"
            className="blog-card-image"
          />*/}
          <h2 className="blog-card-title">GAMING</h2>
          <p className="blog-card-description">
            
          </p>
          <div className="blog-card-footer">
            <button
              className="blog-card-button"
              onClick={() => navigate("/gaming")}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="blog-card">
          {/*<img
            src="https://via.placeholder.com/300"
            alt="Card 5"
            className="blog-card-image"
          />*/}
          <h2 className="blog-card-title">ROBOTICS</h2>
          <p className="blog-card-description">
            
          </p>
          <div className="blog-card-footer">
            <button
              className="blog-card-button"
              onClick={() => navigate("/robotics")}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>          
    </div>
      </div>
      </div>
      <Footer/>
    </div>
    );
};

