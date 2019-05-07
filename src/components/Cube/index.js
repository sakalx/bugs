import React from 'react';

import {connect} from 'react-redux';
import Side from './Side';

import {Cube, Icon} from './style';

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
          viewportSize='70vmin'
          reveal={!!page.active}
      >
        {sides.map((label) =>
            <Side key={label} label={label}>
              {page.active
                  ? <Icon id='icon-Close'/>
                  : <Icon id={`icon-${label}`}/>
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