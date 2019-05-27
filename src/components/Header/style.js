import styled from 'styled-components';

import glitchText from 'root/theme/keyframes/glitch-text';
import svgDraw from 'root/theme/keyframes/svg-draw';
import svgDrawIcon from 'root/theme/keyframes/svg-draw-icon';

import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('header')`
  align-items: center;
  display: flex;
  position: relative;
`;

export const Icon = styled(SvgIcon)`
  height: 20vmin;
  width: 20vmin;

  use {
    animation: ${svgDrawIcon} 4s;
    stroke-dasharray: 1820;
  };
`;

export const Title = styled('h1')`
  animation: ${glitchText} 2s cubic-bezier(.32,2,.55,.27) infinite;
  flex: 1;
  margin-right: 20vmin;
  text-align: center;
  text-transform: uppercase;
`;

export const Ornament = styled(SvgIcon)`
  height: 60vmin;
  position: absolute;
  right: 5vw;
  top: -15vmin;
  transform: rotate(180deg);
  width: 80vmin;
  z-index: 2;

  use {
    animation: ${svgDraw(-8300, 0.2, '#f50057')} 12s 1s both;
    stroke-dasharray: 8300, 8300;
    stroke: #000;
  };
`;