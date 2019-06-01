export default function() {

  const insertSVG = svgSprite => {
    const container = document.createElement('div');
    container.innerHTML = svgSprite;
    container.style.display = 'none';
    document.body.appendChild(container);
  };

  (async () => {
    const mainSvg = await import('root/static/svg/sprite/main/symbol/svg/sprite.symbol.svg');
    const mainSvgSprite = mainSvg.default;
    insertSVG(mainSvgSprite);

    const restSvg = await import('root/static/svg/sprite/rest/symbol/svg/sprite.symbol.svg');
    const restSvgSprite = restSvg.default;
    insertSVG(restSvgSprite);
  })();
}