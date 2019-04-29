import React, {lazy} from 'react';

import Cube from 'root/components/Cube';

import {Wrap} from './style';

const Particles = lazy(() => import('root/components/Particles'));
//const Overlays = lazy(() => import('root/components/Overlays'));
import Overlays from 'root/components/Overlays';

const App = React.memo(function App() {

  return (
      <Wrap>
        <Cube/>
        <React.Suspense fallback={<span/>}>
          <Particles/>
        </React.Suspense>
        <Overlays/>
      </Wrap>
  );
});

export default App;