import {css} from 'styled-components';

export default css`
  p {
    font-size: calc(8px + 2vmin);
  }
 
  p:first-letter {
    float: left;
    font-family: 'Akronim', cursive;
    font-size: calc(40px + 2vmin);
    font-weight: normal;
    line-height: calc(20px + 2vmin);
    padding-left: 3px;
    padding-right: 8px;
    padding-top: 10px;
    text-shadow: 4px 4px 4px var(--background-light-color);
  }
  
  p:hover:first-letter {
    color: var(--primary-dark-color);
  }
`;
