import styled, {css} from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import SvgIcon from 'root/components/SvgIcon';

const cssBaseline = css`
  position: absolute;
  z-index: 2;
`;

export const TopRight = styled(SvgIcon)`
  ${cssBaseline};
  height: 80vmin;
  right: -10px;
  top: -60px;
  width: 80vmin;

  use {
    animation: ${svgDraw(-8460, 0.4, 'rgb(255,0,255)')} 12s 12s both;
    stroke-dasharray: 9000, 9000;
    stroke: rgb(0,255,255);
  }
`;

export const BottomRight = styled(SvgIcon)`
  ${cssBaseline};
  bottom: -40px;
  right: 0;
  height: 60vmin;
  width: 60vmin;

  use {
    animation: ${svgDraw(-19900, 0.5, 'rgb(255,0,0)')} 12s 8s both;
    stroke-dasharray: 31294, 31294;
    stroke: rgb(0,255,255);
  }
`;

export const BottomLeft = styled(SvgIcon)`
  ${cssBaseline};
  bottom: -40px;
  height: 100vmin;
  left: -60px;
  transform: rotate(180deg);
  width: 100vmin;

  use {
    animation: ${svgDraw(-2650, 0.2, 'rgb(255,0,255)')} 12s 2s both;
    stroke-dasharray: 3000, 3000;
    stroke: rgb(0,255,255);
  }
`;