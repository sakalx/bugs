import styled, {css} from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import SvgIcon from 'root/components/SvgIcon';

const cssBaseline = css`
  position: absolute;
  z-index: 2;
`;

export const OrnamentTop = styled(SvgIcon)`
  ${cssBaseline};
  height: 60vmin;
  right: 90px;
  top: -65px;
  transform: rotate(180deg);
  width: 80vmin;

  use {
    animation: ${svgDraw(-8300, 0.8, 'rgb(255,0,255)')} 12s 2s both;
    stroke-dasharray: 8300, 8300;
    stroke: rgb(0,255,255);
  }
`;

export const OrnamentBottom = styled(SvgIcon)`
  ${cssBaseline};
  bottom: 0;
  height: 60vmin;
  right: 0;
  width: 60vmin;
  transform: rotate(90deg);
  
  use {
    animation: ${svgDraw(-8460, 0.8, 'rgb(255,0,255)')} 12s 10s both;
    stroke-dasharray: 9000, 9000;
    stroke: rgb(0,255,255);
  }
`;