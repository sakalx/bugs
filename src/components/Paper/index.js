import React from 'react';

import {Wrap} from './style';

function Paper({children, ...rest}) {
  return (
      <Wrap {...rest}>
        {children}
      </Wrap>
  );
}

export default Paper;