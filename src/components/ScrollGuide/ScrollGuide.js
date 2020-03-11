import React from "react";
import StyledScrollGuide from "./StyledScrollGuide";
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

export default function ScrollGuide(props) {

  const findRelativeSectionPositions = (currentY) => {
    let landingSection = document.getElementById("landing");
    let projectSection = document.getElementById("projects");
    let skillsSection = document.getElementById("skills");
    let aboutSection = document.getElementById("about");

    let landingPos = landingSection.getBoundingClientRect();
    let projectPos = projectSection.getBoundingClientRect();
    let skillsPos = skillsSection.getBoundingClientRect();
    let aboutPos = aboutSection.getBoundingClientRect();
  };

  useScrollPosition(({prevPos, currPos}) => {
    console.log(currPos.y);
  }, null, null, true);

  const handleNavigateToLanding = () => {
    let section = document.getElementById("landing");
    let sectionY = section.getBoundingClientRect().top;
    console.log('sectionY', sectionY);

    window.scrollBy({
      top: sectionY,
      behavior: "smooth"
    });
  };

  const handleNavigateToProjects = () => {
    let section = document.getElementById("projects");
    let sectionY = section.getBoundingClientRect().top;
    console.log('sectionY', sectionY);

    window.scrollBy({
      top: sectionY,
      behavior: "smooth"
    });
  };

  const handleNavigateToSkills = () => {
    let section = document.getElementById("skills");
    let sectionY = section.getBoundingClientRect().top;
    console.log('sectionY', sectionY);

    window.scrollBy({
      top: sectionY,
      behavior: "smooth"
    });
  };

  const handleNavigateToAbout = () => {
    let section = document.getElementById("about");
    let sectionY = section.getBoundingClientRect().top;
    console.log('sectionY', sectionY);

    window.scrollBy({
      top: sectionY,
      behavior: "smooth"
    });
  };

  return (
    <StyledScrollGuide>
      <div className="nav nav-landing" onClick={handleNavigateToLanding}>Home</div>
      <div className="nav nav-projects" onClick={handleNavigateToProjects}>
        Projects
      </div>
      <div className="nav nav-skills" onClick={handleNavigateToSkills}>Skills</div>
      <div className="nav nav-about" onClick={handleNavigateToAbout}>About</div>
    </StyledScrollGuide>
  );
}
