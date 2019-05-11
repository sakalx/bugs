import React from 'react';

import Cube from 'root/components/Cube';
import Particles from 'root/components/Particles';
import Overlays from 'root/components/Overlays';
import Borders from 'root/components/Borders';

import {Wrap} from './style';

function App() {
  return (
      <Wrap role='main'>
        <Cube/>
        <Particles/>
        <Overlays/>
        <Borders/>
      </Wrap>
  );
}

export default App;