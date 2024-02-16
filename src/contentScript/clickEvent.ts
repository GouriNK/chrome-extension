import { HTML_ELEMENTS, addStep } from './utils';

export const logFunctionForClick = (event) => {
    if(event.target.tagName === HTML_ELEMENTS.BUTTON){
      console.log('Click ', event.target.innerText);
      addStep(`Click ${event.target.innerText}.`);
    } else if(event.target.tagName === HTML_ELEMENTS.LINK){
      console.log('Click Link!!');
      addStep(`Click Link.`);

    }
  }