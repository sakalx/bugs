import TweenMax from 'gsap/TweenMax';



export default function(viewportEl, canvasEl) {
  // Configuration.
  const dots = 20; // How many dots to have.
  const speed = 5; // How fast to spin.
  const fade = .1; // How much to fade. 1 all, 0.5 half, 0 none.
  const distance = 100; // Distance from the mouse.
  const color = '#fff'; // Color of dots.

  const ctx = canvasEl.getContext('2d');
  const points = [];
  const position = {x: null, y: null};

  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;

  position.x = canvasEl.width / 2;
  position.y = canvasEl.height / 2;

  viewportEl.addEventListener('mousemove', function(e) {
    console.log('mousemove');
    TweenMax.to(position, 0.3, {x: e.clientX, y: e.clientY, ease: 'linear'});
  });


  for (let i = 0; i < dots; i++) {
    points.push({
      radius: 360 / dots * i,
      position: {x: null, y: null},
      width: Math.random() * 5,
      color,
      distance: Math.random() * (distance + 5) - 5,
      speed: Math.random() * (speed + 5) - 5,
    });
  }

  function render() {
    if (position.x === null || position.y === null) return;

    ctx.fillStyle = `rgba(0,0,0, ${fade})`;
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

    ctx.lineCap = 'round';

    for (let i = 0; i < points.length; i++) {
      const point = points[i];

      point.radius += point.speed;
      if (point.radius >= 360) point.radius = point.radius - 360;

      const vel = {
        x: point.distance * Math.cos(point.radius * Math.PI / 180),
        y: point.distance * Math.sin(point.radius * Math.PI / 180),
      };

      if (point.position.x !== null && point.position.y !== null) {
        ctx.strokeStyle = point.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(point.position.x, point.position.y);
        ctx.lineTo(position.x + vel.x, position.y + vel.y);
        ctx.stroke();
        ctx.closePath();
      }

      point.position.x = position.x + vel.x;
      point.position.y = position.y + vel.y;
    }
  }

  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
  })();

  (function mouseTrailLoop() {
    requestAnimFrame(mouseTrailLoop);
    render();
  })()
}