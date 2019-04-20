import styled, {css} from 'styled-components';

import About from 'root/svg/AboutIcon';
import Accomplishments from 'root/svg/AccomplishmentsIcon';
import Contact from 'root/svg/ContactIcon';
import Education from 'root/svg/EducationIcon';
import Experience from 'root/svg/ExperienceIcon';
import Skills from 'root/svg/SkillsIcon';

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