"use strict";

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`The Dolphins win ${avgDolphins} vs. ${avgKoalas}!`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`The Koalas win ${avgKoalas} vs. ${avgDolphins}!`);
  } else {
    console.log("No team wins...");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
