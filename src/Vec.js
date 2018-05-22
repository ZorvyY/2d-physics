export default class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toPolar() {
    return {
      magnitude: Math.hypot(this.x, this.y),
      angle: Math.atan2(this.y, this.x)
    };
  }

  static fromPolar(mag, angle) {
    return new Vec(
      mag * Math.cos(angle),
      mag * Math.sin(angle)
    );
  }

  plus(v) {
    return new Vec(
      this.x + v.x,
      this.y + v.y
    );
  }

  minus(v) {
    return new Vec(
      this.x - v.x,
      this.y - v.y
    );
  }

  times(scalar) {
    return new Vec(
      this.x * scalar,
      this.y * scalar
    );
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  rotate(a, point) {
    let {magnitude, angle} = this.minus(point).toPolar();
    angle += a;
    return Vec.fromPolar(magnitude, angle).plus(point);
  }

}
