import React from 'react';

import Cube from 'root/components/Cube';
function App() {

  let isMouseDown = false;
  let prevX = 0;
  let x = 0;
  let startX = 0;

  const stopMoving = () => {
    startX = null;
    isMouseDown = false;
    prevX = x;
  };

  const handleMouseDown = e => {
    isMouseDown = true;
  };

  const handleMouseUp = e => {
    stopMoving();
  };

  const handleMouseLeave = e => {
    stopMoving();
  };

  const handleMove = e => {
    if (isMouseDown) {
      if (!startX) {
        startX = e.clientX;
      }
      x = (e.clientX - startX) + prevX;
      console.log(x);
    }
  };


  return (
      <main style={{
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
      }}
      >
        <Cube/>
  {/*      <div style={{
          background: '#66083a',
          height: '150px',
          width: '150px',
          transform: `rotateX(${x}deg) rotateY(45deg)`,
        }}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onMouseMove={handleMove}
             onMouseLeave={handleMouseLeave}
        >

        </div>*/}
      </main>
  );
}

export default App;