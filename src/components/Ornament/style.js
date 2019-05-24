import styled, {keyframes} from 'styled-components';



import SvgIcon from 'root/components/SvgIcon';



const foo =  keyframes`
  from {
  stroke: rgba(255,69,255, 1);
    stroke-dashoffset: -19900;
   
  } 
  to{
  stroke: rgba(255,69,0, .1);
    stroke-dashoffset: 10;
  }
`;

export const SVG = styled(SvgIcon)`
  height: 80vmin;
  width: 80vmin;

    position: absolute;
    bottom: -40px;
    right: 0;
    z-index: 2;


//.getTotalLength()
  use {
    animation: ${foo} 25s both;
    stroke-dasharray: 31294, 31294;
  }
`;
