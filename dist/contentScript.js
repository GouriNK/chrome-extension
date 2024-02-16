/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contentScript/clickEvent.ts":
/*!*****************************************!*\
  !*** ./src/contentScript/clickEvent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logFunctionForClick: () => (/* binding */ logFunctionForClick)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/contentScript/utils.ts");


const logFunctionForClick = (event) => {
    if(event.target.tagName === _utils__WEBPACK_IMPORTED_MODULE_0__.HTML_ELEMENTS.BUTTON){
      console.log('Click ', event.target.innerText);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addStep)(`Click ${event.target.innerText}.`);
    } else if(event.target.tagName === _utils__WEBPACK_IMPORTED_MODULE_0__.HTML_ELEMENTS.LINK){
      console.log('Click Link!!');
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addStep)(`Click Link.`);

    }
  }

/***/ }),

/***/ "./src/contentScript/scrollEvent.ts":
/*!******************************************!*\
  !*** ./src/contentScript/scrollEvent.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkScrollDirection: () => (/* binding */ checkScrollDirection)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/contentScript/utils.ts");


let isScrolling;
let lastScrollPosition = window.scrollY;

function checkScrollDirection() {
    // Clear the timeout to prevent multiple executions
    clearTimeout(isScrolling);

    // Set a timeout to execute the function after scrolling stops
    isScrolling = setTimeout(function() {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolled down
            console.log('Scroll down');
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addStep)(`Scroll down.`);
        } else if (currentScrollPosition < lastScrollPosition) {
            // Scrolled up
            console.log('Scroll up');
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addStep)(`Scroll up.`);
        }

        // Update last scroll position
        lastScrollPosition = currentScrollPosition;
    }, 200); // Adjust the delay as needed
}

/***/ }),

/***/ "./src/contentScript/utils.ts":
/*!************************************!*\
  !*** ./src/contentScript/utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTML_ELEMENTS: () => (/* binding */ HTML_ELEMENTS),
/* harmony export */   RECORDING_OBJECT: () => (/* binding */ RECORDING_OBJECT),
/* harmony export */   addStep: () => (/* binding */ addStep),
/* harmony export */   isMobile: () => (/* binding */ isMobile)
/* harmony export */ });
const HTML_ELEMENTS = {
  BUTTON: 'BUTTON',
  LINK: 'A',
  IMAGE: 'IMG'
}

function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if (regex.test(navigator.userAgent)) {
    return "Mobile";
  } else {
    return "Desktop";
  }
}

let STEP_COUNT = 0;
const RECORDING_OBJECT = {
  url: '',
  userAgent: '',
  screenSize: '',
  steps: []
}

function pushIfDifferent(arr, element) {
  // Check if the array is empty or the last element is different from the new element
  if (arr.length === 0 || arr[arr.length - 1] !== element) {
    // arr.push(`${++STEP_COUNT}. ${element}.`);
    arr.push(`${element}`);
  }
}


const addStep = (stepDetail) => {
  pushIfDifferent(RECORDING_OBJECT.steps, stepDetail);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clickEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickEvent */ "./src/contentScript/clickEvent.ts");
/* harmony import */ var _scrollEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollEvent */ "./src/contentScript/scrollEvent.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/contentScript/utils.ts");

 


let CONSOLE_STYLE = 'color: white; background: black; font-size: 15px;';

const startRecording = () => {
    _utils__WEBPACK_IMPORTED_MODULE_2__.RECORDING_OBJECT.url = window.location.href;
    _utils__WEBPACK_IMPORTED_MODULE_2__.RECORDING_OBJECT.userAgent = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile)();
    _utils__WEBPACK_IMPORTED_MODULE_2__.RECORDING_OBJECT.screenSize = `${window.innerWidth} x ${window.innerHeight}`;
    _utils__WEBPACK_IMPORTED_MODULE_2__.RECORDING_OBJECT.steps = [];
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addStep)(`Go to url ${window.location.href}`)
    // console.log(`%cURL : ${window.location.href} `, CONSOLE_STYLE)
    // console.log(`%cUser Agent : ${isMobile()}`, CONSOLE_STYLE);
    // console.log(`%cScreen size : ${window.innerWidth} x ${window.innerHeight}`, CONSOLE_STYLE)
    clickEventsCapture();
    scrollEventCapture();
}

const clickEventsCapture = () => {
  document.body.addEventListener('click', _clickEvent__WEBPACK_IMPORTED_MODULE_0__.logFunctionForClick);
}

const scrollEventCapture = () => {
  window.addEventListener('scroll', _scrollEvent__WEBPACK_IMPORTED_MODULE_1__.checkScrollDirection);
}

const stopRecording = () => {
  clearAllEvents();
}

const clearAllEvents = () => {
  // console.log('clear all')
  document.body.removeEventListener('click', _clickEvent__WEBPACK_IMPORTED_MODULE_0__.logFunctionForClick);
  window.removeEventListener('scroll', _scrollEvent__WEBPACK_IMPORTED_MODULE_1__.checkScrollDirection);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('reached listener');
    if (request.action === 'startRecording') {
        console.log("inside startRecording");
        startRecording();
        chrome.storage.local.set({ status: {} }).then(() => {
          console.log("Value is set to empty");
          sendResponse(`---RECORDING STARTED---`);
        });
      }
      if (request.action === 'stopRecording') {
        stopRecording();
        chrome.storage.local.set({ status: _utils__WEBPACK_IMPORTED_MODULE_2__.RECORDING_OBJECT }).then(() => {
          console.log("Value is set to RECORDING_OBJECT");
          sendResponse(`---RECORDING STOPPED---`);
        });
      }
    }
  );


})();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map