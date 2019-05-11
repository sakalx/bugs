import  {keyframes} from 'styled-components';

export const fadeIn = keyframes`
  from {
    transform: scale(5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;