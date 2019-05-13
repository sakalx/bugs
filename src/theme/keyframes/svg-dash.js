import {keyframes} from 'styled-components';

export default keyframes`
  0% {
    fill: rgba(76,76,76, 0);
    stroke-dashoffset: -1820;
    stroke: rgba(0,0,0, 1);
  } 
  80% {
    stroke-dashoffset: 10;
    stroke: rgba(0,0,0, 1);
  }
  90% {
    fill: rgba(76,76,76, 0);
  }
  100% {
    fill: rgba(0,0,0, .5);
    stroke: rgba(0,0,0, 0);
  } 
`;