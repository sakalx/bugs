import styled, {css} from 'styled-components';

import revealCube from 'root/theme/keyframes/reveal-cube';
import showIn from 'root/theme/keyframes/show-in';

import Cube3D from 'react-cube3d-component';
import SvgIcon from 'root/components/SvgIcon';

export const Cube = styled(Cube3D)`
  animation: ${showIn} 1s;
  position: absolute;
  z-index: 3000;
  
  ${props => props.reveal && css`
    animation: ${revealCube} 1s both cubic-bezier(.25,.75,.5,1.25);
  `};
`;

export const Icon = styled(SvgIcon)`
  height: 23vmin;
  width: 23vmin;
`;