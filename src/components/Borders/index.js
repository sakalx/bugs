import React from 'react';

import {BottomLeft, BottomRight, TopLeft, TopRight} from './style';

function Borders() {
  return (
      <React.Fragment>
        <TopLeft id='border-t-left'/>
        <TopRight id='border-t-right'/>
        <BottomRight id='border-b-right'/>
        <BottomLeft id='border-b-left'/>
      </React.Fragment>
  );
}

export default Borders;