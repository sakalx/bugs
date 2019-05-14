import React from 'react';

function VerticalBar({style}) {
  return (
      <span style={{
        color: 'var(--background-invert-color)',
        fontSize: '2em',
        margin: '0 4px',
        ...style,
      }}>
        &#124;
      </span>
  );
}

export default VerticalBar;
