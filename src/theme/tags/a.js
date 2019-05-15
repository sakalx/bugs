import {css} from 'styled-components';

export default css`
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
`;