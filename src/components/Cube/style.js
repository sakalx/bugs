import styled from 'styled-components';

export const Viewport = styled('div')`
  align-items: center;
  background: darkgoldenrod;
  display: flex;
  height: 50vh;
  justify-content: center;
  width: 50vh;
`;

export const Boiler = styled('div')`
  background: aqua;
  height: 35vh;
  transform: rotateX(var(--x, 0)) rotateY(var(--y, 0));
  width: 35vh;
  transition: transform .7s ease-out;
`;