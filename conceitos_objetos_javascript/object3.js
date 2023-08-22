function Aluno(nome, idade, curso){
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;

    this.exibirInfo = function(){
        console.log(`O meu nome é ${this.nome}, minha idade é ${this.idade} e faço curso de ${this.curso}`)
    };
}

//Criando Instâncias para o objeto Aluno

const aluno1 = new Aluno('Lucas', 31, 'Análise de Sistemas');
const aluno2 = new Aluno('Maria', 28, 'Medicina')

//chame o método exibirInfo para mostrar informações de cada aluno

aluno1.exibirInfo()
aluno2.exibirInfo()