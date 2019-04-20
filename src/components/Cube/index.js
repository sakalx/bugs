import React from 'react';

import Typography from '@material-ui/core/Typography';

import Cube from 'react-cube3d-component';

import {
  CubeSide,
  AboutIcon,
  AccomplishmentsIcon,
  EducationIcon,
  ContactIcon,
  SkillsIcon,
  ExperienceIcon,
} from './style';

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
          <Typography variant='h5' gutterBottom>
            About
          </Typography>
          <AboutIcon style={{fontSize: '65px'}}/>
        </CubeSide>
        {/*Back*/}
        <CubeSide elevation={12}>
          <Typography variant='h5' gutterBottom>
            Contact
          </Typography>
          <ContactIcon style={{fontSize: '65px'}}/>
        </CubeSide>
        {/*Right*/}
        <CubeSide elevation={12}>
          <Typography variant='h5' gutterBottom>
            Education
          </Typography>
          <EducationIcon style={{fontSize: '65px'}}/>
        </CubeSide>
        {/*Left*/}
        <CubeSide elevation={12}>
          <Typography variant='h5' gutterBottom>
            Experience
          </Typography>
          <ExperienceIcon style={{fontSize: '65px'}}/>
        </CubeSide>
        {/*Top*/}
        <CubeSide elevation={12}>
          <Typography variant='h5' gutterBottom>
            Skills
          </Typography>
          <SkillsIcon style={{fontSize: '65px'}}/>
        </CubeSide>
        {/*Bottom*/}
        <CubeSide elevation={12}>
          <Typography variant='h5' gutterBottom>
            Accomplishments
          </Typography>
          <AccomplishmentsIcon style={{fontSize: '65px'}}/>
        </CubeSide>
      </Cube>
  );
}

export default CubeComponent;