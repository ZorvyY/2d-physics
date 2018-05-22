'use strict';
import Vec from './Vec.js';
import Rect from './Rect.js';

let canvas = document.getElementById('canvas');
let b = 50;
let angularB = 40;
let stiffness = 1000;
let G = 5;
let scale = 50;
let springLength = 0.5;

// density = mass / width*height
// density = 1 / 0.5 = 2

let rect = new Rect(3, 0, 2, 1, 150);
let tether = new Vec(2, 0);
function drawRect(scale) {
  let cx = canvas.getContext('2d');
  let x, y;

  cx.strokeStyle = 'black';
  cx.beginPath();
  ({x, y} = rect.topLeft);
  x *= scale, y*= scale;
  cx.moveTo(x,y);
  ({x, y} = rect.topRight);
  x *= scale, y*= scale;
  cx.lineTo(x,y);
  ({x, y} = rect.bottomRight);
  x *= scale, y*= scale;
  cx.lineTo(x,y);
  ({x, y} = rect.bottomLeft);
  x *= scale, y*= scale;
  cx.lineTo(x,y);
  cx.closePath();
  cx.stroke();

  cx.strokeStyle = 'grey';
  cx.beginPath();
  ({x, y} = rect.topLeft);
  x *= scale, y*= scale;
  cx.moveTo(x,y);
  ({x, y} = tether);
  x *= scale, y*= scale;
  cx.lineTo(x,y);
  cx.stroke();
}

function calcForce() {
  let forces = new Vec(0,0);

  let gravity = new Vec(0,G*rect.m);
  forces = forces.plus(gravity);

  let spring = tether.minus(rect.topLeft).toPolar();
  spring = Vec.fromPolar(Math.max(spring.magnitude - springLength, 0), spring.angle).times(stiffness);

  forces = forces.plus(spring);
  forces = forces.plus(rect.v.times(-b)); //Damping

  rect.a = forces.times(1/rect.m);

  let torque = 0;
  //let rxf = rect.center.minus(rect.topLeft).cross(spring);
  let rxf = spring.cross(rect.center.minus(rect.topLeft));
  torque += rxf;
  torque += rect.omega * -angularB; //Damping
  rect.alpha = torque / rect.J;
}

function loop(timeStep) {
  calcForce();
  rect.v = rect.v.plus(rect.a.times(timeStep));
  rect.omega += rect.alpha;

  rect.move(rect.v.times(timeStep));
  rect.rotate(rect.omega * timeStep);

  canvas.height = canvas.height;
  drawRect(scale);
}

//requestAnimationFrame breaks the code. idk why
/*
let arrow = time => {
  loop(time/1000);
  requestAnimationFrame(arrow);
};

requestAnimationFrame(arrow);
*/

setInterval(() => loop(0.01), 0.01*1000);

canvas.addEventListener('mousemove', () => {
  tether.x = event.offsetX/scale;
  tether.y = event.offsetY/scale;
});
