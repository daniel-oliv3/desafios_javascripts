let N = parseInt(gets());

let pares = [];
let impares = [];


for(let i = 0; i < N; i++){
    let num = parseInt(gets());

    num % 2 === 0 ? pares.push(num) : impares.push(num);
}





