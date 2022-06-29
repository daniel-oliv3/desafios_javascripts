let arr1 = [3, 4];
//let arr2 = arr1; //prox, caminho para o caminho array 1
let arr2 = [...arr1];

arr2.push(5);

//console.log(arr1);
//console.log(arr2);

//concatenando os 2 arrays
//console.log([...arr1, ...arr2]);
//ou
console.log(arr1.concat(arr2));