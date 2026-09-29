// Atividade 8 - Pesquisa do filme
// opiniao: otimo = 4, bom = 3, regular = 2, pessimo = 1

const TOTAL_PESSOAS = 45;

let quantidade = 0;
let somaIdades = 0;
let maisVelha = 0;
let maisNova = 0;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let mulheres = 0;
let homens = 0;
let outros = 0;

function registrar() {
    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = parseInt(document.getElementById("opiniao").value);
    let mensagem = document.getElementById("mensagem");

    if (quantidade >= TOTAL_PESSOAS) {
        mensagem.innerHTML = "A pesquisa já foi encerrada.";
        return;
    }

    if (isNaN(idade) || idade <= 0 || idade > 120) {
        mensagem.innerHTML = "Digite uma idade válida.";
        return;
    }

    if (sexo == "") {
        mensagem.innerHTML = "Selecione o sexo.";
        return;
    }

    if (isNaN(opiniao)) {
        mensagem.innerHTML = "Selecione a opinião sobre o filme.";
        return;
    }

    quantidade++;
    somaIdades += idade;

    // na primeira resposta a idade e a mais velha e a mais nova ao mesmo tempo
    if (quantidade == 1) {
        maisVelha = idade;
        maisNova = idade;
    } else {
        if (idade > maisVelha) {
            maisVelha = idade;
        }
        if (idade < maisNova) {
            maisNova = idade;
        }
    }

    if (opiniao == 1) {
        qtdPessimo++;
    } else if (opiniao == 3 || opiniao == 4) {
        qtdOtimoBom++;
    }

    if (sexo == "F") {
        mulheres++;
    } else if (sexo == "M") {
        homens++;
    } else {
        outros++;
    }

    document.getElementById("contador").innerHTML = quantidade;
    mensagem.innerHTML = "Resposta " + quantidade + " registrada!";

    // limpa os campos para a proxima pessoa
    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("opiniao").value = "";

    if (quantidade == TOTAL_PESSOAS) {
        document.getElementById("btnRegistrar").disabled = true;
        mensagem.innerHTML = "Todas as 45 pessoas responderam. Pesquisa encerrada!";
        mostrarResultados();
    }
}

function mostrarResultados() {
    if (quantidade == 0) {
        document.getElementById("resultados").innerHTML = "<p>Nenhuma resposta registrada ainda.</p>";
        return;
    }

    let mediaIdade = somaIdades / quantidade;
    let porcentagemOtimoBom = (qtdOtimoBom / quantidade) * 100;

    let titulo = quantidade == TOTAL_PESSOAS ? "Resultado final" : "Resultado parcial (" + quantidade + " de " + TOTAL_PESSOAS + ")";

    document.getElementById("resultados").innerHTML =
        "<h3>" + titulo + "</h3>" +
        "<ul>" +
        "<li>Média de idade: " + mediaIdade.toFixed(1) + " anos</li>" +
        "<li>Pessoa mais velha: " + maisVelha + " anos</li>" +
        "<li>Pessoa mais nova: " + maisNova + " anos</li>" +
        "<li>Responderam péssimo: " + qtdPessimo + "</li>" +
        "<li>Responderam ótimo ou bom: " + porcentagemOtimoBom.toFixed(2) + "%</li>" +
        "<li>Mulheres: " + mulheres + "</li>" +
        "<li>Homens: " + homens + "</li>" +
        "<li>Outros: " + outros + "</li>" +
        "</ul>";
}
