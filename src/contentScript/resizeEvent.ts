import { HTML_ELEMENTS, addStep } from './utils';

let resizeTimer;

export const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Get the new window dimensions
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        // Log the new window dimensions
        // console.log(`Resize window to width: ${newWidth}px, height: ${newHeight}px.`);
        addStep(`Resize window to width: ${newWidth}px, height: ${newHeight}px.`);
    }, 500); // Wait for 3 seconds after the last resize event
}