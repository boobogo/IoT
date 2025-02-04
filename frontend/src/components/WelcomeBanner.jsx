import React from "react";
import "../styles/WelcomeBanner.css";
import { Link } from "react-router-dom";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <h1 className="welcome-title animate-fade-in">Welcome to My Portfolio</h1>
      <p className="welcome-subtitle animate-slide-up">
        Turning Ideas Into Reality
      </p>
      <Link to="/projects">
        <button className="welcome-button animate-fade-in-delay">
            Explore My Work
        </button>      
      </Link>
      
    </div>
  );
};

export default WelcomeBanner;