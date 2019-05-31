import React, {useRef, useLayoutEffect} from 'react';

function MouseTrail() {
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const viewport = document.getElementById('overlay-viewport');
    const canvas = canvasEl.current;

    (async () => {
      const mouseTrailModule = await import('root/utils/mouse-trail');
      mouseTrailModule.default(viewport, canvas);
    })();
  }, []);

  return (
      <canvas ref={canvasEl} style={{opacity: .1}}/>
  );
}

export default React.memo(MouseTrail);