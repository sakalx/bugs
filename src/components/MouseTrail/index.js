import React, {useRef, useLayoutEffect} from 'react';

function MouseTrail() {
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const viewport = document.getElementById('overlay-viewport');
    const canvas = canvasEl.current;

    (async () => {
      const module = await import('root/utils/mouse-trail');
      module.default(viewport, canvas);
    })();
  }, []);

  return (
      <canvas ref={canvasEl} style={{opacity: .1}} aria-labelledby='mouse-trail'/>
  );
}

export default React.memo(MouseTrail);