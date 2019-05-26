import styled from 'styled-components';

import glitchText from 'root/theme/keyframes/glitch-text';
import svgDrawIcon from 'root/theme/keyframes/svg-draw-icon';

import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('header')`
  align-items: center;
  display: flex;
`;

export const Title = styled('h1')`
  animation: ${glitchText} 2s cubic-bezier(.32,2,.55,.27) infinite;
  flex: 1;
  margin-right: 20vmin;
  text-align: center;
  text-transform: uppercase;
`;

export const Icon = styled(SvgIcon)`
  height: 20vmin;
  width: 20vmin;

  use {
    animation: ${svgDrawIcon} 4s;
    stroke-dasharray: 1820;
  }
`;
