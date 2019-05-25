import {keyframes} from 'styled-components';

export default keyframes`
  0% {
    right: 32vw;
    top: 30vh;
  } 
  50% {
    transform: scale(0) rotate(180deg);
  } 
  100% {
    right: -21vmin;
    top: -21vmin;
    transform: scale(.3) rotate(0);
  }
`;