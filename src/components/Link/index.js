import React from 'react';

function Link({
                href,
                children,
              }) {
  return (
      <a
          href={href}
          rel='nofollow'
          role='link'
          target='_blank'
          title={children}
      >
        {children}
      </a>
  );
}

export default Link;
