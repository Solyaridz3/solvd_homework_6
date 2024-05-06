const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};


/**
 * A function that localizes strings based on keys and translations.
 *
 * @param {Array} strings - The array of strings to be localized.
 * @param  {...string} keys - The keys used for localization.
 * @return {string} - The localized string.
 */
function localize(strings, ...keys) {
    return strings.map((string, i) => strings[i] + (translations[language][keys[i]] || '')).join('');
}

const language = "fr"; // Change to "en" for English

const greeting = "greet";

const introduction = "intro";

const localizedGreeting = localize`___${greeting}___`;
const localizedIntroduction = localize`${introduction}`;

console.log(localizedGreeting);
console.log(localizedIntroduction);