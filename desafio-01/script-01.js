// Desafio 1

//1
let N = parseInt(gets());

let pares = [];
let impares = [];


for(let i = 0; i < N; i++){
    let num = parseInt(gets());

    num % 2 === 0 ? pares.push(num) : impares.push(num);
}


//2
pares.sort((a, b) => a - b); //cres
impares.sort((a, b) => b - a); //des


//3
for(e of [...pares,...impares]){
    console.log(e);
}
