import styled from 'styled-components';

export const Viewport = styled('div')`
  align-items: center;
  background: darkgoldenrod;
  display: flex;
  height: 50vh;
  justify-content: center;
  width: 50vh;

position: relative;
`;

export const Boiler = styled('div')`
  background: aqua;
  height: 35vh;
  width: 35vh;
  
  transform: rotateX(var(--y, 0deg)) rotateY(var(--x, 0deg));
  transition: transform .7s ease-out;
  
  transform-style: preserve-3d;
  
  perspective-origin: 100% 200px;
`;

export const BoilerFront = styled('section')`
position: absolute;
user-select: none;

  transform: translateZ(150px);
  background: forestgreen;
  width: 100%;
  height: 100%;
`;

export const BoilerBack = styled('section')`
  position: absolute;
  user-select: none;

  transform: rotateY(180deg) translateZ(150px);
  background: lavender;
  width: 100%;
  height: 100%;
`;

export const BoilerRight = styled('section')`
position: absolute;
user-select: none;

  transform: rotateY(90deg) translateZ(150px);
  background: rebeccapurple;
  width: 100%;
  height: 100%;
`;

export const BoilerLeft = styled('section')`
position: absolute;
user-select: none;

  transform: rotateY(-90deg) translateZ(150px);
  background: cornsilk;
  width: 100%;
  height: 100%;
`;

export const BoilerTop = styled('section')`
position: absolute;
user-select: none;

  transform: rotateX(90deg) translateZ(150px);
  background: salmon;
  width: 100%;
  height: 100%;
`;

export const BoilerBottom = styled('section')`
position: absolute;
user-select: none;

  transform: rotateX(-90deg) translateZ(150px);
  background: cornflowerblue;
  width: 100%;
  height: 100%;
`;