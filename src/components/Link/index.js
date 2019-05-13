import React from 'react';

function Link({
                href,
                title,
              }) {
  return (
      <a
          href={href}
          rel='nofollow'
          role='link'
          target='_blank'
          title={title}
      >
        {title}
      </a>
  );
}

export default Link;
