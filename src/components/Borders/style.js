import styled, {css} from 'styled-components';

import zoomInReverse from 'root/theme/keyframes/zoom-in-reverse';

import SvgIcon from 'root/components/SvgIcon';

const cssBaseline = css`
  //cubic-bezier(.57,.21,.69,3.25);
  height: 90vmin;
  position: absolute;
  width: 90vmin;
  z-index: 1000;
`;

export const TopLeft = styled(SvgIcon)`
  ${cssBaseline};
  animation: ${zoomInReverse} 2s; 
  left: -4.7vmin;
  top: -3vmin;
`;

export const TopRight = styled(SvgIcon)`
  ${cssBaseline};
  animation: ${zoomInReverse} 2s; 
  right: -7.2vmin;
  top: -7.6vmin;
`;

export const BottomRight = styled(SvgIcon)`
  ${cssBaseline};
  animation: ${zoomInReverse} 2s; 
  bottom: -2.7vmin;
  right: -5vmin;
`;

export const BottomLeft = styled(SvgIcon)`
  ${cssBaseline};
  animation: ${zoomInReverse} 2s; 
  bottom: -8.5vmin;
  left: -12vmin;
`;


