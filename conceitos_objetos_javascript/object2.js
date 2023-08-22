const pessoa = new Object();
pessoa.nome = 'João';
pessoa.idade = 30;

pessoa.saudacao = function(){
    console.log(`Olá , meu nome é ${this.nome} e tenho ${this.idade} anos`)
}

//Adicionar um novo nome, idade e saudação

pessoa.novoNome = 'Maria';
pessoa.novaIdade = 28;
pessoa.novaSaudacao = function(){
    console.log(`Olá, meu nome é ${this.novoNome} e tenho ${this.novaIdade} anos`);
}

console.log(pessoa.novoNome);
console.log(pessoa.novaIdade);
console.log(pessoa.novaSaudacao())