import React from 'react';

import {connect} from 'react-redux';
import Side from './Side';

import {Cube, Icon} from './style';
import showIn from 'root/theme/keyframes/show-in';

const sides = [
  // Front
  'About',
  // Back
  'Contact',
  // Right
  'Education',
  // Left
  'Experience',
  // Top
  'Skills',
  // Bottom
  'Accomplishments',
];

function CubeComponent({page}) {

  return (
      <Cube
          cubeSize='50vmin'
          out={page.active}
          viewportSize='70vmin'
      >
        {sides.map((label) =>
            <Side key={label} label={label}>
              {page.active
                  ? <Icon color='var(--secondary-color)' id='icon-Close'/>
                  : <Icon color='var(--background-invert-color)' id={`icon-${label}`}/>
              }
            </Side>,
        )}
      </Cube>

  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(CubeComponent);