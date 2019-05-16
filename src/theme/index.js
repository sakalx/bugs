import {createGlobalStyle} from 'styled-components';

import colors from './colors';
import {tooltip} from './plugins';
import {a, p, ul_li} from './tags';

export default createGlobalStyle`
  :root {
    ${colors};
  }
  
  // Custom tags:
  ${a};
  ${p};
  ${ul_li};
  
  // Data plugins:
  ${tooltip};
  
  // Css normalize:
  body {
    margin: 0 auto;
    font-family: 'PT Sans', sans-serif;
  };
  
   div {
    box-sizing: border-box;
  };
  
  h1 {
   font-size: calc(16px + 2vmin);
  };
  
  h2 {
    font-size: calc(14px + 2vmin);
    margin-bottom: 8px;
    text-shadow: 4px 4px 4px var(--background-light-color);
  }
  
  h3 {
    font-size: calc(12px + 2vmin);
    text-shadow: 4px 4px 4px var(--background-light-color);
  };
  
  h4 {
    font-size: calc(8px + 2vmin);
    margin: 8px 0;
  }
  
  svg {
    pointer-events: none;
  }
  
  time {
    color: var(--background-invert-color);
    font-size: calc(8px + 2vmin);
    font-style: italic;
  };
  
  hr {
    border: 0;
    box-shadow: 0 0 10px 1px black;
    height: 0;
    margin: 21px 0;
  }
`;
