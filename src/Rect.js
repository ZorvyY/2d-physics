import V from './Vec.js';

export default class Rect {
  constructor(x, y, w, h, m) {
    if (typeof(m) =='undefined') {
      this.m = 1;
    }

    this.width = w; this.height = h;

    this.center = new V(x + w/2, y + h/2);
    this.v = new V(0,0);
    this.a = new V(0,0);

    this.theta = 0;
    this.omega = 0;
    this.alpha = 0;

    this.J = this.m * (h * h + w * w) / 12000;
  }

  get topLeft() {
    return (
      this.center.minus(
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
