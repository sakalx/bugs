import styled from 'styled-components';
import {fadeIn} from 'root/theme/keyframes';

export const Wrap = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  user-select: none;
`;

export const Title = styled('h3')`
  pointer-events: none;
  text-transform: uppercase;
  animation: ${fadeIn} 1s cubic-bezier(.32,2,.55,.27);
`;