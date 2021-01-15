'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const boundaries = [];
const margin = 10;



boundaries.push(new Boundary({ x: 610, y: 50 }, { x: 850, y: 150 }));
boundaries.push(new Boundary({ x: 610, y: 70 }, { x: 850, y: 180 }));
boundaries.push(new Boundary({ x: 650, y: 500 }, { x: 970, y: 220 }));
for (const boundary of boundaries) {
  boundary.show();
}



const player = new Player({ x: 10, y: 70 }, 360);
player.init();
// const ray = new Ray({ x: 150, y: 130 }, (4 / 3) * Math.PI);
// ray.cast(boundaries);

canvas.addEventListener('mousemove', e => {
  const { clientX, clientY } = e;
  const cnvX = clientX - margin;
  const cnvY = clientY - margin;
  if (cnvX > 600) {
  ctx.clearRect(0, 0, 1200, 800);
  line({ x: 600, y: 0 }, { x: 600, y: 800 });
    for (const boundary of boundaries) {
      boundary.show();
    }
    player.moveTo({ x: cnvX, y: cnvY });
    player.cast(boundaries);
  }
});




