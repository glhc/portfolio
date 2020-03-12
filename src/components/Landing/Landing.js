import React from "react";
import StyledLanding from "./StyledLanding";

export default function Landing() {
  const handleNavigateToProjects = () => {
    let section = document.getElementById("projects");
    let sectionY = section.getBoundingClientRect().top;

    window.scrollBy({
      top: sectionY,
      behavior: "smooth"
    });
  };

  return (
    <StyledLanding id="landing">
      <section className="landing">
        <article className="text">
          <div>
            Hi, I'm <wbr />
            <span className="accent" id="name">
              Patrick Horne
            </span>
            .<wbr />
          </div>
          I'm a full-stack web developer.
        </article>
      </section>
      <i
        className="material-icons animated infinite bounce"
        id="down-arrow"
        onClick={handleNavigateToProjects}
      >
        keyboard_arrow_down
      </i>
    </StyledLanding>
  );
}
