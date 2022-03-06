const massMark = 95;
const marksHeight = 1.88;
const marksBMI = massMark / marksHeight ** 2;

const massJohn = 85;
const johnsHeight = 1.76;
const BMIJohn = massJohn / (johnsHeight * johnsHeight);

const markHigherBMI = marksBMI > BMIJohn;

console.log(marksBMI, BMIJohn, markHigherBMI);