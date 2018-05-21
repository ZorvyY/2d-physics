'use strict';
import Vec from './Vec.js';
import Rect from './Rect.js';

let canvas = document.getElementById('canvas');

let rect = new Rect(200, 100, 100, 50);
console.log(rect);
console.log(rect.topLeft);
function drawRect() {
  let cx = canvas.getContext('2d');
  //cx.strokeRect(rect.topLeft.x, rect.topLeft.y, rect.width, rect.height);
  cx.strokeRect(200,100,100,50);
}


drawRect();

