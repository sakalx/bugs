import React, {useEffect} from 'react';

import animation from './animation';

import {Container} from './style';

function Zoom({
                zoomIn = false,
                children,
              }) {

  useEffect(() => {
    (zoomIn)
        ? animation('in')
        : animation('out');
  }, [zoomIn]);

  return (
      <Container>
        {children}
      </Container>
  );
}

export default Zoom;