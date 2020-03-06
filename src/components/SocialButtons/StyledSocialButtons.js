import * as solarized from 'solarized-colors';
import styled from 'styled-components';

const StyledSocialButtons = styled.header`
  margin-top: 8px;
  font-size: 1.9rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  ion-icon {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    cursor: pointer;
  }

  .social-buttons {
    margin-right: 4rem;
  }
`;

export default StyledSocialButtons;
