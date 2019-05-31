import React from 'react';

import {TopRight, BottomRight, BottomLeft} from './style';

function Ornament() {
  return (
      <React.Fragment>
        <TopRight color='none' id='ornament_5'/>
        <BottomRight color='none' id='ornament_3'/>
        <BottomLeft color='none' id='ornament_4'/>
      </React.Fragment>
  );
}

export default Ornament;