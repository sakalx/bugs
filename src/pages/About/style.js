import styled from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import SvgIcon from 'root/components/SvgIcon';

export const Wrap = styled('div')`
  column-width: 45vw;
`;

export const OrnamentBottom = styled(SvgIcon)`
  bottom: 0;
  height: 60vmin;
  position: fixed;
  right: 0;
  transform: rotate(90deg);
  width: 60vmin;
  z-index: 2;
  
  use {
    animation: ${svgDraw(-8460, 0.1, '#f50057')} 21s 5s both;
    stroke-dasharray: 9000, 9000;
    stroke: #000;
  };
`;