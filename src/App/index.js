import React, {useEffect} from 'react';

import Cube from 'root/components/Cube';

import {Wrap} from './style';

import Particles from 'root/components/Particles';
import Overlays from 'root/components/Overlays';

function App() {
  useEffect(() => {
    (async () => {
      await import('root/static/svg/book.svg');
    })();
  }, []);

  return (
      <div>

        <svg>
          <use fill='red' xlinkHref='#icon-book' />
        </svg>

      <Wrap>
        <Cube/>
        <Particles/>
        <Overlays/>
      </Wrap>
      </div>
  );
}

export default App;