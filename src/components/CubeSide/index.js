import React from 'react';

import {Wrap, Title} from './style';

let isClick = false;

function CubeSide({index, label, children}) {

  const handleMouseDown = () => {
    setTimeout(() => isClick = false, 100);
    isClick = true;
  };

  const handleMouseUp = ({target}) => {
    if (isClick) {
      console.dir(target.attributes[2].value);
    }
    isClick = false;
  };

  return (
      <Wrap
          aria-label={`${label}-info`}
          component='section'
          elevation={12}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={e => handleMouseDown(e.changedTouches[0])}
          square
          tab-index={index}
      >
        <Title variant='h5' gutterBottom>
          {label}
        </Title>
        {children}
      </Wrap>
  );
}

export default CubeSide;

