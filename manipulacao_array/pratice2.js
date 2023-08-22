/**
 * Autor: Lucas 
 * Data: 22/08/2023
 * Assunto: Mapeando os elemento dentro do array com método map
 */

const frutas = ['Mamão', 'banana', 'Melancia', 'Abacaxi'];

const frutasCaixaAlta = frutas.map(function(fruta){
    return fruta.toUpperCase();
   
})

console.log(frutasCaixaAlta);


