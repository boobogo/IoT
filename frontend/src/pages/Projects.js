// Projects.js
import React from 'react';
import '../styles/Projects.css';
import iotImage from '../images/iot.jpg'; // Import the image
import algoImage from '../images/algo.webp'; // Import the image
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects">
      <div className="project-list">
        <div className="project-card">
          <h3>IoT Smart Home</h3>
          <p>
            A smart home project leveraging Raspberry Pi and AWS IoT Core. 
            The Raspberry Pi collects sensor data and sends it to AWS IoT Core for 
            potential action triggers and data analysis. It also enables remote 
            control of home devices via AWS services, creating an 
            intelligent home automation system.
          </p>
          <Link to="/IoT" className="project-link">View Project</Link>
          <img src={iotImage} alt="iot"/> 
        </div>
        <div className="project-card">
          <h3>Algorithmic Trading Bot</h3>
          <p>
            This project involves developing an intelligent trading bot that learns from 
            historical and live market data using deep reinforcement learning (DRL) to make 
            informed trading decisions. The bot analyzes financial data, including price 
            movements, technical indicators, and market trends, to predict future price 
            actions and execute trades accordingly.
          </p>
          <Link to="/algo" className="project-link">View Project</Link>
          <img src={algoImage} alt="algo"/> 
        </div>
      </div>
    </div>
  );
}

export default Projects;
