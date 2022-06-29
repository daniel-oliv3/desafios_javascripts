let entrada = "banana abacaxi melão uva mamão tangerina";

let arr = entrada.split(' ');

console.log(arr.sort((a, b) => {
    if(a > b) return 1;
    if(b > a) return -1;
    if(a === b) return 0;
}).sort((a, b) => b.length - a.length).join(' ')
);











