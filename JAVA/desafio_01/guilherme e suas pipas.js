// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

//let lines = gets().split("\n");

//let N = parseInt(lines.shift());
////TODO: Complete os espaços em branco com uma possível solução para o desafio
//let resposta = ((N -  )*   ) / 2; 
//print(        );


let lines = gets().split("\n");

let N = parseInt(lines.shift());

let resposta = (N * (N - 3)) / 2;

print(resposta);