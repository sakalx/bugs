import styled, {css, keyframes} from 'styled-components';

import Cube3D from 'react-cube3d-component';

import About from 'root/svg/About';
import Accomplishments from 'root/svg/Accomplishments';
import Close from 'root/svg/Close';
import Contact from 'root/svg/Contact';
import Education from 'root/svg/Education';
import Experience from 'root/svg/Experience';
import Skills from 'root/svg/Skills';

const moveCube = keyframes`
  0% {
    left: 32vw;
    top: 30vh;
  } 
  50% {transform: scale(0);} 
  100% {
    left: -21vmin;
    top: -21vmin;
    transform: scale(.3);
  }
`;

export const Cube = styled(Cube3D)`
  cursor: pointer;
  position: absolute;
  z-index: 3000;
  
  ${props => props.reveal && css`
    animation: ${moveCube} 1s both;;
  `};
`;

const _iconStyle = css`
  font-size: 65px !important;
  pointer-events: none;
`;

export const AboutIcon = styled(About)`
  ${_iconStyle}
`;

export const AccomplishmentsIcon = styled(Accomplishments)`
  ${_iconStyle}
`;

export const ContactIcon = styled(Contact)`
  ${_iconStyle}
`;

export const EducationIcon = styled(Education)`
  ${_iconStyle}
`;

export const ExperienceIcon = styled(Experience)`
  ${_iconStyle}
`;

export const SkillsIcon = styled(Skills)`
  ${_iconStyle}
`;

export const CloseIcon = styled(Close)`
  font-size: 100px !important;
  pointer-events: none;
`;