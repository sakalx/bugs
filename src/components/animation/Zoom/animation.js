import cssVar from './css-var';
const bodyStyle = document.body.style;

const {
  height,
  width,
} = cssVar;

export default function(type = 'out') {
  let widthVal = '0';
  let heightVal = '0';

  if (type === 'in') {
    widthVal = '100vw';
    heightVal = '100vh';
  }

  bodyStyle.setProperty(width, widthVal);
  bodyStyle.setProperty(height, heightVal);
}