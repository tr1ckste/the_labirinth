'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const boundaries = [];
const margin = 10;
const renderW = 600;
const renderH = 600;


boundaries.push(new Boundary({ x: 610, y: 50 }, { x: 850, y: 150 }));
boundaries.push(new Boundary({ x: 610, y: 70 }, { x: 850, y: 180 }));
boundaries.push(new Boundary({ x: 650, y: 500 }, { x: 970, y: 220 }));
boundaries.push(new Boundary({ x: 1100, y: 110 }, { x: 1000, y: 500 }));
boundaries.push(new Boundary({ x: 1150, y: 300 }, { x: 955, y: 290 }));
boundaries.push(new Boundary({ x: 1150, y: 500 }, { x: 990, y: 550 }));
boundaries.push(new Boundary({ x: 670, y: 10 }, { x: 1160, y: 20 }));
boundaries.push(new Boundary({ x: 670, y: 350 }, { x: 870, y: 480 }));

for (const boundary of boundaries) {
  boundary.show();
}

const player = new Player({ x: 10, y: 70 }, 360);
player.init();

const render = (cnvX, cnvY) => {
  ctx.clearRect(0, 0, 1200, 800);
  for (const boundary of boundaries) {
    boundary.show();
  }
  player.moveTo({ x: cnvX, y: cnvY });
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, renderW, renderH);
  const rects = player.cast(boundaries);
  const width = renderW / rects.length;
  const maxDistance = Math.sqrt(renderH * renderH, renderW * renderW);
  let x = 0;
  for (const rect of rects) {
    if (rect) {
      ctx.fillStyle = generateRgb(rect, maxDistance);
      const height = getHeight(rect, maxDistance, renderH);
      const y = renderH - ((renderH - height) / 2) - height;
      ctx.fillRect(x, y, width, height);
    }
    x += width;
  }
};

document.addEventListener('keydown', e => {
  if (e.code === 'KeyA') {
    player.rotateUp(Math.PI / 45);
    const { x, y } = player.pos;
    render(x, y);
  }
  if (e.code === 'KeyD') {
    player.rotateDown(Math.PI / 45);
    const { x, y } = player.pos;
    render(x, y);
  }
});

canvas.addEventListener('mousemove', e => {
  const { clientX, clientY } = e;
  const cnvX = clientX - margin;
  const cnvY = clientY - margin;
  if (cnvX > 600) {
    render(cnvX, cnvY);
  }
});




