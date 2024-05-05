const code = multiline`
function add(a, b) {
return a + b;
}
`;

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