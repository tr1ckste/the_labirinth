class Ray {
  constructor(pos, angle) {
    this.pos = pos;
    this.angle = angle;
    this.dir = getDir(pos, angle);
  }
  moveTo(pos) {
    this.pos = pos;
    this.dir = getDir(pos, this.angle);
  }
  setAngle(angle) {
    this.angle = angle;
  }
  checkIntersection(boundary) {
    const x1 = this.pos.x;
    const y1 = this.pos.y;
    const x2 = this.dir.x;
    const y2 = this.dir.y;
    const x3 = boundary.a.x;
    const y3 = boundary.a.y;
    const x4 = boundary.b.x;
    const y4 = boundary.b.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den === 0) return null;
    const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / den;
    const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / den;
    
    const dx = x2 - x1;
    const dy = y2 - y1;
    let xC, yC;
    if (dx < 0) xC = x <= x1;
    else xC = x >= x1;
    if (dy < 0) yC = y <= y1;
    else yC = y >= y1;

    const condition1 = (x <= x4 && x >= x3) || (x >= x4 && x <= x3);
    const condition2 = (y <= y4 && y >= y3) || (y >= y4 && y <= y3);
    const condition3 = xC && yC;
    if (condition1 && condition2 && condition3) return({ x, y });
    return null;
  }
  cast(boundaries) {
    let nearestPt = null;
    let shortestDistance = Infinity;
    for (const bondary of boundaries) {
      const point = this.checkIntersection(bondary);
      if (point) {
        const distance = findDistance(this.pos, point);
        if (distance < shortestDistance) {
          shortestDistance = distance;
          nearestPt = point;
        }
      }
    }
    if (nearestPt) {
      line(this.pos, nearestPt);
      return shortestDistance;
    }
    return null;
  }
  show() {
    line(this.pos, this.dir);
  }
}