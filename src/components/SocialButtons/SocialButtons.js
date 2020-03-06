import React from 'react';
import StyledSocialButtons from './StyledSocialButtons';

export default function SocialButtons() {
  const sendToGitHub = () => {
    window.open('https://github.com/glhc');
  };

  const sendToTwitter = () => {
    window.open('https://twitter.com/glhc_');
  };

  const sendToLinkedIn = () => {
    window.open('https://linkedin.com/patrickahorne');
  };

  const sendToEmail = () => {
    window.location.href = 'mailto:patrickahorne@gmail.com';
  };

  return (
    <StyledSocialButtons>
      <div class="social-buttons">
        <ion-icon name="logo-github" onClick={sendToGitHub}></ion-icon>
        <ion-icon name="logo-twitter" onClick={sendToTwitter}></ion-icon>
        <ion-icon name="logo-linkedin" onClick={sendToLinkedIn}></ion-icon>
        <ion-icon name="mail" onClick={sendToEmail}></ion-icon>
      </div>
      <div class="spacer-right"></div>
    </StyledSocialButtons>
  );
};
