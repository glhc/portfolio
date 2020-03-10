import styled from 'styled-components';
import solarized from 'solarized-colors';

const StyledLanding = styled.section`
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    
    font-family: "Spartan";
    font-size: 2rem;
    font-weight: extra-bold;

    grid-template-rows: 3fr 1fr 1fr 3fr;
    
    .text {
      display: inherit;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 100;
    }

    /* Put the sentences in the middle */
    p {
      display: flex;
    }
    p:nth-child(1) {
      grid-row: 2 / 3;
      /* fix name not respecting leading space character */
    }
    p:nth-child(2) {
      grid-row: 3 / 4;
    }

    button {
      background-color: $base03;
      border: solid ${solarized.magenta} 2px;
      border-radius: 1px;
      font-size: 20px;
      font-weight: 400;
      color: ${solarized.magenta};


      display: flex;
      flex-direction: row;
      align-self: center;
      justify-self: end;

      i {
        color: ${ solarized.magenta };
        font-size: 33px;
      }
      
    }

    button:focus {
      outline: none;
    }

    margin-bottom: 10px;

  #down-arrow {
    color: ${solarized.magenta};
    font-size: 4rem;
    animation-duration: 1.8s;
    position: absolute;
    bottom: 1rem;
  }

  .accent {
    color: ${ solarized.magenta };
  }

  ion-icon {
    color: $base01;

  }
`;

export default StyledLanding;
