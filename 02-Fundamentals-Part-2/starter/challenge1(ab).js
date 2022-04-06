'use strict';

const calcAverage = (a, b, c) => (a + b + c) / 3;
let avgDolphins;
let avgKoalas;

let checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins >= (avgKoalas * 2))
        console.log(`The Dolphins win ${avgDolphins} vs. ${avgKoalas}!`)
    if (avgKoalas > avgDolphins && avgKoalas >= (avgDolphins * 2))
        console.log(`The Koalas win ${avgKoalas} vs. ${avgDolphins}!`)
    else console.log("???")
}