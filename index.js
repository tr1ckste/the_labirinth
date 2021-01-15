'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const boundaries = [];

boundaries.push(new Boundary({ x: 10, y: 50 }, { x: 250, y: 150 }))
boundaries.push(new Boundary({ x: 10, y: 70 }, { x: 250, y: 180 }));
for (const boundary of boundaries) {
  boundary.show();
}



ctx.strokeRect(10, 10, 10, 10);

const ray = new Ray({ x: 150, y: 130 }, (4 / 3) * Math.PI);
ray.cast(boundaries);



// console.log(ray.dir);

// const player = new Player({ x: 50, y: 50 }, 10);
// player.init();
// player.show();

// ray.show();
// ray.moveTo({ x: 350, y: 350 });
// ray.show();

// player.moveTo({ x: 350, y: 350 });
// player.show();


