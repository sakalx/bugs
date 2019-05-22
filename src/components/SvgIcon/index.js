import React from 'react';

function SvgIcon({
                   color = '#000',
                   id,
                   ...rest
                 }) {
  return (
      <svg {...rest}>
        <use fill={color} xlinkHref={`#${id}`}/>
      </svg>
  );
}

export default SvgIcon;