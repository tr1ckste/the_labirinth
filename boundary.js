class Boundary {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  show() {
    line(this.a, this.b);
  }
}