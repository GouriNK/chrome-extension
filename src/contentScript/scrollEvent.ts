import { addStep } from "./utils";

let isScrolling;
let lastScrollPosition = window.scrollY;

export function checkScrollDirection() {
    // Clear the timeout to prevent multiple executions
    clearTimeout(isScrolling);

    // Set a timeout to execute the function after scrolling stops
    isScrolling = setTimeout(function() {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolled down
            console.log('Scroll down');
            addStep(`Scroll down.`);
        } else if (currentScrollPosition < lastScrollPosition) {
            // Scrolled up
            console.log('Scroll up');
            addStep(`Scroll up.`);
        }

        // Update last scroll position
        lastScrollPosition = currentScrollPosition;
    }, 200); // Adjust the delay as needed
}