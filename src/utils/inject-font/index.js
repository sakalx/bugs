export default function(fontID) {
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'http://fonts.googleapis.com/css?family=' + fontID;
  head.appendChild(link);
}
