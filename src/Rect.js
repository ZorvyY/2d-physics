import V from './Vec.js';

export default class Rect {
  constructor(x, y, w, h, m) {
    if (typeof(m) =='undefined') {
      this.m = 1;
    } else {
      this.m = m;
    }

    this.width = w; this.height = h;

    this.center = new V(x + w/2, y + h/2);
    this.v = new V(0,0);
    this.a = new V(0,0);

    this.theta = 0;
    this.omega = 0;
    this.alpha = 0;

    this.J = this.m * (h * h + w * w) / 12;
  }

  get topLeft() {
    return (
      this.center.plus(
        (new V(-this.width, -this.height)).times(0.5)
      ).rotate(this.theta, this.center)
    );
  }

  get topRight() {
    return (
      this.center.plus(
        (new V(this.width, -this.height)).times(0.5)
      ).rotate(this.theta, this.center)
    );
  }

  get bottomLeft() {
    return (
      this.center.plus(
        (new V(-this.width, this.height)).times(0.5)
      ).rotate(this.theta, this.center)
    );
  }
  
  get bottomRight() {
    return (
      this.center.plus(
        (new V(this.width, this.height)).times(0.5)
      ).rotate(this.theta, this.center)
    );
  }

  move(v) {
    this.center = this.center.plus(v);
  }

  rotate(angle) {
    this.theta += angle;
  }

}
