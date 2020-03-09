import React from 'react';
import Button from '../Button/Button';
import StyledLanding from './LandingStyles';

export default function Landing() {

  return (
    <StyledLanding>
      <section className="landing">
        <aside className="social-icons">
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
        </aside>
        <article className="text">
          <div>
            Hi, I'm <wbr/><span className="accent" id="name">Patrick Horne</span>.<wbr/>
          </div>
          I'm a full-stack web developer.
        </article>

        <i class="material-icons animated infinite bounce" id="down-arrow">keyboard_arrow_down</i>
      </section>
    </StyledLanding>
  );
};


