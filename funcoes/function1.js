function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    let nota2 = parseFloat(prompt("Digite a segunda nota: "));
    let nota3 = parseFloat(prompt("Digite a terceira nota: "));
  
    let media = (nota1 + nota2 + nota3) / 3;
  
    return media;
  }

function mostrarMedia() {
    let resultado = calcularMedia();
    console.log("A média das notas é: " + resultado.toFixed(2)); // Arredondando para 2 casas decimais
}
  
mostrarMedia();
  
