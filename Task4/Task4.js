function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function debouncedSearch(query) {
    console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 300);
const debouncedSearchHandler2 = debounce(debouncedSearch, 10000);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});

const otherInputElement = document.getElementById("search-input2");
otherInputElement.addEventListener("input", event => {
    debouncedSearchHandler2(event.target.value);
});
