const pessoa = {
    nome: 'João',
    idade: 30,
    saudacao: function(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

console.log(pessoa.saudacao())
console.log(pessoa['nome'])
console.log(pessoa['idade'])