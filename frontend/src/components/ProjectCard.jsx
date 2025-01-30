import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, description, skills, techStack, link, github, image }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><em>{skills}</em></p>

      <h4>Tech Stack:</h4>
      <ul className="left-align-stack">
        {techStack.map((stack, index) => (
          <li key={index}>
            <strong>{stack.category}:</strong> {stack.technologies.join(", ")}
          </li>
        ))}
      </ul>

      <div className="project-links">
        <Link to={link} className="project-link">🔗 View Project</Link>
        <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">🔗 GitHub</a>
      </div>
      <img src={image} alt={title} className="project-image" />
    </div>
    
  );
}
