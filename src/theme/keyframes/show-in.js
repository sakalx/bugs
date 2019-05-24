import {keyframes} from 'styled-components';

export default keyframes`
  0% {
    transform: translateX(100vw) translateY(-100vh) scale(0) rotate(720deg);
  } 
  50% {
    transform: translateX(-15vw) translateY(15vh) scale(.1) rotate(360deg);
  } 
  100% {
    transform: translateX(0) translateY(0) scale(1) rotate(0);
  }
`;