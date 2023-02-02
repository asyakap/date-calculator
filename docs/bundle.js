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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_weekday_calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../src/js/weekday-calculator.js */ \"./src/js/weekday-calculator.js\");\n \r\n\r\nfunction handleFormSubmission() {\r\n  event.preventDefault();\r\n  const calculateDate = new _src_js_weekday_calculator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  let inputDate = document.getElementById(\"input\").value;\r\n  let today = \"02/02/2023\";\r\n  if (calculateDate.ValidDate(inputDate) === false) {\r\n    document.getElementById(\"output\").innerText = \"Please add a valid date.\";\r\n  }\r\n  else {\r\n    document.getElementById(\"output\").innerText = \"Your date falls on \" + calculateDate.WhichDay(inputDate, today);\r\n  }\r\n\r\n}\r\n\r\nwindow.addEventListener(\"load\", function () {\r\n  document.querySelector(\"form#new-date\").addEventListener(\"submit\", handleFormSubmission);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHFFQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tICcuLy4uL3NyYy9qcy93ZWVrZGF5LWNhbGN1bGF0b3IuanMnOyBcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXNzaW9uKCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgY2FsY3VsYXRlRGF0ZSA9IG5ldyBDYWxjdWxhdG9yKCk7XHJcbiAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIikudmFsdWU7XHJcbiAgbGV0IHRvZGF5ID0gXCIwMi8wMi8yMDIzXCI7XHJcbiAgaWYgKGNhbGN1bGF0ZURhdGUuVmFsaWREYXRlKGlucHV0RGF0ZSkgPT09IGZhbHNlKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKS5pbm5lclRleHQgPSBcIlBsZWFzZSBhZGQgYSB2YWxpZCBkYXRlLlwiO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpLmlubmVyVGV4dCA9IFwiWW91ciBkYXRlIGZhbGxzIG9uIFwiICsgY2FsY3VsYXRlRGF0ZS5XaGljaERheShpbnB1dERhdGUsIHRvZGF5KTtcclxuICB9XHJcblxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtI25ldy1kYXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pc3Npb24pO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/weekday-calculator.js":
/*!**************************************!*\
  !*** ./src/js/weekday-calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Calculator; });\nclass Calculator {\r\n\r\n  constructor(date) {\r\n    this.date = date;\r\n    this.weekday = \"\";\r\n    this.today = \"02/02/2023\";\r\n    this.todaysWeekday = \"thursday\";\r\n  }\r\n\r\n  ValidDate(date) {\r\n    date = new Date(date);\r\n    return (new Date(date) !== \"Invalid Date\") && !isNaN(new Date(date));\r\n  }\r\n\r\n  CountDiff(date, today) {\r\n    date = new Date(date);\r\n    today = new Date(today);\r\n    const _MS_PER_DAY = 1000 * 60 * 60 * 24;\r\n    const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());\r\n    const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());\r\n    return Math.floor((utc2 - utc1) / _MS_PER_DAY);\r\n\r\n  }\r\n  WhichDay(date, today) {\r\n    date = new Date(date);\r\n    today = new Date(today);\r\n    let dayOfWeek = \"\";\r\n    let diff = this.CountDiff(date, today);\r\n    let daysOfWeek = [\"thursday\", \"wednesday\", \"tuesday\", \"monday\", \"sunday\", \"saturday\", \"friday\"];\r\n    if (diff > -1) {\r\n      dayOfWeek = daysOfWeek[diff % 7];\r\n    }\r\n    else {\r\n      dayOfWeek = daysOfWeek[7 - (Math.abs(diff) % 7)];\r\n    }\r\n    return dayOfWeek;\r\n  }\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvd2Vla2RheS1jYWxjdWxhdG9yLmpzPzk0YWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9zcmMvanMvd2Vla2RheS1jYWxjdWxhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsY3VsYXRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGUpIHtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLndlZWtkYXkgPSBcIlwiO1xyXG4gICAgdGhpcy50b2RheSA9IFwiMDIvMDIvMjAyM1wiO1xyXG4gICAgdGhpcy50b2RheXNXZWVrZGF5ID0gXCJ0aHVyc2RheVwiO1xyXG4gIH1cclxuXHJcbiAgVmFsaWREYXRlKGRhdGUpIHtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiAobmV3IERhdGUoZGF0ZSkgIT09IFwiSW52YWxpZCBEYXRlXCIpICYmICFpc05hTihuZXcgRGF0ZShkYXRlKSk7XHJcbiAgfVxyXG5cclxuICBDb3VudERpZmYoZGF0ZSwgdG9kYXkpIHtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHRvZGF5ID0gbmV3IERhdGUodG9kYXkpO1xyXG4gICAgY29uc3QgX01TX1BFUl9EQVkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG4gICAgY29uc3QgdXRjMSA9IERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSk7XHJcbiAgICBjb25zdCB1dGMyID0gRGF0ZS5VVEModG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKCh1dGMyIC0gdXRjMSkgLyBfTVNfUEVSX0RBWSk7XHJcblxyXG4gIH1cclxuICBXaGljaERheShkYXRlLCB0b2RheSkge1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgdG9kYXkgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgICBsZXQgZGF5T2ZXZWVrID0gXCJcIjtcclxuICAgIGxldCBkaWZmID0gdGhpcy5Db3VudERpZmYoZGF0ZSwgdG9kYXkpO1xyXG4gICAgbGV0IGRheXNPZldlZWsgPSBbXCJ0aHVyc2RheVwiLCBcIndlZG5lc2RheVwiLCBcInR1ZXNkYXlcIiwgXCJtb25kYXlcIiwgXCJzdW5kYXlcIiwgXCJzYXR1cmRheVwiLCBcImZyaWRheVwiXTtcclxuICAgIGlmIChkaWZmID4gLTEpIHtcclxuICAgICAgZGF5T2ZXZWVrID0gZGF5c09mV2Vla1tkaWZmICUgN107XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZGF5T2ZXZWVrID0gZGF5c09mV2Vla1s3IC0gKE1hdGguYWJzKGRpZmYpICUgNyldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRheU9mV2VlaztcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/weekday-calculator.js\n");

/***/ })

/******/ });