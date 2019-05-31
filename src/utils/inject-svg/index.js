export default function() {
  const VERSION = '0.0.12';
  const MAIN_CACHE_KEY = 'SVG_SPRITE/main/';
  const REST_CACHE_KEY = 'SVG_SPRITE/rest/';
  const VERSION_KEY = 'SVG_VERSION/';

  const svgVersion = localStorage.getItem(VERSION_KEY);
  const mainSvgSprite = localStorage.getItem(MAIN_CACHE_KEY);
  const restSvgSprite = localStorage.getItem(REST_CACHE_KEY);

  const insertSVG = (key, svgSprite) => {
    const container = document.createElement('div');
    container.innerHTML = svgSprite;
    container.style.display = 'none';
    document.body.appendChild(container);

    localStorage.setItem(key, svgSprite);
    localStorage.setItem(VERSION_KEY, VERSION);
  };

  if (svgVersion === VERSION && mainSvgSprite && restSvgSprite) {
    insertSVG(MAIN_CACHE_KEY, mainSvgSprite);
    insertSVG(REST_CACHE_KEY, restSvgSprite);
  } else {
    (async () => {
      const mainSvg = await import('root/static/svg/sprite/main/symbol/svg/sprite.symbol.svg');
      const mainSvgSprite = mainSvg.default;
      insertSVG(MAIN_CACHE_KEY, mainSvgSprite);

      const restSvg = await import('root/static/svg/sprite/rest/symbol/svg/sprite.symbol.svg');
      const restSvgSprite = restSvg.default;
      insertSVG(REST_CACHE_KEY, restSvgSprite);
    })();
  }
}