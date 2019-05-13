import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  :root {
    --background-color: #fff;
    --background-light-color: #bebebe;
    
    --primary-color: #2196f3;
    --primary-dark-color: #1769aa;
    --primary-light-color: #4dabf5;
    --secondary-color: #f50057;
    --secondary-dark-color: #ab003c;
    --secondary-light-color: #f73378;
  }
  body {
    margin: 0 auto;
    font-family: 'PT Sans', sans-serif;
    //text-shadow: 4px 4px 4px #aaa;
  };
  
  h1 {
   font-size: calc(16px + 2vmin);
  };
  
  h2 {
    font-size: calc(14px + 2vmin);
    text-shadow: 4px 4px 4px var(--background-light-color);
  }
  
  h3 {
    font-size: calc(12px + 2vmin);
    text-shadow: 4px 4px 4px var(--background-light-color);
  };
  
  div {
    box-sizing: border-box;
  };
  
  p {
    font-size: calc(10px + 2vmin);
  }
    
  p:first-letter {
    float: left;
    font-family: 'Akronim', cursive;
    font-size: calc(50px + 2vmin);
    font-weight: normal;
    line-height: calc(30px + 2vmin);
    padding-left: 3px;
    padding-right: 8px;
    padding-top: 4px;
    text-shadow: 4px 4px 4px var(--background-light-color);
  }
  
  p:hover:first-letter {
    color: var(--primary-dark-color);
  }

  li {
    list-style-type: none;
  };
  
  a {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, var(--secondary-color), var(--secondary-color) 50%, var(--primary-color) 50%);
    background-position: 100%;
    background-size: 200% 100%;
    font-size: calc(10px + 2vmin);
    position: relative;
    text-decoration: none;
    transition: background-position 1s cubic-bezier(.32,2,.55,.27);
  };
  
  a:after{
    background: var(--secondary-color);
    bottom: 0;
    content: '';
    height: 1px;
    position: absolute;
    right: 0;
    transition: width 1s cubic-bezier(.32,2,.55,.27);
    width: 0;
  }
  
  a:visited,a:hover,a:active, a:hover:after {
    background-position: 0;
    width: 100%;
  }
  
  svg {
    pointer-events: none;
  }
  
  time {
    font-size: calc(8px + 2vmin);
    font-style: italic;
  };
  
  address {
  
  };
`;
