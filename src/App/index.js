import React from 'react';

import Cube from 'root/components/Cube';

import {Wrap} from './style';

import Particles from 'root/components/Particles';
import Overlays from 'root/components/Overlays';





function App() {

  //Capa_1 svg_love svg_ready


  return (
      <div>

        <svg>
          <use fill='red' xlinkHref='#book' />
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