class Player {
  constructor(pos, raysNum) {
    this.pos = pos;
    this.raysNum = raysNum;
    this.rays = [];
  }
  init() {
    const angle = (Math.PI * 2) / this.raysNum;
    for (let i = 0; i < 60; i++) {
      const ray = new Ray(this.pos, i * angle);
      this.rays.push(ray);
    }
  }
  rotateUp(angle) {
    for (const ray of this.rays) {
      ray.setAngle(ray.angle + angle);
    }
  }
  rotateDown(angle) {
    for (const ray of this.rays) {
      ray.setAngle(ray.angle - angle);
    }
  }
  moveTo(pos) {
    this.pos = pos;
    for (const ray of this.rays) ray.moveTo(pos);
  }
  cast(boundaries) {
    const rects = [];
    for (const ray of this.rays) { 
      rects.push(ray.cast(boundaries));
    }
    return rects;
  }
  show() {
    for (const ray of this.rays) ray.show();
  }
}