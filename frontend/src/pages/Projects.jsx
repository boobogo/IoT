import React from "react";
import "../styles/Projects.css";
import iotImage from "../images/iot2.jpg";
import algoImage from "../images/algo.webp";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "IoT Smart Home",
      description:
        "Smart home IoT system with remote control & monitoring via a React web app. Integrates IoT devices, AWS, and DevOps for end-to-end system design.",
      skills: "Skills: IoT, AWS, Web Development, DevOps",
      techStack: [
        { category: "Frontend", technologies: ["React", "Nginx"] },
        { category: "Backend", technologies: ["AWS Lambda", "API Gateway"] },
        { category: "IoT", technologies: ["Raspberry Pi", "MQTT", "AWS IoT Core"] },
        { category: "Cloud Services", technologies: ["AWS (EC2, IoT Core, TimeStream, SNS, Lambda, IAM)"] },
        { category: "DevOps", technologies: ["Docker", "GitHub Actions", "Kubernetes (Minikube)"] },
      ],
      link: "/IoT",
      github: "https://github.com/boobogo/iot",
      image: iotImage,
    },
    {
      title: "Algorithmic Trading",
      description:
        "This project involves developing an intelligent trading bot that learns from historical market data using deep reinforcement learning (DRL) to make informed trading decisions.",
      skills: "Skills: Python, Machine Learning, Data Analysis",
      techStack: [
        { category: "Programming Languages", technologies: ["Python", "MQL4/MQL5"] },
        { category: "Data Processing", technologies: ["Pandas", "NumPy"] },
        { category: "Machine Learning Libraries", technologies: ["Scikit-learn", "Pytorch"] },
        { category: "Reinforcement Learning", technologies: ["OpenAI Gym", "Stable Baselines3", "Finlib"] },
        { category: "Trading/Backtesting Platforms", technologies: ["MetaTrader 4/5", "Python"] },
      ],
      link: "/trade",
      github: "https://github.com/boobogo/trade",
      image: algoImage,
    },
  ];

  return (
    <div className="projects">
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
