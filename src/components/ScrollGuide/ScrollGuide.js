import React, {useState} from "react";
import StyledScrollGuide from "./StyledScrollGuide";
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

export default function ScrollGuide(props) {

  const [activeComponent, setActiveComponent] = useState("landing")

  const findRelativeSectionPositions = (currentY) => {
    let landingSection = document.getElementById("landing");
    let projectSection = document.getElementById("projects");
    let skillsSection = document.getElementById("skills");
    let aboutSection = document.getElementById("about");

    let landingPos = landingSection.getBoundingClientRect().bottom;
    let projectPos = projectSection.getBoundingClientRect().bottom;
    let skillsPos = skillsSection.getBoundingClientRect().bottom;
    let aboutPos = aboutSection.getBoundingClientRect().bottom;
    
    if (landingPos > 0) {
      setActiveComponent('landing');
    } else if (projectPos > 0) {
      setActiveComponent('projects');
    } else if (skillsPos > 0) {
      setActiveComponent('skills');
    } else if (aboutPos > 0) {
      setActiveComponent('about');
    };
  };

  useScrollPosition(({prevPos, currPos}) => {
    findRelativeSectionPositions();
    props.isLandingPage(currPos.y);
    console.log(currPos.y);
  }, null, null, true);

  const handleNavigateToLanding = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNavigateToProjects = () => {
    let section = document.getElementById("projects");
    let sectionY = section.getBoundingClientRect().top;

    window.scrollBy({
      top: sectionY,
      behavior: "smooth"
    });
  };

  const handleNavigateToSkills = () => {
    let section = document.getElementById("skills");
    let sectionY = section.getBoundingClientRect().top;

    window.scrollBy({
      top: sectionY,
      behavior: "smooth"
    });
  };

  const handleNavigateToAbout = () => {
    let section = document.getElementById("about");
    let sectionY = section.getBoundingClientRect().top;

    window.scrollBy({
      top: sectionY,
      behavior: "smooth"
    });
  };

  return (
    <StyledScrollGuide>
      <div className={"nav nav-landing " + ( activeComponent === "landing" ? "current-section" : "")} onClick={handleNavigateToLanding}>Home</div>
      <div className={"nav nav-projects " + ( activeComponent === "projects" ? "current-section" : "")} onClick={handleNavigateToProjects}>
        Projects
      </div>
      <div className={"nav nav-skills " + ( activeComponent === "skills" ? "current-section" : "")} onClick={handleNavigateToSkills}>Skills</div>
      <div className={"nav nav-about " + ( activeComponent === "about" ? "current-section" : "")} onClick={handleNavigateToAbout}>About</div>
    </StyledScrollGuide>
  );
}
