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

  const handleStartMoving = e => {
    console.log('handleStartMoving');
    isMoving = true;
    x.startPosition = e.clientX;
    y.startPosition = e.clientY;
  };

  const handleMove = e => {
    if (isMoving) {
      console.log('handleMove');
      const nextX = (e.clientX - x.startPosition) + x.prevPosition;
      const nextY = (e.clientY - y.startPosition) + y.prevPosition;
      const isXChanged = nextX > x.current + 20 || nextX < x.current - 20;
      const isYChanged = nextY > y.current + 20 || nextY < y.current - 20;

      if (isXChanged || isYChanged) {
        x.current = nextX;
        y.current = nextY;
        bodyStyle.setProperty('--x', nextX + 'deg');
        bodyStyle.setProperty('--y', nextY + 'deg');
        console.error(4444);
      }
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