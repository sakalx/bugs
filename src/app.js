import React from 'react';

import Cube from 'root/components/Cube';
import AboutPage from 'root/pages/About';

function App() {


  return (
      <main style={{
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        position: 'relative',
      }}
      >
        <Cube/>

        <AboutPage/>
      </main>
  );
}

export default App;