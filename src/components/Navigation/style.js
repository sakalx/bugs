import styled from 'styled-components';

export const Nav = styled('ul')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  left: 0;
  margin: 0 16px;
  position: absolute;
  top: 0;
  width: auto;
  z-index: 2;
  
  @media (max-width: 620px) {
    flex-direction: row;
    height: auto;
    margin-top: 21px;
        
    li::after, li::before {
      content: none;
    }
  }
`;

export const WrapItem = styled('li')`
  align-items: center;
  color: var(--primary-color);
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: 18px;
  justify-content: center;
  padding: 8px;
  
  span {
    transition: transform .5s cubic-bezier(.5,-.75,.7,2);
  }
  
  svg {
    height: 40px;
    position: absolute;
    transform: scale(0);
    transition: transform .5s;
    width: 40px;
  }
  
  :hover span {
    transform: translateX(35vw) scale(0);
  }
  
  :hover svg {
    transform: scale(1);
  }
`;