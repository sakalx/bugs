import React, {useLayoutEffect} from 'react';

function Particles() {
  useLayoutEffect(() => {
    (async () => {
      const particlesModule = await import('root/utils/particles');
      particlesModule.default('particles-effect');
    })();
  }, []);

  return (
      <div
          id='particles-effect'
          style={{
            height: '100vh',
            position: 'absolute',
            width: '100vw',
            zIndex: 1,
          }}
      />
  );
}

export default Particles;