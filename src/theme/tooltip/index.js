import {css} from 'styled-components';

export default css`
  [data-tooltip] {
    position: relative;
  };
  [data-tooltip]:before {
    background-color: var(--background-invert-color);
    border-radius: 4px;
    bottom: 0;
    color: var(--text-invert-color);
    content: attr(data-tooltip);
    font-size: 12px;
    left: 30%;
    letter-spacing: 1.5px;
    padding: 2px 6px;
    position: absolute;
    transform: scale(0);
    transition: all .5s cubic-bezier(.32,2,.55,.27);
    transition-property: transform, bottom;
    z-index: 9999;
  };
  [data-tooltip]:hover:before {
    bottom: 100%;
    transform: scale(1);
  };
`;