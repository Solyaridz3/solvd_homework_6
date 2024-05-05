const contentDiv = document.querySelector('div');

function onScroll(event) {
    const colors = ["black", "blue"]
    contentDiv.style['background-color'] = colors[(colors.indexOf(contentDiv.style['background-color']) + 1) % 2];
    console.log("Scroll event:", event);
}

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