const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0; 
    /* return item % 2 !==0; retorna impares*/
}

console.log(filtraPares(meuArray));
