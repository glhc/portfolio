import styled from 'styled-components';
import '../../assets/styles/solarized';

const Landing = styled.section`
  .landing {
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
      border: solid ${magenta} 2px;
      border-radius: 1px;
      font-size: 20px;
      font-weight: 400;
      color: $magenta;


      display: flex;
      flex-direction: row;
      align-self: center;
      justify-self: end;

      i {
        color: $magenta;
        font-size: 33px;
      }
      
    }

    button:focus {
      outline: none;
    }
    margin-bottom: 10px;
}
`;

export default Landing;
