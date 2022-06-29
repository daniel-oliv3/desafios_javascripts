let entrada = [7, 8, 10, 8, 260, 4, 10, 10];

entrada.sort((a, b) => a - b);

let obj = {};

obj.teste1 = 20;
obj.teste2 = 40;

/* Mesma coisa do codigo acima */
obj.['teste1'] = 20;
obj.['teste2'] = 40;

for(chave in obj){
console.log(`A chave ${chave} possui o valor ${obj[chave]}`);
}