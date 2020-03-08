import styled from 'styled-components';
import solarized from 'solarized-colors';

const StyledCard = styled.article`
  border: solid red 2px;
  height: 20rem;
  width: 18rem;
  word-wrap: break-word;

  .image-holder {
    height: 180px;
    background-color: palevioletred;
    border: solid green 2px;
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

`;

export default StyledCard;
