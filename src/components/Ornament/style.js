import styled, {css} from 'styled-components';

import svgDraw from 'root/theme/keyframes/svg-draw';

import SvgIcon from 'root/components/SvgIcon';

const layout = css`
  position: absolute;
  z-index: 2;
`;

export const TopRight = styled(SvgIcon)`
  ${layout};
  height: 80vmin;
  right: -10px;
  top: -60px;
  width: 80vmin;

  use {
    animation: ${svgDraw(-8460, 1)} 12s both;
    stroke-dasharray: 9000, 9000;
    stroke: red;
  }
`;

export const BottomRight = styled(SvgIcon)`
  ${layout};
  bottom: -40px;
  right: 0;
  height: 60vmin;
  width: 60vmin;

  use {
    animation: ${svgDraw(-19900, 1)} 12s both;
    stroke-dasharray: 31294, 31294;
    stroke: red;
  }
`;

export const BottomLeft = styled(SvgIcon)`
  ${layout};
  bottom: -40px;
  height: 100vmin;
  left: -60px;
  transform: rotate(180deg);
  width: 100vmin;

  use {
    animation: ${svgDraw(-2650, 1)} 12s both;
    stroke-dasharray: 3000, 3000;
    stroke: red;
  }
`;