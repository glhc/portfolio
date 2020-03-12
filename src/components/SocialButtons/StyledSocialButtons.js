import styled from 'styled-components';

const StyledSocialButtons = styled.aside`
  position: relative;
  font-size: 1.9rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1rem;

  ion-icon {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    cursor: pointer;
  }

  @media (min-width: 576px) {
    justify-content: flex-end;
    position: sticky;
    top: 0;

    .social-buttons {
      margin-right: 3rem;
    }
  }
`;

export default StyledSocialButtons;
