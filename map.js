const numbers = [4, 5, 6, 4, 7];
const dubled = [];
for (const num of numbers) {
    const duble = num * 2;
    dubled.push(duble);
}
// console.log(dubled);

function dubbleIt(num) {
    // console.log( 'the total elemetn of  number is',num)
    return num * 2;

    
}
const result = numbers.map(dubbleIt);
// console.log(result)

const numbers1 = [4, 5, 6, 4, 7];

function totalResult(numb) {
    return numb * 2;
    
}
const Total = numbers.map(totalResult);
// console.log(Total);