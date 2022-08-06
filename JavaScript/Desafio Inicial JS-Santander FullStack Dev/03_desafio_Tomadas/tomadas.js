// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
//let lines = gets().split("\n");
//
//let line = lines.shift().split(' ');
//let soma = 0
//
//TODO: Complete os espaços em branco com uma possível solução para o desafio
//
//for(i=0;i<     ;i++){
//  let transfor = parseInt(line[   ])
//  soma = soma +
//}
//print(soma-3)

let lines = gets().split("\n");
let t = 5;
let todas = 0;
let line = lines.shift().split(' ');
for(let i = 1; i < t; i++){
  todas = todas + parseInt(line.slice(-i));
}
todas = todas - 3;

console.log(todas);