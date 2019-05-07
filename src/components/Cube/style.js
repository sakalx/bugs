import styled, {css, keyframes} from 'styled-components';

import Cube3D from 'react-cube3d-component';
import SvgIcon from 'root/components/SvgIcon';

const moveCube = keyframes`
  0% {
    left: 32vw;
    top: 30vh;
  } 
  50% {transform: scale(0);} 
  100% {
    left: -21vmin;
    top: -21vmin;
    transform: scale(.3);
  }
`;

export const Cube = styled(Cube3D)`
  cursor: pointer;
  position: absolute;
  z-index: 3000;
  
  ${props => props.reveal && css`
    animation: ${moveCube} 1s both;;
  `};
`;

export const Icon = styled(SvgIcon)`
  pointer-events: none;
  width: 23vmin;
  height: 23vmin;
`;

//font-size: calc(16px + 6 * ((100vw - 320px) / 680));
// font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
// font-size: calc(12px + 2vmin);