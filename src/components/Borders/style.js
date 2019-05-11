import styled, {css} from 'styled-components';

import {fadeIn} from 'root/theme/keyframes';
import SvgIcon from 'root/components/SvgIcon'

const cssBaseline = css`
  animation: ${fadeIn} 1s cubic-bezier(.57,.21,.69,3.25);
  height: 90vmin;
  position: absolute;
  width: 90vmin;
  z-index: 1000;
`;

export const TopLeft = styled(SvgIcon)`
  ${cssBaseline};
  left: -9vmin;
  top: -7.5vmin;
`;

export const TopRight = styled(SvgIcon)`
  ${cssBaseline};
  top: -12vmin;
  right: -11.5vmin;
`;

export const BottomRight = styled(SvgIcon)`
  ${cssBaseline};
  bottom: -7.5vmin;
  right: -9vmin;
`;

export const BottomLeft = styled(SvgIcon)`
  ${cssBaseline};
  bottom: -12.5vmin;
  left: -15.5vmin;
`;


