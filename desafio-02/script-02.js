let N = parseInt(gets());

for(let i =0; i < N; i++){
    let entrada = gets();
    
    console.log(
        entrada
        .split(' ')
        .sort((a, b) => {
            if(a > b) return 1;
            if(b > a) return -1;
            if(a === b) return 0;
        })
        .sort((a, b) => b.length - a.length)
        .join(' ')
    )    
}










