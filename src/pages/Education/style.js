import styled, {css} from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import SvgIcon from 'root/components/SvgIcon';

export const Education = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5vmin;
  
  ${props => props.rtl && css`
    justify-content: flex-end;
  `};
`;

export const Content = styled('section')`
  margin-right: 25px;
  
  @media (max-width: 580px) {
    flex: 1;
    margin-right: 0;
  }
`;

export const Icon = styled(SvgIcon)`
  height: 15vmin;
  width: 20vmin;
`;

export const Ornament = styled(SvgIcon)`
  bottom: -10vh;
  height: 135vh;
  left: 0;
  position: absolute;
  width: 110vw;
  z-index: 2;
    
  use {
    animation: ${svgDraw(-2620, 0.1, '#f50057')} 25s 4s both;
    stroke-dasharray: 2620, 2620;
    stroke: #000;
  };
`;