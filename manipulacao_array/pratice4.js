/**
 * Autor: Lucas 
 * Data: 22/08/2023
 * Assunto: Método Reduce pega o comprimento total de elemento dentro do array
 */

const frutas = ['Mamão', 'banana', 'Melancia', 'Abacaxi'];

const comprimentoTotal = frutas.reduce(function(acumulador, fruta){
    return acumulador + fruta.length;
}, 0);

console.log(comprimentoTotal);
