

let arr = ['banana', 'abacate', 'tangerina', 'damasco'];

/*Crescente*/
arr.sort((a, b) => {
    if(a > b){
        return 1;
    }
    if(b > a){
        return -1;
    }
    if(a === b){
        return 0;
    }
})

console.log(arr);

