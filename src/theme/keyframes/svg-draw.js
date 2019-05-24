import {keyframes} from 'styled-components';

export default function(
    dashoffset = 10,
    opacity = 1,
    color = '#000',
) {
  return keyframes`
    from {
      stroke: ${color};
      stroke-dashoffset: ${dashoffset};
      opacity: 1;
    } 
    to{
      stroke-dashoffset: 10;
      opacity: ${opacity};
    }`;
}