import React from 'react';
import StyledSocialButtons from './StyledSocialButtons';

export default function SocialButtons() {
  return (
    <StyledSocialButtons>
      <div class="social-buttons">
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="mail"></ion-icon>
      </div>
      <div class="spacer-right"></div>
    </StyledSocialButtons>
  );
};
