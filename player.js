class Player {
  constructor(pos, raysNum) {
    this.pos = pos;
    this.raysNum = raysNum;
    this.rays = [];
  }
  init() {
    const angle = (Math.PI * 2) / this.raysNum;
    for (let i = 0; i < this.raysNum; i++) {
      const ray = new Ray(this.pos, i * angle);
      this.rays.push(ray);
    }
  }
  moveTo(pos) {
    this.pos = pos;
    for (const ray of this.rays) ray.moveTo(pos);
  }
  cast(boundaries) {
    for (const ray of this.rays) ray.cast(boundaries);
  }
  show() {
    for (const ray of this.rays) ray.show();
  }
}