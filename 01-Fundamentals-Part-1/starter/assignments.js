const country = 'The United States';
const continent = 'North America';
let population = 40;

console.log(country, continent, population);

const isIsland = false;
const language = 'English';

console.log(isIsland, population, country, language);

const halfCountry = population / 2;
population++;
console.log(population);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
const averagePopulation = 33;
console.log(population < averagePopulation);
const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description);

const lessThanAverage = averagePopulation - population;
// if (population > averagePopulation) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${lessThanAverage} million below average`);
// }

// '9' - '5'; = 4
// '19' - '13' + '17'; = 617
// '19' - '13' + 17; = 23
// '123' < 57; = false
// 5 + 6 + '4' + 9 - 4 - 2; = 1143

// const numNeighbors = Number(prompt(`How many neighbour countries does your country have?`));
// if (numNeighbors === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbors > 1) {
//     console.log(`More than 1 border`)
// } else console.log(`No borders`);

const newCountryPopulation = 49;
const newCountryLanguage = `English`;
const newCountryIsland = false;
if (population < newCountryPopulation && language === newCountryLanguage && isIsland === newCountryIsland) {
    console.log(`You should live in ${country}!`);
} else console.log(`${country} does not meet your criteria :(`);

console.log(language);

switch (language) {
    case `Chinese`:
    case `Mandarin`:
        console.log(`MOST number of native speakers!`);
        break;
    case `Spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `English`:
        console.log(`3rd place`);
        break;
    case `Hindi`:
        console.log(`Number 4`);
        break;
    case `Arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
}

console.log(`${country}'s population is ${population > averagePopulation ? `above` : `below`} average`);
