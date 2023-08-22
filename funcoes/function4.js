/**
 * Autor: Lucas Alencar
 * Data: 22/08/2023
 * Assunto: Função de Recursão
 */

function contagemRegressiva(numero){
    if (numero <= 0){
        console.log('Fim da contagem Regressiva!');
        return;
    }
    console.log(numero)


    contagemRegressiva(numero - 1)
}

contagemRegressiva(10)