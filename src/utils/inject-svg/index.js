export default function() {
  const VERSION = '0.0.1';
  const CACHE_KEY = 'SVG_SPRITE';
  const VERSION_KEY = 'SVG_VERSION';

  const svgSprite = localStorage.getItem(CACHE_KEY);
  const svgVersion = localStorage.getItem(VERSION_KEY);

  const insertSVG = svg => {
    const container = document.createElement('div');
    container.innerHTML = svg;
    container.style.display = 'none';
    document.body.appendChild(container);
  };

  if (svgVersion === VERSION && svgSprite) {
    insertSVG(svgSprite);
  } else {
    (async () => {
      const svgModule = await import('root/static/svg/symbol/svg/sprite.symbol.svg');
      const svgSprite = svgModule.default;

      insertSVG(svgSprite);
      localStorage.setItem(CACHE_KEY, svgSprite);
      localStorage.setItem(VERSION_KEY, VERSION);
    })();
  }
}