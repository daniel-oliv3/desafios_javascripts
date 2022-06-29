let N = parseInt(gets());



let entrada = [];

for(let i = 0; i < N; i++){
    entrada.push(parseInt(gets()));
}


entrada.sort((a, b) => a - b);

let obj = {};

for(num of entrada){
    obj[num] = (num in obj) ? obj[num] +1 : 1;
}

for(chave in obj){
    console.log(`${chave} aparece ${obj[chave]} vez(es)`);
}





