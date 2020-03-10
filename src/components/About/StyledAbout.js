import styled from 'styled-components';

const StyledAbout = styled.section`
  min-height: 100vh;

  .about-title {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;

    @media (min-width: 576px) {
      text-align: left;
      margin-left: 5rem;
      margin-bottom: 2rem;
    }
  }

  .about-text {
    width: 18rem;
    margin: 0 auto;
    word-break: break-word;

    @media (min-width: 576px) {
      text-align: left;
      margin-left: 5rem;
      margin-bottom: 2rem;

    }
  }

`;

export default StyledAbout;
