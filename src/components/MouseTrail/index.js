import React, {useRef, useLayoutEffect} from 'react';

import mouseTrail from 'root/utility/mouse-trail';

const MouseTrail = React.memo(function MouseTrail() {
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const viewport = document.getElementById('overlay-viewport');
    const canvas = canvasEl.current;

    mouseTrail(viewport, canvas)
  }, []);

  return (
      <canvas ref={canvasEl} style={{opacity: .1}}/>
  );
});

export default MouseTrail