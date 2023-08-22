/**
 * Autor: Lucas 
 * Data: 22/08/2023
 * Assunto: Filtrando os elemento dentro do array com método filter
 */

const frutas = ['Mamão', 'banana', 'Melancia', 'Abacaxi'];

const frutasMaisDe5Letras = frutas.filter(function(fruta){
   return fruta.length > 5
});

console.log(frutasMaisDe5Letras)