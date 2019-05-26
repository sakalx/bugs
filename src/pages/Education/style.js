import styled, {css} from 'styled-components';
import svgDraw from 'root/theme/keyframes/svg-draw';

import SvgIcon from 'root/components/SvgIcon';

export const Education = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5vmin;
  position: relative;
  
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


const cssBaseline = css`
  position: absolute;
  z-index: 2;
`;

export const OrnamentGeek = styled(SvgIcon)`
  ${cssBaseline};
  bottom: 85px;
  height: 55vmin;
  right: 75px;
  width: 80vmin;
  
  use {
    animation: ${svgDraw(-8300, 0.6, 'rgb(255,0,255)')} 12s 1s both;
    stroke-dasharray: 8300, 8300;
    stroke: rgb(0,255,255);
  }
`;

export const OrnamentJs = styled(SvgIcon)`
  ${cssBaseline};
  bottom: 0;
  height: 70vmin;
  left: -45px;
  transform: rotate(130deg);
  width: 60vmin;
    
  use {
    animation: ${svgDraw(-2620, 0.3, 'rgb(255,0,255)')} 12s 4s both;
    stroke-dasharray: 2620, 2620;
    stroke: rgb(0,255,255);
  }
`;

export const OrnamentUdacity = styled(SvgIcon)`
  ${cssBaseline};
  bottom: 10px;
  height: 55vmin;
  right: -85px;
  width: 80vmin;
 
  use {
    animation: ${svgDraw(-8460, 0.6, 'rgb(255,0,255)')} 12s 12s both;
    stroke-dasharray: 8460, 8460;
    stroke: rgb(0,255,255);
  }
`;