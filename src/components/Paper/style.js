import styled from 'styled-components';

export const Wrap = styled('div')`
  align-items: center;
  background: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  
  &:before, &:after {
    border-radius: 100px / 10px;
    bottom: 0;
    box-shadow: 0 0 20px rgba(0,0,0, .8);
    content: '';
    left: 10px;
    position: absolute; 
    right: 10px;
    top: 10%;
    z-index: -1;
  }
`;