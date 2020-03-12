import styled from 'styled-components';

const StyledHeader = styled.header`
  padding-top: 1rem;

  @media (min-width: 576px) {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  @media (max-width: 575.98px) {
    position: absolute;
    width: 100%;
    nav { padding-left: 0; }
    aside {
      padding-top: 0.3rem;
    }
  }

  nav {
    flex-basis: 23rem;
  }
  aside {
    flex-grow: 1;
  }

`;

export default StyledHeader;
