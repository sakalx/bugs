import styled, {css} from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import Paper from 'root/components/Paper';
import SvgIcon from 'root/components/SvgIcon';

export const Education = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 3vh 0;
  
  ${props => props.rtl && css`
    justify-content: flex-end;
  `};
`;

export const Card = styled(Paper)`
  padding-bottom: 16px;
  
  @media (max-width: 580px) {
    flex: 1;
  }
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
  bottom: -35px;
  height: 80vmin;
  left: 30vw;
  position: fixed;
  transform: rotate(35deg);  
  width: 80vmin;
  z-index: 2;
    
  use {
    animation: ${svgDraw(-2620, 0.1, '#f50057')} 21s 5s both;
    stroke-dasharray: 2620, 2620;
    stroke: #000;
  };
`;