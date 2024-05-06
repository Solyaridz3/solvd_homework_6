/**
 * A function that highlights keywords in a template.
 *
 * @param {string} template - The template string to highlight keywords in.
 * @param {Array<string>} keywords - An array of keywords to be highlighted.
 * @return {string} - The template string with keywords highlighted.
 */
function highlightKeywords(template, keywords) {
    let result = template;
    keywords.forEach((keyword, i) => {
        const placeholder = `\${${i}}`;
        const highlighted = `<span class='highlight'>${keyword}</span>`;
        result = result.replace(placeholder, highlighted);
    });
    return result;
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);