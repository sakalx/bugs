import styled from 'styled-components';

import fadeIn from 'root/theme/keyframes/fade-in';

export const Wrap = styled('div')`
  align-items: center;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  transition: all .3s ease;
  transition-property: opacity, transform;
  user-select: none;
  
  :hover {
    opacity: .97;
    transform: rotate(360deg);
  }
`;

export const Title = styled('h3')`
  pointer-events: none;
  text-transform: uppercase;
  animation: ${fadeIn} 1s cubic-bezier(.32,2,.55,.27);
`;