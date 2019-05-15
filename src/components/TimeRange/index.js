import React from 'react';
import HorizontalBar from 'root/components/HorizontalBar';

function TimeRange({start, end}) {
  return (
      <div style={{marginBottom: '4px'}}>
        <time dateTime={start.dateTime}>{start.title}</time>
        <HorizontalBar style={{color: 'var(--background-invert-color)'}}/>
        <time dateTime={end.dateTime}>{end.title}</time>
      </div>
  );
}

export default TimeRange;
