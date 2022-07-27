//solução 01
/*
function verificaPalindromo(string) {
    if(!string) return "Insira um texto para verificar";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ana"));
*/


//solução 02
/* 

   omo
   012
   
   abba 
   0123
função verificaa ok quando nao tem dados
função retornando true mesmo não sendo palindromo (verificar)
   */
function verificaPalindromo02(string) {
    if ( !string ) return "Insira um texto para verificar";

    for ( let i = 0; i < string.lenght /2 ; i++ ) {
        if ( string[i] !== string[string.length - 1 - i ]){
            return false;
        }
    }

    return true;   
}



console.log(verificaPalindromo02("ovoo"));

