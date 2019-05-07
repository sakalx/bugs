export default function() {
  const CACHE_KEY = 'SVG_SPRITE';
  const svgSprite = localStorage.getItem(CACHE_KEY);

  const insertSVG = svg => {
    const container = document.createElement('div');
    container.innerHTML = svg;
    container.style.display = 'none';
    document.body.appendChild(container);
  };

  if (svgSprite) {
    insertSVG(svgSprite);
  } else {
    (async () => {
      const svgModule = await import('root/static/svg/symbol/svg/sprite.symbol.svg');
      const svgSprite = svgModule.default;

      insertSVG(svgSprite);
      localStorage.setItem(CACHE_KEY, svgSprite);
    })();
  }
}