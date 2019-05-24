import styled from 'styled-components';

import slideDown from 'root/theme/keyframes/slide-down';

export const Nav = styled('ul')`
  animation: ${slideDown} 2s;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  left: 0;
  margin: 0 21px;
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