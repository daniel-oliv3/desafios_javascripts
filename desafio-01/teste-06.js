let arr1 = [3, 4];
let arr2 = [...arr1];
let arr3 = ['banana', 'laranja'];

arr2.push(5);

console.log([...arr1, ...arr2, ...arr3]);