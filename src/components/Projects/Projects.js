import React from "react";
import Card from "../Card/Card";
import projectData from "../../assets/projects";
import StyledProjects from './StyledProjects';


export default function Projects() {
  const projectCards = projectData.map((project, index) => {
    return (
      <Card 
        title={project.title}
        description={project.description}
        siteUrl={project.siteUrl}
        codeUrl={project.codeUrl}
        image={project.image}
        key={index}
      />
    )
  });


  return (
    <StyledProjects className="portfolio">
      <h2 className="projects-section-title">Projects</h2>
      <div className="card-container">
        {projectCards}
      </div>
    </StyledProjects>
  );
}
