import styled from 'styled-components';

import glitchText from 'root/theme/keyframes/glitch-text';
import svgDash from 'root/theme/keyframes/svg-dash';

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
    animation: ${svgDash} 3s cubic-bezier(.17,.67,1,1.23);
    stroke-dasharray: 1820;
  }
`;
