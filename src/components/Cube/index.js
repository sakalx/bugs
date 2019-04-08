import React from 'react';

import {
  BoilerBack,
  BoilerBottom,
  BoilerFront,
  BoilerLeft,
  BoilerRight,
  Boiler,
  BoilerTop,
  Viewport,
} from './style';

function Cube() {
  const bodyStyle = document.body.style;

  let upperSideDown = false;
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

  const rotate = (x, y) => {
    bodyStyle.setProperty('--x', x + 'deg');
    bodyStyle.setProperty('--y', y + 'deg');
  };

  const handleStopMoving = () => {
    if (x.startPosition) {
      console.log('stopMoving');
      const normalizeY = Math.abs(y.current % 360);
      upperSideDown = normalizeY >= 90 && normalizeY <= 270;
      x.startPosition = y.startPosition = 0;
      x.prevPosition = x.current;
      y.prevPosition = y.current;
    }
  };

  const handleStartMoving = e => {
    console.log('handleStartMoving');
    x.startPosition = e.clientX;
    y.startPosition = e.clientY;
  };

  const handleMove = e => {
    if (x.startPosition) {
      console.log('handleMove');
      const distanceX = e.clientX - x.startPosition;

      const nextX = upperSideDown
          ? x.prevPosition - distanceX
          : x.prevPosition + distanceX;
      const nextY = y.prevPosition - (e.clientY - y.startPosition);

      const isXChanged = nextX > x.current + 20 || nextX < x.current - 20;
      const isYChanged = nextY > y.current + 20 || nextY < y.current - 20;

      if (isXChanged || isYChanged) {
        x.current = nextX;
        y.current = nextY;
        rotate(nextX, nextY);
      }
    }
  };

  return (
      <Viewport
          onMouseDown={handleStartMoving}
          onMouseMove={handleMove}
          onMouseUp={handleStopMoving}
          // onMouseLeave={handleStopMoving}
          onMouseOut={handleStopMoving}
          onTouchStart={e => handleStartMoving(e.changedTouches[0])}
          onTouchMove={e => handleMove(e.changedTouches[0])}
          onTouchEnd={handleStopMoving}
      >
        <Boiler>
          <BoilerFront>Front</BoilerFront>
          <BoilerBack>Back</BoilerBack>
          <BoilerRight>Right</BoilerRight>
          <BoilerLeft>Left</BoilerLeft>
          <BoilerTop>TOP</BoilerTop>
          <BoilerBottom>Bottom</BoilerBottom>
        </Boiler>
      </Viewport>
  );
}

export default Cube;