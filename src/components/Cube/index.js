import React from 'react';

import {connect} from 'react-redux';

import Side from './Side';
import {
  Cube,
  AboutIcon,
  AccomplishmentsIcon,
  CloseIcon,
  ContactIcon,
  EducationIcon,
  ExperienceIcon,
  SkillsIcon,
} from './style';

const sides = [
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

function CubeComponent({page}) {

  return (
      <Cube
          cubeSize='50vmin'
          viewportSize='70vmin'
          reveal={!!page.active}
      >
        {sides.map(({index, label, Icon}) =>
            <Side key={index} label={label} index={index}>
              {page.active ?  <CloseIcon/> : Icon}
            </Side>,
        )}
      </Cube>

  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(CubeComponent);