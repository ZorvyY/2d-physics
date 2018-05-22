/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Rect.js":
/*!*********************!*\
  !*** ./src/Rect.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rect; });\n/* harmony import */ var _Vec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec.js */ \"./src/Vec.js\");\n\n\nclass Rect {\n  constructor(x, y, w, h, m) {\n    if (typeof(m) =='undefined') {\n      this.m = 1;\n    } else {\n      this.m = m;\n    }\n\n    this.width = w; this.height = h;\n\n    this.center = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x + w/2, y + h/2);\n    this.v = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n    this.a = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n\n    this.theta = 0;\n    this.omega = 0;\n    this.alpha = 0;\n\n    this.J = this.m * (h * h + w * w) / 12;\n  }\n\n  get topLeft() {\n    return (\n      this.center.plus(\n        (new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-this.width, -this.height)).times(0.5)\n      ).rotate(this.theta, this.center)\n    );\n  }\n\n  get topRight() {\n    return (\n      this.center.plus(\n        (new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.width, -this.height)).times(0.5)\n      ).rotate(this.theta, this.center)\n    );\n  }\n\n  get bottomLeft() {\n    return (\n      this.center.plus(\n        (new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-this.width, this.height)).times(0.5)\n      ).rotate(this.theta, this.center)\n    );\n  }\n  \n  get bottomRight() {\n    return (\n      this.center.plus(\n        (new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.width, this.height)).times(0.5)\n      ).rotate(this.theta, this.center)\n    );\n  }\n\n  move(v) {\n    this.center = this.center.plus(v);\n  }\n\n  rotate(angle) {\n    this.theta += angle;\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/Rect.js?");

/***/ }),

/***/ "./src/Vec.js":
/*!********************!*\
  !*** ./src/Vec.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vec; });\nclass Vec {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  toPolar() {\n    return {\n      magnitude: Math.hypot(this.x, this.y),\n      angle: Math.atan2(this.y, this.x)\n    };\n  }\n\n  static fromPolar(mag, angle) {\n    return new Vec(\n      mag * Math.cos(angle),\n      mag * Math.sin(angle)\n    );\n  }\n\n  plus(v) {\n    return new Vec(\n      this.x + v.x,\n      this.y + v.y\n    );\n  }\n\n  minus(v) {\n    return new Vec(\n      this.x - v.x,\n      this.y - v.y\n    );\n  }\n\n  times(scalar) {\n    return new Vec(\n      this.x * scalar,\n      this.y * scalar\n    );\n  }\n\n  dot(v) {\n    return this.x * v.x + this.y * v.y;\n  }\n\n  cross(v) {\n    return this.x * v.y - this.y * v.x;\n  }\n\n  rotate(a, point) {\n    let {magnitude, angle} = this.minus(point).toPolar();\n    angle += a;\n    return Vec.fromPolar(magnitude, angle).plus(point);\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/Vec.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec.js */ \"./src/Vec.js\");\n/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect.js */ \"./src/Rect.js\");\n\n\n\n\nlet canvas = document.getElementById('canvas');\nlet b = 50;\nlet angularB = 40;\nlet stiffness = 1000;\nlet G = 5;\nlet scale = 50;\nlet springLength = 0.5;\n\n// density = mass / width*height\n// density = 1 / 0.5 = 2\n\nlet rect = new _Rect_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3, 0, 2, 1, 150);\nlet tether = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 0);\nfunction drawRect(scale) {\n  let cx = canvas.getContext('2d');\n  let x, y;\n\n  cx.strokeStyle = 'black';\n  cx.beginPath();\n  ({x, y} = rect.topLeft);\n  x *= scale, y*= scale;\n  cx.moveTo(x,y);\n  ({x, y} = rect.topRight);\n  x *= scale, y*= scale;\n  cx.lineTo(x,y);\n  ({x, y} = rect.bottomRight);\n  x *= scale, y*= scale;\n  cx.lineTo(x,y);\n  ({x, y} = rect.bottomLeft);\n  x *= scale, y*= scale;\n  cx.lineTo(x,y);\n  cx.closePath();\n  cx.stroke();\n\n  cx.strokeStyle = 'grey';\n  cx.beginPath();\n  ({x, y} = rect.topLeft);\n  x *= scale, y*= scale;\n  cx.moveTo(x,y);\n  ({x, y} = tether);\n  x *= scale, y*= scale;\n  cx.lineTo(x,y);\n  cx.stroke();\n}\n\nfunction calcForce() {\n  let forces = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n\n  let gravity = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,G*rect.m);\n  forces = forces.plus(gravity);\n\n  let spring = tether.minus(rect.topLeft).toPolar();\n  spring = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromPolar(Math.max(spring.magnitude - springLength, 0), spring.angle).times(stiffness);\n\n  forces = forces.plus(spring);\n  forces = forces.plus(rect.v.times(-b)); //Damping\n\n  rect.a = forces.times(1/rect.m);\n\n  let torque = 0;\n  //let rxf = rect.center.minus(rect.topLeft).cross(spring);\n  let rxf = spring.cross(rect.center.minus(rect.topLeft));\n  torque += rxf;\n  torque += rect.omega * -angularB; //Damping\n  rect.alpha = torque / rect.J;\n}\n\nfunction loop(timeStep) {\n  calcForce();\n  rect.v = rect.v.plus(rect.a.times(timeStep));\n  rect.omega += rect.alpha;\n\n  rect.move(rect.v.times(timeStep));\n  rect.rotate(rect.omega * timeStep);\n\n  canvas.height = canvas.height;\n  drawRect(scale);\n}\n\n//requestAnimationFrame breaks the code. idk why\n/*\nlet arrow = time => {\n  loop(time/1000);\n  requestAnimationFrame(arrow);\n};\n\nrequestAnimationFrame(arrow);\n*/\n\nsetInterval(() => loop(0.01), 0.01*1000);\n\ncanvas.addEventListener('mousemove', () => {\n  tether.x = event.offsetX/scale;\n  tether.y = event.offsetY/scale;\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });