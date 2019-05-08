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
  height: 23vmin;
  pointer-events: none;
  width: 23vmin;
`;