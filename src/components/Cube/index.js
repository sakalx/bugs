import React from 'react';

import {Viewport, Boiler} from './style';

function Cube() {
  const bodyStyle = document.body.style;

  let isMoving = false;
  const x = {
    current: 0,
    prevPosition: 0,
    startPosition: 0,
  };
  const y = {
    current: 0,
    prevPosition: 0,
    startPosition: 0,
  };

  const handleStopMoving = () => {

    if (isMoving) {
      console.log('stopMoving');
      isMoving = false;
      x.startPosition = y.startPosition = 0;
      x.prevPosition = x.current;
      y.prevPosition = y.current;
    }
  };

  const handleTouchStart = e => {
    const touch = e.changedTouches[0];
    // x.startPosition = touch.clientX;
    // y.startPosition = touch.clientY;
    // viewport.addEventListener('touchend', handleStopMoving);
    //viewport.addEventListener('touchmove', handleMove.bind(null, touch));
  };

  const handleStartMoving = e => {
    console.log('handleStartMoving');
    isMoving = true;
    x.startPosition = e.clientX;
    y.startPosition = e.clientY;
  };

  const handleMove = e => {
    if (isMoving) {
      console.log('handleMove');
      x.current = (e.clientX - x.startPosition) + x.prevPosition;
      y.current = (e.clientY - y.startPosition) + y.prevPosition;

      bodyStyle.setProperty('--x', x.current + 'deg');
      bodyStyle.setProperty('--y', y.current + 'deg');
    }
  };

  return (
      <Viewport
          onMouseDown={handleStartMoving}
          onMouseMove={handleMove}
          onMouseUp={handleStopMoving}
          onMouseLeave={handleStopMoving}
          onTouchStart={e => handleStartMoving(e.changedTouches[0])}
          onTouchMove={e => handleMove(e.changedTouches[0])}
          onTouchEnd={handleStopMoving}
      >
        <Boiler/>

      </Viewport>
  );
}

export default Cube;