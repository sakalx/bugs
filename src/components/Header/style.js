import styled from 'styled-components';

import {glitch, dash} from 'root/theme/keyframes';
import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('header')`
  align-items: center;
  display: flex;
`;

export const Title = styled('h1')`
  animation: ${glitch} 2s cubic-bezier(.32,2,.55,.27) infinite;
  flex: 1;
  margin-left: 20vmin;
  text-align: center;
  text-transform: uppercase;
`;

export const Icon = styled(SvgIcon)`
  height: 20vmin;
  width: 20vmin;
  
  use {
    animation: ${dash} 3s cubic-bezier(.17,.67,1,1.23);
    stroke-dasharray: 1820;
  }
`;
