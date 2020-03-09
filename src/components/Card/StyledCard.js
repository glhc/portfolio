import styled from 'styled-components';
import solarized from 'solarized-colors';

const StyledCard = styled.article`
  border: solid transparent 1px;
  width: 18rem;
  word-wrap: break-word;
  background-color: ${solarized.base02};
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  background-clip: border-box;
  min-width: 0;
  margin: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  .image-holder {
    height: 180px;
    background-color: ${solarized.base01};
    width: 100%;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);

    .no-image {
      margin-top: 4rem;
      margin-left: 4rem;
      display: inline-block;
      text-align: center;
      justify-self: center;
    }
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .card-title {
    margin-bottom: .75rem;
    font-size: 1.125rem;
    text-anchor: middle;
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
  }

  

  .card-button:hover {
    background-color: ${solarized.orange};
  }
`;

export default StyledCard;
