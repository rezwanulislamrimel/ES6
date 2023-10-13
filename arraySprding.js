const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [...arr];
arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);


arr.push(555);
console.log(arr2);
console.log(arr);