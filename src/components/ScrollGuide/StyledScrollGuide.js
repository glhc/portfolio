import styled from 'styled-components';
import solarized from 'solarized-colors';

const StyledScrollGuide = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-left: 3rem;

  .nav {
    flex-grow: 1;
    font-weight: 350;
    font-size: 1.2rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover {
      cursor: pointer;
      color: ${solarized.yellow};
    }
  }

  .card-button {
    border-radius: .25rem;
    background-color: ${solarized.magenta};
    border: solid transparent 1px;
    line-height: 1.5rem;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    padding: .375rem .75rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    user-select: none;
    text-decoration: none;
    color: ${solarized.base2};
    font-weight: 400;
`;

export default StyledScrollGuide;
