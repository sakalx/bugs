import React from 'react';


import Cube from './components/Cube';
function App() {


  return (
      <main style={{
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
      }}
      >
        <Cube/>

      </main>
  );
}

export default App;