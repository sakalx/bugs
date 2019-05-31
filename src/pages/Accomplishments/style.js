import styled from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import Link from 'root/components/Link';
import Paper from 'root/components/Paper';
import SvgIcon from 'root/components/SvgIcon';

export const Card = styled(Paper)`
  justify-content: flex-start;
  margin: 12px;
  padding: 8px;
`;

export const Item = styled('li')`
  text-align: unset;
`;

export const WrapLink = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CodeLink = styled(Link)`
  :hover svg use {
    fill: var(--secondary-color);
  };
`;

export const Icon = styled(SvgIcon)`
  height: 30px;
  margin: 0 8px;
  width: 30px;
`;

export const NpmIcon = styled(SvgIcon)`
  height: 20px;
  width: 40px;
`;

export const Languages = styled('div')`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const TitleLang = styled('section')`
  align-items: center;
  display: flex;
`;

export const Row = styled('div')`
  display: flex;
  margin: 0 8px;
`;

export const Ornament = styled(SvgIcon)`
  bottom: -1vmin;
  height: 90vmin;
  left: 0;
  position: fixed;
  transform: rotate(90deg);
  width: 90vmin;
  z-index: 2;

  use {
    animation: ${svgDraw(-8460, 0.2, '#f50057')} 21s 5s both;
    stroke-dasharray: 9000, 9000;
    stroke: #000;
  };
`;