const dolphinsAvg = (97 + 112 + 80) / 3;
const koalasAvg = (109 + 95 + 50) / 3



if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log(`Dolphins scoring ${dolphinsAvg}, scored higher on average then the Koalas, scoring only ${koalasAvg} on average. As they have have enough points, they will be awarded the trophy! 🏆`);
} else if (dolphinsAvg > koalasAvg && dolphinsAvg < 100) {
    console.log(`Dolphins scoring ${dolphinsAvg}, scored higher on average then the Koalas, scoring only ${koalasAvg} on average. However, they did not meet the minimum score requirement to be awarded the trophy.`);
} else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
    console.log(`Koalas scoring ${koalasAvg}, scored higher on average then the Dolphins, scoring only ${dolphinsAvg} on average. As they have enough points, they will be awarded the trophy! 🏆`);
} else if (dolphinsAvg < koalasAvg && koalasAvg < 100) {
    console.log(`Kolas scoring ${koalasAvg}, scored higher on average than the Dolphins scoring only ${dolphinsAvg} on average. However, they did not meet the minimum score requirement to be awarded the trophy.`);
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
    console.log(`Dolphins and the Koalas both scored ${dolphinsAvg} on average. As both have scored above the mimimum, they will both be awarded trophies! 🏆🏆`);
} else console.log(`The Dolphins and The Koalas tied on average points, scoring less than the minimum. Neither will be awarded a trophy. 😭`);