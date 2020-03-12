import React, {useState} from 'react';
import StyledHeader from './StyledHeader';
import SocialButtons from '../SocialButtons/SocialButtons';
import ScrollGuide from '../ScrollGuide/ScrollGuide';

export default function Header() {
  const [ isLanding, setIsLanding ] = useState(true);

  const isLandingPage = (bool) => {
    if (bool === 0) {
      setIsLanding(true);
    } else {
      setIsLanding(false);
    }
  };

  return(
    <StyledHeader className="header">
      <ScrollGuide isLandingPage={isLandingPage}/>
      <SocialButtons isLanding={isLanding}/>
    </StyledHeader>
  );
};
