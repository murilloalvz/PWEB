// Atividade 6 - Operacoes.html
// Recebe dois numeros e mostra soma, subtracao, produto, divisao e resto

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Você precisa digitar dois números válidos!");
} else {
    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let produto = num1 * num2;

    // nao da para dividir por zero
    let divisao = num2 != 0 ? (num1 / num2).toFixed(2) : "não é possível dividir por zero";
    let resto = num2 != 0 ? num1 % num2 : "não é possível dividir por zero";

    let texto = "Primeiro número: " + num1 + "\nSegundo número: " + num2 +
        "\n\nSoma: " + soma +
        "\nSubtração: " + subtracao +
        "\nProduto: " + produto +
        "\nDivisão: " + divisao +
        "\nResto da divisão: " + resto;

    alert(texto);

    let exibir = confirm("Deseja mostrar os resultados também na página?");

    if (exibir) {
        document.getElementById("resultado").innerHTML =
            num1 + " + " + num2 + " = " + soma + "<br>" +
            num1 + " - " + num2 + " = " + subtracao + "<br>" +
            num1 + " * " + num2 + " = " + produto + "<br>" +
            num1 + " / " + num2 + " = " + divisao + "<br>" +
            num1 + " % " + num2 + " = " + resto;
    }
}
