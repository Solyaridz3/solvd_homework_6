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


const curriedMultiply = curry(multiply, 3)(_, 3, _);

const step1 = curriedMultiply(2);
const result = step1(4);

console.log("Result:", result); // Expected: 24