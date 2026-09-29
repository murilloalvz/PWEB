// Atividade 6 - Media.html
// Le o nome e as quatro notas do aluno e mostra a media

alert("Bem-vindo! Vamos calcular a média do aluno.");

let nome = prompt("Digite o nome do aluno:");

let nota1 = parseFloat(prompt("Digite a 1ª nota de " + nome + ":"));
let nota2 = parseFloat(prompt("Digite a 2ª nota de " + nome + ":"));
let nota3 = parseFloat(prompt("Digite a 3ª nota de " + nome + ":"));
let nota4 = parseFloat(prompt("Digite a 4ª nota de " + nome + ":"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    alert("Alguma nota não foi digitada corretamente. Recarregue a página e tente novamente.");
} else {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    let mostrar = confirm("Notas lidas com sucesso! Deseja ver a média de " + nome + "?");

    if (mostrar) {
        let situacao = media >= 6 ? "Aprovado" : "Reprovado";

        alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2) + "\nSituação: " + situacao);

        document.getElementById("resultado").innerHTML =
            "Aluno: " + nome + "<br>Notas: " + nota1 + " - " + nota2 + " - " + nota3 + " - " + nota4 +
            "<br>Média: " + media.toFixed(2) + "<br>Situação: " + situacao;
    } else {
        alert("Tudo bem, a média não será exibida.");
    }
}
