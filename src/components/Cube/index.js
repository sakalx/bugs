import React from 'react';

import Cube from 'react-cube3d-component';

import AboutIcon from 'root/svg/AboutIcon';
import AccomplishmentsIcon from 'root/svg/AccomplishmentsIcon';
import ContactIcon from 'root/svg/ContactIcon';
import EducationIcon from 'root/svg/EducationIcon';
import ExperienceIcon from 'root/svg/ExperienceIcon';
import SkillsIcon from 'root/svg/SkillsIcon';

import {CubeSide} from './style';

function CubeComponent() {


  const handleClick = ({target}) => {
  };

  return (
      <Cube
          cubeSize='50vmin'
          viewportSize='90vmin'
          style={{cursor: 'grab'}}
      >
        {/*Front*/}
        <CubeSide elevation={12}>
          About
          <AboutIcon style={{fontSize: '65px'}}/>
        </CubeSide>
        {/*Back*/}
        <CubeSide elevation={12}>
          Contact
          <ContactIcon style={{fontSize: '65px'}}/>
        </CubeSide>
         {/*Right*/}
        <CubeSide elevation={12}>
          Education
          <EducationIcon style={{fontSize: '65px'}}/>
        </CubeSide>
         {/*Left*/}
        <CubeSide elevation={12}>
          Experience
          <ExperienceIcon style={{fontSize: '65px'}}/>
        </CubeSide>
         {/*Top*/}
        <CubeSide elevation={12}>
          Skills
          <SkillsIcon style={{fontSize: '65px'}}/>
        </CubeSide>
         {/*Bottom*/}
        <CubeSide elevation={12}>
          Accomplishments
          <AccomplishmentsIcon style={{fontSize: '65px'}}/>
        </CubeSide>
      </Cube>
  );
}

export default CubeComponent;