//! For each array function 


const Fruits = ['mango', 'apple', 'banana', 'kazi'];
// Fruits.forEach(eat => console.log(eat));


const bookReading = ['javasript', 'python', 'c++', 'habulederprogarmming'];
// bookReading.forEach(reading => console.log(reading));



const number = [1, 2, 3];
let sum = 0;
number.forEach(num => sum += num);
// console.log(sum)

const roll = [3, 2, 1, 7];
let total = 0;
roll.forEach(p => total += p);
// console.log(total);

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}


// ! MAP SECTION ARE START HERE


const Rex = [1, 2, 3];
const result = Rex.forEach((item) => console.log(item));
console.log(result);


const result1 = Rex.map(maping => {
    return maping * 2;
}
);
console.log(result1);


const fruitss = ['mango', 'bango', 'fango', 'jango'];
fruitss.forEach((element, index, arr) => console.log(element, index, arr));


fruitss.map((elements, indexx,) => console.log(elements, indexx,));





// ! FIND METHOD OF AN ARRAY
// ! FILTER METHOD OF AN ARRAY

// const fruits1 = ['mango', 'bango', 'fango', 'jango', 'mango'];
const numaric = [1, 2, 3, 4, 5, 6, 8, 7, 9];
const Filter = numaric => {
    const result = [];
    for (let num of numaric) {
        if (num % 2 === 0) {
            result.push(num);
        }
        
    }
    return result;
}
const x = Filter(numaric);
console.log(x);


//! es6 version of filter

const NumberNew = [1, 2, 3, 4, 5, 6, 8, 7, 9];

const New = NumberNew.filter((num) => num % 2 === 0);
console.log(NumberNew);
console.log(New);

