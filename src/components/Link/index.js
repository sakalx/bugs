import React from 'react';

function Link({href, title, children, ...rest}) {
  return (
      <a
          href={href}
          rel='nofollow'
          role='link'
          target='_blank'
          title={title}
          {...rest}
      >
        {children ? children : title}
      </a>
  );
}

export default Link;
