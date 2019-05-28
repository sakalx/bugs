import styled from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import Paper from 'root/components/Paper';
import SvgIcon from 'root/components/SvgIcon';

export const Card = styled(Paper)`
  margin: 6vh 0;
  padding: 12px;
`;

export const Company = styled('header')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin-top: 12px;
`;

export const Info = styled('div')`
  flex: 1 1 120px;
  margin: 0 16px;
  text-align: center;
`;

export const Icon = styled(SvgIcon)`
  height: 10vmin;
  width: 10vmin;
`;

export const Ornament = styled(SvgIcon)`
  bottom: -10vmin;
  height: 100vmin;
  left: -60px;
  position: fixed;
  transform: rotate(180deg) scale(-1, 1);
  width: 100vmin;
  z-index: 2;

  use {
    animation: ${svgDraw(-2650, 0.1, '#f50057')} 21s 5s both;
    stroke-dasharray: 3000, 3000;
    stroke: #000;
  }
`;