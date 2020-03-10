import * as solarized from 'solarized-colors';
import styled from 'styled-components';

const StyledSocialButtons = styled.header`
  position: sticky;
  top: 0;
  padding-top: 8px;
  font-size: 1.9rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ion-icon {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    cursor: pointer;
  }

  @media (min-width: 576px) {
    justify-content: flex-end;

    .social-buttons {
      margin-right: 3rem;
    }
  }
`;

export default StyledSocialButtons;
