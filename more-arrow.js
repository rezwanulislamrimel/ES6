// const doMath = () => Math.PI;
// console.log(doMath());


const doMath1 = (x, y, z) =>
{
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi
    return result
}
    
const marks = doMath1(12, 13, 14);
console.log(marks);