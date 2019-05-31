import styled, {css} from 'styled-components';

import revealCube from 'root/theme/keyframes/reveal-cube';
import showIn from 'root/theme/keyframes/show-in';

import Cube3D from 'react-cube3d-component';

export const Cube = styled(Cube3D)`
  animation: ${showIn} 1s;
  position: absolute;
  //will-change: transform; // NOTE
  z-index: 3000;
  
  ${props => props.out && css`
    animation: ${revealCube} 1s both cubic-bezier(.25,.75,.5,1.25);
  `};
`;