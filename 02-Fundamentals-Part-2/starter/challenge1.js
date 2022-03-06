'use strict';

const calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins > (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins > avgKoalas && avgDolphins < (avgKoalas * 2)) {
        console.log(`Dolphins scored higher, but did not win. (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins < avgKoalas && (avgDolphins * 2) < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else if (avgDolphins < avgKoalas && (avgDolphins * 2) > avgKoalas) {
        console.log(`Koalas scored higher, but did not win. (${avgKoalas} vs. ${avgDolphins})`);
    } else console.log("???");
}
checkWinner(avgDolphins, avgKoalas);

checkWinner(574, 111);

// Test 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);