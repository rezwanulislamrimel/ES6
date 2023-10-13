const numberes = [7, 8, 5, 4, 3, 2, 1];
const result = numberes.reduce((p, c) => p + c, 0);
console.log(result);


const age = [12, 15, 40, 25, 26, 25, 23];
const totalAgeAverage = age.reduce((age, average) => age + average, 0);
console.log(totalAgeAverage);


const roll = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiplayRoll = roll.reduce((r, p) => r - p, 0);
console.log(multiplayRoll);

