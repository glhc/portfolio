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

  nav {
    flex-basis: 30%;
  }
  aside {
    flex-grow: 1;
  }

`;

export default StyledHeader;
