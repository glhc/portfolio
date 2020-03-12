import styled from 'styled-components';

const StyledAbout = styled.section`
  min-height: 100vh;
  @media (min-width: 576px) {
    padding-top: 3rem;
  }

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
    width: 25rem;
    margin: 0 auto;
    word-break: break-word;
    font-size: 1.1rem;
    line-height: 1.8rem;

    @media (min-width: 576px) {
      text-align: left;
      margin-left: 5rem;
      margin-bottom: 2rem;

    }
  }

`;

export default StyledAbout;
