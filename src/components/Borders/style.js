import styled, {css} from 'styled-components';

import fadeIn from 'root/theme/keyframes/fade-in';

import SvgIcon from 'root/components/SvgIcon'

const cssBaseline = css`
  animation: ${fadeIn} 2s cubic-bezier(.57,.21,.69,3.25);
  height: 90vmin;
  position: absolute;
  width: 90vmin;
  z-index: 1000;
`;

export const TopLeft = styled(SvgIcon)`
  ${cssBaseline};
  left: -4.7vmin;
  top: -3vmin;
`;

export const TopRight = styled(SvgIcon)`
  ${cssBaseline};
  top: -7.5vmin;
  right: -7.2vmin;
`;

export const BottomRight = styled(SvgIcon)`
  ${cssBaseline};
  bottom: -2.7vmin;
  right: -5vmin;
`;

export const BottomLeft = styled(SvgIcon)`
  ${cssBaseline};
  bottom: -8.5vmin;
  left: -12vmin;
`;


