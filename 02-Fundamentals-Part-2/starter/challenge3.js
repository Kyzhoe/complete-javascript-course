"use strict";

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
  BMI: function () {
    return `${this.fullName}'s BMI (${this.calcBMI()})`;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
  BMI: function () {
    return `${this.fullName}'s BMI (${this.calcBMI()})`;
  },
};

john.calcBMI();
mark.calcBMI();

console.log(mark.bmi, john.bmi);

if (john.bmi > mark.bmi) {
  console.log(`${john.BMI()} is higher than ${mark.BMI()}!`);
} else if (mark.bmi > john.bmi) {
  console.log(`${mark.BMI()} is higher than ${john.BMI()}!`);
} else {
  console.log(`${john.BMI()}'s and ${mark.BMI()}'s are the same`);
}
