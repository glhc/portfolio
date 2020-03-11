import React from 'react';
import StyledHeader from './StyledHeader';
import SocialButtons from '../SocialButtons/SocialButtons';
import ScrollGuide from '../ScrollGuide/ScrollGuide';

export default function Header() {
  return(
    <StyledHeader className="header">
      <ScrollGuide />
      <SocialButtons />
    </StyledHeader>
  );
};
