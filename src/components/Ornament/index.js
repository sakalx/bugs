import React from 'react';

import {SVG} from './style';

console.time('render Ornament');

function Ornament() {
  return (
      <SVG color='none' id='ornament_3'/>
  );
}

console.timeEnd('render Ornament');

export default Ornament;