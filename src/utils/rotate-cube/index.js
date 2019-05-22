export default function(x, y) {
  const cube = document.getElementById('-cube-viewport').style;

  cube.setProperty('--x', x);
  cube.setProperty('--y', y);
};