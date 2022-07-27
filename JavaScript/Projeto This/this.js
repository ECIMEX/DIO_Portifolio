function calculaIdade(anos){
    return `daqui a ${anos} anos, ${this.nome} terá ${
        this.idade +anos 
    } anos de idade.`;
}
const pessoa1={
    nome: 'João',
    idade: 20,
};

const pessoa2={
    nome: 'Maria',
    idade: 25,
};

const pessoa3={
    nome: 'José',
    idade: 30,
};

const pessoa4={
    nome: 'Pedro',
    idade: 35,
};

const animal={
    nome: 'Cachorro',
    idade: 5,
    raca: `pastor alemão`,    
};

console.log(calculaIdade.apply(animal , [30]));

