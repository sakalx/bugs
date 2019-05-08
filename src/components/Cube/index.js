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
          aria-labelledby='cube-navigation'
          cubeSize='50vmin'
          reveal={!!page.active}
          role='navigation'
          viewportSize='70vmin'
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