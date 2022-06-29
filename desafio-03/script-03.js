let N = parseInt(gets());



let entrada = [];

for(let i = 0; )


entrada.sort((a, b) => a - b);

let obj = {};

for(num of entrada){
    obj[num] = (num in obj) ? obj[num] +1 : 1;
    //console.log(`A chave será ${num} e o valor ${obj[num]}`);
}

for(chave in obj){
    console.log(`${chave} aparece ${obj[chave]} vez(es)`);
}





