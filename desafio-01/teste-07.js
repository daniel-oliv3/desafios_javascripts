//Maior valor dos 3 array

let arr1 = [3, 4, 6, 8, 9, 12, 5, 7];
let arr2 = [25, 12, 0, 7];
let arr3 = [1, 5, 7, 3, 9];


console.log(Math.max(...[...arr1, ...arr2, ...arr3]));

