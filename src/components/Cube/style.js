import styled, {css} from 'styled-components';

import {revealCube, dash} from 'root/theme/keyframes';

import Cube3D from 'react-cube3d-component';
import SvgIcon from 'root/components/SvgIcon';

export const Cube = styled(Cube3D)`
  cursor: pointer;
  position: absolute;
  z-index: 3000;
  
  ${props => props.reveal && css`
    animation: ${revealCube} 1s both cubic-bezier(.25,.75,.5,1.25);
  `};
`;

export const Icon = styled(SvgIcon)`
  height: 23vmin;
  width: 23vmin;
  
  use {
    animation: ${dash} 1s cubic-bezier(.17,.67,1,1.23);
    stroke-dasharray: 1820;
  }
`;