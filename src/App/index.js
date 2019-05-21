import React from 'react';

import Borders from 'root/components/Borders';
import Cube from 'root/components/Cube';
import Navigation from 'root/components/Navigation';
import Overlays from 'root/components/Overlays';
import Particles from 'root/components/Particles';

import {Wrap} from './style';

function App() {
  return (
      <Wrap role='main'>
        <Navigation/>
        <Cube/>
        <Particles/>
        <Overlays/>
        <Borders/>
      </Wrap>
  );
}

export default App;