import styled from 'styled-components';

export default styled.section`
  text-align: center;
  min-height: 100vh;

  @media (min-width: 576px) {
    padding-top: 3rem;
  }

  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 1rem;
    margin-right: 1rem;
    justify-content: center;

    @media (min-width: 576px) {
      align-items: flex-start;
      align-content: flex-start;
      justify-content: flex-start;
      padding-left: 3rem;
    }

  }


  .projects-section-title {
    text-align: center;
    font-size: 2rem;

    @media (min-width: 576px){
      text-align: left;
      margin-left: 5rem;
      margin-bottom: 2rem;
    }
  }
`;
