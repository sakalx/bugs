import {css} from 'styled-components';

export default css`
  ul {
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 1;
  }
  
  li {
    counter-increment: section;
    font-size: calc(8px + 2vmin);
    list-style: none;
    margin:0; 
    padding: 12px;
    position: relative;
    text-align: center;
  }
  
  li:after {
    border: 2px solid var(--background-light-color);;
    content : '';
    height: calc(100% - 2px); 
    position: absolute;
    top: 0;
    width: 50%;
    z-index: -1;
  }
  
  li:nth-child(odd):after {
    border-bottom-left-radius: 21px;
    border-right: none;
    border-top-left-radius: 21px;
    left: 0;
  }
  
  li:nth-child(even):after {
    border-bottom-right-radius: 21px;
    border-left: none;
    border-top-right-radius: 21px; 
    right: 0;
  }
  
  li::before {
    background-color: var(--background-light-color);
    border-radius: 50%;
    content: '';//counter(section);
    height: 12px;
    position: absolute;
    top: 35%;
    width: 12px;
  }
  
  li:nth-child(odd):before {
    left: -5px;
  }
  
  li:nth-child(even):before {
    right: -5px; 
  }
  
  li:first-child:after {
    border-top-left-radius: 0;
    border-top: none;
    height: 100%;
  }
  
  li:last-child:after  {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
  }
`;