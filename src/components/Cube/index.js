import React from 'react';

import Cube from 'react-cube3d-component';

import CubeSide from 'root/components/CubeSide';
import {
  AboutIcon,
  AccomplishmentsIcon,
  EducationIcon,
  ContactIcon,
  SkillsIcon,
  ExperienceIcon,
} from './style';

const data = [
  {
    index: 'front',
    label: 'About',
    Icon: <AboutIcon/>,
  }, {
    index: 'back',
    label: 'Contact',
    Icon: <ContactIcon/>,
  }, {
    index: 'right',
    label: 'Education',
    Icon: <EducationIcon/>,
  }, {
    index: 'left',
    label: 'Experience',
    Icon: <ExperienceIcon/>,
  }, {
    index: 'top',
    label: 'Skills',
    Icon: <SkillsIcon/>,
  }, {
    index: 'bottom',
    label: 'Accomplishments',
    Icon: <AccomplishmentsIcon/>,
  },
];

function CubeComponent() {
  return (
      <Cube
          cubeSize='50vmin'
          viewportSize='90vmin'
          style={{cursor: 'grab'}}
      >
        {data.map(({index, label, Icon}) =>
            <CubeSide key={index} label={label} index={index}>
              {Icon}
            </CubeSide>,
        )}
      </Cube>
  );
}

export default CubeComponent;