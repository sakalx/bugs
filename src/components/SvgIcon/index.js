import React from 'react';

function SvgIcon({
                   ariaLabelledby = 'icon',
                   color = '#000',
                   id,
                   ...rest
                 }) {
  return (
      <svg aria-labelledby={id} role='img' {...rest}>
        <use fill={color} xlinkHref={`#${id}`}/>
      </svg>
  );
}

export default SvgIcon;