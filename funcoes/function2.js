/**
 * Autor: Lucas Alencar
 * Data: 22/08/2023
 * Assunto: Função de Ordem Superior
 */

function executarOperacao(num1, num2, operacao){
    return operacao(num1, num2)
}

function soma(a,b){
    return a + b
}

function subtracao(a,b){
    return a - b
}

function multiplicacao(a,b){
    return a*b;
}

console.log(executarOperacao(5, 3, soma))
console.log(executarOperacao(5, 3 , subtracao))
console.log(executarOperacao(5, 3, multiplicacao))