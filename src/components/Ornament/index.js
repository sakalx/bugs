import React from 'react';

import {TopRight, BottomRight, BottomLeft} from './style';

console.time('render Ornament');

function Ornament() {
  return (
      <React.Fragment>
        <TopRight color='none' id='ornament_5'/>
        <BottomRight color='none' id='ornament_3'/>
        <BottomLeft color='none' id='ornament_4'/>
      </React.Fragment>
  );
}

console.timeEnd('render Ornament');

export default Ornament;