import styled from 'styled-components';
import solarized from 'solarized-colors';

const StyledCard = styled.article`
  border: solid red 2px;
  height: 20rem;
  width: 18rem;
  word-wrap: break-word;
  background-color: ${solarized.base02};

  .image-holder {
    height: 180px;
    background-color: ${solarized.base01};
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .card-title {
    margin-bottom: .75rem;
  }

  .card-button {
    border-radius: .25rem;
    background-color: ${solarized.violet};
    border: solid transparent 1px;
    line-height: 1.5rem;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    padding: .375rem .75rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    user-select: none;
    text-decoration: none;
  }

  

  .card-button:hover {
    background-color: ${solarized.orange};
  }
`;

export default StyledCard;
