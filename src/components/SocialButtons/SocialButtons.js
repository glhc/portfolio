import React from "react";
import StyledSocialButtons from "./StyledSocialButtons";

export default function SocialButtons(props) {
  const sendToGitHub = e => {
    window.open("https://github.com/glhc");
    console.log(e.button);
  };

  const sendToTwitter = () => {
    window.open("https://twitter.com/glhc_");
  };

  const sendToLinkedIn = () => {
    window.open("https://linkedin.com/patrickahorne");
  };

  const sendToEmail = () => {
    window.location.href = "mailto:patrickahorne@gmail.com";
  };

  return (
    <StyledSocialButtons className={props.footer && "footer"}>
      <div className="social-buttons">
        <ion-icon
          name="logo-github"
          onClick={sendToGitHub}
          onAuxClick={sendToGitHub}
        ></ion-icon>
        <ion-icon
          name="logo-twitter"
          onClick={sendToTwitter}
          onAuxClick={sendToTwitter}
        ></ion-icon>
        <ion-icon
          name="logo-linkedin"
          onClick={sendToLinkedIn}
          onAuxClick={sendToLinkedIn}
        ></ion-icon>
        <ion-icon
          name="mail"
          onClick={sendToEmail}
          onAuxClick={sendToEmail}
        ></ion-icon>
      </div>
      <div className="spacer-right"></div>
    </StyledSocialButtons>
  );
}
