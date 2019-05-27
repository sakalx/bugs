import styled, {css} from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import SvgIcon from 'root/components/SvgIcon';

const cssBaseline = css`
  position: absolute;
  z-index: 2;
`;

export const OrnamentBottom = styled(SvgIcon)`
  ${cssBaseline};
  bottom: 0;
  height: 60vmin;
  right: 0;
  width: 60vmin;
  transform: rotate(90deg);
  
  use {
    animation: ${svgDraw(-8460, 0.2, '#f50057')} 12s 10s both;
    stroke-dasharray: 9000, 9000;
    stroke: #000;
  };
`;