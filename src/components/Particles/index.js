import React, {useLayoutEffect} from 'react';

function Particles() {
  useLayoutEffect(() => {
    (async () => {
      const module = await import('root/utils/particles');
      module.default('particles-effect');
    })();
  }, []);

  return (
      <div
          id='particles-effect'
          aria-labelledby='particles-background'
          style={{
            height: '100vh',
            position: 'absolute',
            width: '100vw',
            zIndex: 1,
          }}/>
  );
}

export default React.memo(Particles);