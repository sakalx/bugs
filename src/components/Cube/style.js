import styled, {css, keyframes} from 'styled-components';

import Cube3D from 'react-cube3d-component';

import CancelIcon from '@material-ui/icons/Cancel';

import About from 'root/svg/AboutIcon';
import Accomplishments from 'root/svg/AccomplishmentsIcon';
import Contact from 'root/svg/ContactIcon';
import Education from 'root/svg/EducationIcon';
import Experience from 'root/svg/ExperienceIcon';
import Skills from 'root/svg/SkillsIcon';

const moveCube = keyframes`
  0% {
    left: 32vw;
    top: 30vh;
  } 
  50% {transform: scale(0);} 
  100% {
    left: -25vmin;
    top: -25vmin;
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
export const CloseIcon = styled(CancelIcon)`
  font-size: 100px !important;
  pointer-events: none;
`;