const contentDiv = document.querySelector('div');

function onScroll(event) {
    const colors = ["black", "blue"]
    contentDiv.style['background-color'] = colors[(colors.indexOf(contentDiv.style['background-color']) + 1) % 2];
    console.log("Scroll event:", event);
}

/**
 * Creates a throttled version of the given function that will allow to execute function
 * at most once within specified time interval.
 * It will ignore function invocation if the interval has not elapsed.
 *
 *
 * @param {function} func - The function to be throttled.
 * @param {number} interval - The interval in milliseconds.
 * @return {function} - The throttled function.
 */
function throttle(func, interval) {
    let timer = null;
    return (...args) => {
        if (timer === null) {
            func(...args);
            timer = setTimeout(() => {
                timer = null
            }, interval);
        }
    };
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);