import styled from 'styled-components';
import solarized from 'solarized-colors';

const StyledScrollGuide = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-left: 3rem;

  .nav {
    height: 1.635rem;
    text-align: center;
    flex-grow: 1;
    font-weight: 400;
    font-size: 1.2rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    :hover {
      cursor: pointer;
      color: ${solarized.yellow};
      border-color: ${solarized.base0} !important;
    }
  }


  .nav:not(:first-child) {
    border-left: 1px solid;
  }

  .current-section {
    @media (min-width: 576px) {
    color: ${solarized.violet};
    border-color: ${solarized.base0} !important;
  }
  }
`;

export default StyledScrollGuide;
