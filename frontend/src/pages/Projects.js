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
            This project demonstrates a smart home IoT system that enables remote control and 
            monitoring of home devices through a React-based web application. It integrates 
            IoT devices, AWS cloud services, and DevOps practices to showcase an end-to-end 
            system design. 
          </p>
          <p><em>Skills: IoT, AWS, Web Development, DevOps</em></p>
          <h4>Tech Stack:</h4>
          <ul class="left-align-stack">
            <li>Frontend: React, Nginx</li>
            <li>Backend: AWS Lambda, API Gateway</li>
            <li>IoT: Raspberry Pi, MQTT, AWS IoT Core</li>
            <li>Cloud Services: AWS (EC2, IoT Core, TimeStream, SNS, Lambda, IAM)</li>
            <li>DevOps: Docker, GitHub Actions, Kubernetes (Minikube)</li>
          </ul>
          <Link to="/IoT" className="project-link"> &#8658; View Dashboard</Link>
          <a href="https://github.com/boobogo/project" target="_blank" rel="noopener noreferrer" className='project-link'>&#8658; Project repo</a>
          <img src={iotImage} alt="iot"/> 
        </div>
        <div className="project-card">
          <h3>Algorithmic Trading Bots</h3>
          <p>
            This project involves developing an intelligent trading bot that learns from 
            historical market data using deep reinforcement learning (DRL) to make 
            informed trading decisions. The bot analyzes financial data, including price 
            movements, technical indicators, and market trends, to predict future price 
            actions and execute trades accordingly.
          </p>
          <p><em>Skills: Python, Machine Learning, Data Analysis</em></p>
          <h4>Tech Stack:</h4>
          <ul class="left-align-stack">
            <li>Programming Languages: Python, MQL4/MQL5</li>
            <li>Data Processing: Pandas, NumPy</li>
            <li>Machine Learning Libraries: Scikit-learn, Pytorch</li>
            <li>Reinforcement Learning: OpenAI Gym, Stable Baselines3, Finlib</li>
            <li>Trading/Backtesting Platforms: MetaTrader 4/5, Python</li>
          </ul>
          {/* <Link to="/algo" className="project-link">View Project</Link> */}
          <img src={algoImage} alt="algo"/> 
        </div>
      </div>
    </div>
  );
}

export default Projects;
