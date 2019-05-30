import styled from 'styled-components';

import Paper from 'root/components/Paper';
import SvgIcon from 'root/components/SvgIcon';
import svgDraw from 'root/theme/keyframes/svg-draw';

export const Wrap = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Column = styled('section')`
  margin: 16px;
  min-width: 260px;
`;

export const Card = styled(Paper)`
  padding: 0 12px;
`;

export const Title = styled('header')`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled(SvgIcon)`
  height: 10vmin;
  margin: 0 8px;
  width: 10vmin;
`;

export const Ornament = styled(SvgIcon)`
  bottom: -8vmin;
  height: 80vmin;
  left: 0;
  position: fixed;
  transform: rotate(5deg) scale(-1, 1);
  width: 80vmin;
  z-index: 2;

  use {
    animation: ${svgDraw(-19900, 0.15, '#f50057')} 21s 5s both;
    stroke-dasharray: 31294, 31294;
    stroke: #000;
  }
`;