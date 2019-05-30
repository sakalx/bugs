import styled from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import Paper from 'root/components/Paper';
import SvgIcon from 'root/components/SvgIcon';

export const WrapTitle = styled('header')`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`;

export const Wrap = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 60vh;
`;

export const Card = styled(Paper)`
  flex-direction: column;
  flex: 1;
  margin: 16px;
  padding: 16px;
`;

export const Icon = styled(SvgIcon)`
  flex: 0 0 8vmin;
  height: 8vmin;
  margin: 0 8px;
  width: 8vmin;
`;

export const Ornament = styled(SvgIcon)`
  bottom: -8vmin;
  height: 95vmin;
  left: 15vw;
  position: fixed;
  transform: rotate(-15deg) scale(-1, 1);;  
  width: 95vmin;
  z-index: 2;
    
  use {
    animation: ${svgDraw(-2620, 0.15, '#f50057')} 21s 5s both;
    stroke-dasharray: 2620, 2620;
    stroke: #000;
  };
`;