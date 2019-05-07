import React from 'react';

import Cube from 'root/components/Cube';

import {Wrap} from './style';

import Particles from 'root/components/Particles';
import Overlays from 'root/components/Overlays';

function App() {
  return (
      <Wrap>
        <Cube/>
        <Particles/>
        <Overlays/>
      </Wrap>
  );
}

export default App;