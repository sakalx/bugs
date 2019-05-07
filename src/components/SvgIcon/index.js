import React from 'react';

function SvgIcon({
                   id,
                   color = '#000',
                   ...rest
                 }) {
  return (
      <svg {...rest}>
        <use fill={color} xlinkHref={`#${id}`}/>
      </svg>
  );
}

export default SvgIcon;