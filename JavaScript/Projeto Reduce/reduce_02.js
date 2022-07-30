/* crie uma função que receba uma lista de preços e 
um numero representando o saldo disponivel.Calcule 
qual será o saldo final apos subtrair todos os preços 
da lista enviada.*/

const saldoDisponivel = 100;
const lista = [
    {
        nome: 'tomate',
        preco: 150,
    },
    {
     name: `ceral`, 
     preco: 12, 
    },
    {
        name:`toalha`,
        preco: 45,
    },


];

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log("rodada", index +1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}
console.log(calculaSaldo(saldoDisponivel, lista));