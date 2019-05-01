import React, {useLayoutEffect} from 'react';

import 'particles.js';

import particles from 'root/utils/particles';

const Particles = React.memo(function Particles() {

  useLayoutEffect(() => {
    particles('particles-effect');
  }, []);

  return (
      <div
          id='particles-effect'
          style={{
            height: '100vh',
            position: 'absolute',
            width: '100vw',
            zIndex: 1,
          }}/>
  );
});

export default Particles;