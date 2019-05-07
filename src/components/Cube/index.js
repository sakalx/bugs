import React from 'react';

import {connect} from 'react-redux';
import Side from './Side';

import {Cube, Icon} from './style';

const sides = [
  {
    index: 'front',
    label: 'About',
  }, {
    index: 'back',
    label: 'Contact',
  }, {
    index: 'right',
    label: 'Education',
  }, {
    index: 'left',
    label: 'Experience',
  }, {
    index: 'top',
    label: 'Skills',
  }, {
    index: 'bottom',
    label: 'Accomplishments',
  },
];

function CubeComponent({page}) {

  return (
      <Cube
          cubeSize='50vmin'
          viewportSize='70vmin'
          reveal={!!page.active}
      >
        {sides.map(({index, label}) =>
            <Side key={index} label={label} index={index}>
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