import React, {useLayoutEffect} from 'react';

import 'particles.js';

import particles from 'root/utility/particles';

const Particles = React.memo(function Particles() {

  useLayoutEffect(() => {
    particles('particles-effect');
  }, []);

  return (
      <div
          id='particles-effect'
          style={{
            height: '100wh',
            position: 'absolute',
            width: '100vw',
            zIndex: 1,
          }}/>
  );
});

export default Particles;