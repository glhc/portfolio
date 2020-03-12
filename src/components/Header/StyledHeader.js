import styled from "styled-components";
import solarized from "solarized-colors";

const StyledHeader = styled.header`
  background-color: ${solarized.base03};

  @media (min-width: 576px) {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  @media (max-width: 575.98px) {
    padding-bottom: 0.5rem;
    position: fixed;
    width: 100%;
    nav {
      padding-left: 0;
    }
    aside {
      padding-top: 1rem;
      transition: visibility 1s, opacity 0.5s linear;
      display: none;
    }
    #social-landing-page {
      display: fixed;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    nav {
      padding-top: 0.5rem;
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
