import styled from 'styled-components';
import solarized from 'solarized-colors';

const StyledSkills = styled.section`
  min-height: 100vh;

  .skills-title {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;

    @media (min-width: 576px) {
      text-align: left;
      margin-left: 5rem;
      margin-bottom: 2rem;
    }
  }

  li {
    list-style-type: none;
  }

  .skill-list {
    @media (min-width: 576px) {
      margin-left: 5rem;
      margin-top: 0;
      margin-bottom: 0;
      padding: 0;
    }
  }

  .skill-tag {
  }

  .skill-tag-element-name {
    color: ${solarized.magenta};
  }

  .skill-tag-angle-bracket {
    color: ${solarized.base01};
  }

  .skill-name {
  }

  .skill-tag-attribute-name {
    color: ${solarized.yellow}
  }

  .skill-tag-attribute-value {
    color: ${solarized.blue}
  }

`;

export default StyledSkills;
