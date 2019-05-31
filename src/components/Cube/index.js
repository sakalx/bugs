import React from 'react';

import {connect} from 'react-redux';
import Side from './Side';

import {Cube} from './style';


function CubeComponent({page}) {

  return (
      <Cube
          cubeSize='40vmin'
          out={page.active}
          viewportSize='65vmin'
      >
        {/*Front*/}
        <Side label='About'/>
        {/*Back*/}
        <Side label='Contact'/>
        {/*Right*/}
        <Side label='Education'/>
        {/*Left*/}
        <Side label='Experience'/>
        {/*Top*/}
        <Side label='Skills'/>
        {/*Bottom*/}
        <Side label='Accomplishments'/>
      </Cube>

  );
}

const mapStateToProps = ({page}) => ({
  page,
});

export default connect(mapStateToProps, null)(CubeComponent);