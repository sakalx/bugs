import styled from 'styled-components';

export const WrapContent = styled('div')`
  box-shadow: inset 0 21px 21px -16px var(--text-color), inset 0 -21px 21px -16px var(--text-color);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  position: absolute;
  width: 100vw;
  z-index: 1;
`;