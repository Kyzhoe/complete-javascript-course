'use strict';

// Data sets
const test = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

// Takes an array of temperatures and informs you what temp was on what day
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}C in ${i + 1} days...`);
  }
};
printForecast(test2);
