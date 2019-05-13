import {keyframes} from 'styled-components';

export const revealCube = keyframes`
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

export const dash = keyframes`
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

export const glitch = keyframes`
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(77,171,245, .5), -0.4389924193300864px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(77,171,245, .5), -2.7928974010788217px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(77,171,245, .5), -0.02956275843481219px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(77,171,245, .5), -0.40218538552878136px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(77,171,245, .5), -3.4794037899852017px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(77,171,245, .5), -1.6125630401149584px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(77,171,245, .5), -0.7015590085143956px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(77,171,245, .5), -3.896914047650351px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(77,171,245, .5), -3.870905614848819px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(77,171,245, .5), -2.231056963361899px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(77,171,245, .5), -0.08084290417898504px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(77,171,245, .5), -2.3758461067427543px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(77,171,245, .5), -2.202193051050636px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(77,171,245, .5), -2.8638780614874975px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(77,171,245, .5), -0.48874025155497314px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(77,171,245, .5), -1.8948491305757957px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(77,171,245, .5), -0.0833037308038857px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(77,171,245, .5), -0.09769827255241735px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(77,171,245, .5), -3.443339761481782px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(77,171,245, .5), -2.1841838852799786px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(77,171,245, .5), -2.6208764473832513px 0 1px rgba(245,0,87, .3), 0 0 3px;
}
`;