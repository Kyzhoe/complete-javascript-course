const bill = 430;
let tip = bill >= 50 && bill <= 300 ? (bill * .15) : (bill * .2);
console.log(`The bill was $${bill}, the tip was $${tip} and the total was $${bill + tip}`);