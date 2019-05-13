import {keyframes} from 'styled-components';

export default keyframes`
  0% {
    left: 32vw;
    top: 30vh;
  } 
  50% {
    transform: scale(0);
  } 
  100% {
    left: -21vmin;
    top: -21vmin;
    transform: scale(.3);
  }
`;