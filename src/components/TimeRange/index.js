import React from 'react';

import {Wrap} from './style';

function TimeRange({start, end}) {
  return (
      <Wrap>
        <time dateTime={start.dateTime}>{start.title}</time>
        <span style={{margin: '0 4px', color: 'var(--background-invert-color)'}}>
          -
        </span>
        <time dateTime={end.dateTime}>{end.title}</time>
      </Wrap>
  );
}

export default TimeRange;
