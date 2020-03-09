import styled from 'styled-components';
import solarized from 'solarized-colors';

export default styled.section`

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
    }

  }


  .projects-section-title {
    text-align: center;

    @media (min-width: 576px){
      text-align: left;
      margin-left: 5rem;
      margin-bottom: 2rem;
    }
  }
`;
