/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome extension installed!')
});

  chrome.bookmarks.onCreated.addListener(() => {
    console.log('Page has been bookmarked!');
})

/******/ })()
;
//# sourceMappingURL=background.js.map