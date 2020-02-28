import React from 'react';
import Button from '../Button/Button';

export default function Landing() {

  return (
    <>
      <section class="landing">
        <article class="text">
          <div>
            Hi, I'm <wbr/><span class="accent" id="name">Patrick Horne</span>.<wbr/>
          </div>
          I'm an aspiring full-stack web developer.
        </article>

        <Button text="See more" icon="keyboard_arrow_down"/>
      </section>
    </>
  );
};


