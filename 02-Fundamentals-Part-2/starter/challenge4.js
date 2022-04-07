'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i <= (arr.length - 1); i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
// If the tip is between 50 and 300, the tip will be 15%. Else it's 20%
const calcTip = function (bill) {
    return bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
}
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
console.log(calcAverage(totals));