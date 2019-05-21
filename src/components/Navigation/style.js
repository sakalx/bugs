import styled from 'styled-components';

export const Nav = styled('nav')`
  left: 0;
  overflow: hidden;
  padding-left: 16px;
  padding-top: 25px;
  position: absolute;
  top: 0;
  z-index: 2;
`;

export const WrapItem = styled('div')`
  color: var(--primary-color);
  cursor: pointer;
  font-size: 18px;
  margin: 8px 0;
  position: relative;
  text-decoration: underline;
  
  span {
    display: inline-block;
    transition: transform .5s cubic-bezier(.5,-.75,.7,2);
  }
  
  svg {
    bottom: 0;
    height: 30px;
    left: 30%;
    position: absolute;
    transform: scale(0);
    transition: transform .5s;
    width: 30px;
  }
  
  :hover span {
    transform: translateX(-200%);
  }
  
  :hover svg {
    transform: scale(1);
  }
`;