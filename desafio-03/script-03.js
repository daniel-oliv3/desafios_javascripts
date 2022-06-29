let entrada = [7, 8, 10, 8, 260, 4, 10, 10];

entrada.sort((a, b) => a - b);

let obj = {};

for(num of entrada){
    obj[num] = (num in obj) ? obj[num] +1 : 1;
    //console.log(`A chave será ${num} e o valor ${obj[num]}`);
}

for(chave in obj){
    console.log(`${chave} aparece ${obj[chave]} vez(es)`);
}





