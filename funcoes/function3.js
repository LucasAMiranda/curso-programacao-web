/**
 * Autor: Lucas Alencar
 * Data: 22/08/2023
 * Assunto: Função de Clousures
 */
function saudacao(nome){
    const mensagem = `Olá ${nome}`;

    function exibirSaudacao(){
        console.log(mensagem);
    }

    return exibirSaudacao();
}

const saudacaoJoao = saudacao('João');
const saudacaoMaria = saudacao('Maria');

console.log(saudacaoJoao)
console.log(saudacaoMaria)
