import styled from 'styled-components';
import solarized from 'solarized-colors';

const StyledSkills = styled.section`
  min-height: 50vh;

  .skills-title {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;

    @media (min-width: 576px){
      text-align: left;
      margin-left: 5rem;
      margin-bottom: 2rem;
    }
  }

  ul {
    list-style-type: none;
  }

  .skill-tag {
    boder: solid red 2px;
  }

  .skill-tag-element-name {
    color: ${solarized.magenta};
  }

  .skill-tag-angle-bracket {
    color: ${solarized.base01};
  }

  .skill-name {
  }

`;

export default StyledSkills;
