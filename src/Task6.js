/**
 * Returns a curried version of the given function.
 *
 * @param {function} func - The function to be curried.
 * @param {number} arity - The number of arguments the curried function should accept.
 * @return {function} - The curried version of the function.
 */
const curry = (func, arity) => {
    const curried = (...args) => {
        if (args.length >= arity &&
            !args.includes(curry.placeholder)) {
            return func(...args);
        } else {
            return function (...nextArgs) {
                // If there is a placeholder in args and length of nextArgs is bigger than 0
                // Then we shift element from nextArgs and put it in placeholder
                // place and after that we concat args with elements that are left in nextArgs
                const combinedArgs = args.map(
                    arg => arg === curry.placeholder &&
                    nextArgs.length ? nextArgs.shift() : arg).concat(nextArgs);
                return curried(...combinedArgs);
            };
        }
    };
    return curried;
};

const _ = Symbol();
curry.placeholder = _;


const multiply = (a, b, c) => {
    return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2);
const step2 = step1(3);
const result = step2(4);

console.log("Result:", result); // Expected: 24


const curriedMultiplyWithPlaceholder = curry(multiply, 3)(_, 10, _);

const placeholderStep1 = curriedMultiplyWithPlaceholder(2);
const placeholderResult = placeholderStep1(4);

console.log("Result:", placeholderResult) // Expected: 80;