import React from 'react';


import {Wrap} from './style';

function Sentence({children}) {
  return (
      <Wrap>
        {children}
      </Wrap>
  );
}

export default Sentence;
