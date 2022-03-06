'use strict';

function describeCountry(country, population, capitalCity) {
    return countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const statesDescription = describeCountry('The United States', '331', 'Washington, D.C.');
const indiaDescription = describeCountry('India', '1380', 'New Delhi');
const japanDescription = describeCountry('Japan', '126', 'Tokyo');

console.log(statesDescription);
console.log(indiaDescription);
console.log(japanDescription);

function percentageOfWorld1(popultation) {
    return popultation / 7900 * 100;
}

const americaPercentage = percentageOfWorld1(331);
const indiaPercentage = percentageOfWorld1(1380);
const japanPercentage = percentageOfWorld1(126);

console.log(americaPercentage);
console.log(indiaPercentage);
console.log(japanPercentage);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const usCalculated = percentageOfWorld2(331)
const indiaCalculated = percentageOfWorld2(1380)
const japanCalculated = percentageOfWorld2(126)
console.log(usCalculated, indiaCalculated, japanCalculated);

const percentageOfWorld3 = population => population / 7900 * 100;
const calcUS = percentageOfWorld3(331);
const calcIndia = percentageOfWorld3(1380);
const calcJapan = percentageOfWorld3(126);
console.log(calcUS, calcIndia, calcJapan);

const describePopulation = function (country, population) {
    const populationPercentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which makes up about ${populationPercentage}% of the world's population`
    console.log(description);
}

describePopulation('United States', 331);
describePopulation('India', 1380);
describePopulation('Japan', 126);