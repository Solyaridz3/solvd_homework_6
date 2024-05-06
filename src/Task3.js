const code = multiline`
function add(a, b) {
return a + b;
}
`;

/**
 * Splits and formats the given strings, adding line numbers in the beginning.
 *
 * @param {Array<string>} giverStrings - The array of strings to be formatted.
 * @return {string} - The formatted string with line numbers.
 */
function multiline(giverStrings) {
    const seperatedStrings = giverStrings
        .join('')
        .split('\n')
        .filter(s => s !== '');
    return seperatedStrings.map((string, index) =>{
      return (index + 1) + ' ' + string + (index === seperatedStrings.length-1 ? '' : '\n')
    }).join('');
}

console.log(code);