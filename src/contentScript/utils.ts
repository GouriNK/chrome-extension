export const HTML_ELEMENTS = {
  BUTTON: 'BUTTON',
  LINK: 'A',
  IMAGE: 'IMG'
}

export function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if (regex.test(navigator.userAgent)) {
    return "Mobile";
  } else {
    return "Desktop";
  }
}

let STEP_COUNT = 0;
export const RECORDING_OBJECT = {
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


export const addStep = (stepDetail) => {
  pushIfDifferent(RECORDING_OBJECT.steps, stepDetail);
}