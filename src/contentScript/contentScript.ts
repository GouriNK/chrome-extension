import { logFunctionForClick } from './clickEvent';
import { checkScrollDirection } from './scrollEvent'; 
import { RECORDING_OBJECT, addStep, isMobile } from './utils';

let CONSOLE_STYLE = 'color: white; background: black; font-size: 15px;';

const startRecording = () => {
    RECORDING_OBJECT.url = window.location.href;
    RECORDING_OBJECT.userAgent = isMobile();
    RECORDING_OBJECT.screenSize = `${window.innerWidth} x ${window.innerHeight}`;
    RECORDING_OBJECT.steps = [];
    addStep(`Go to url ${window.location.href}`)
    // console.log(`%cURL : ${window.location.href} `, CONSOLE_STYLE)
    // console.log(`%cUser Agent : ${isMobile()}`, CONSOLE_STYLE);
    // console.log(`%cScreen size : ${window.innerWidth} x ${window.innerHeight}`, CONSOLE_STYLE)
    clickEventsCapture();
    scrollEventCapture();
}

const clickEventsCapture = () => {
  document.body.addEventListener('click', logFunctionForClick);
}

const scrollEventCapture = () => {
  window.addEventListener('scroll', checkScrollDirection);
}

const stopRecording = () => {
  clearAllEvents();
}

const clearAllEvents = () => {
  // console.log('clear all')
  document.body.removeEventListener('click', logFunctionForClick);
  window.removeEventListener('scroll', checkScrollDirection);
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
        chrome.storage.local.set({ status: RECORDING_OBJECT }).then(() => {
          console.log("Value is set to RECORDING_OBJECT");
          sendResponse(`---RECORDING STOPPED---`);
        });
      }
    }
  );

