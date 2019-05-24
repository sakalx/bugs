import styled from 'styled-components';

export const Wrap = styled('li')`
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