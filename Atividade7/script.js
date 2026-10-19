// Atividade 7 - Pedra, Papel ou Tesoura

let pontosUsuario = 0;
let pontosComputador = 0;
let empates = 0;

function escolhaDoComputador() {
    // Math.random() gera um numero de 0 ate 1 (sem incluir o 1)
    // multiplicando por 3 e usando o floor da 0, 1 ou 2
    let numero = Math.floor(Math.random() * 3);

    if (numero == 0) {
        return "pedra";
    } else if (numero == 1) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function jogar(escolhaUsuario) {
    let escolhaComputador = escolhaDoComputador();
    let resultado;
    let explicacao;

    if (escolhaUsuario == escolhaComputador) {
        resultado = "Empate!";
        explicacao = "Os dois escolheram " + escolhaUsuario + ".";
        empates++;
    } else if (escolhaUsuario == "pedra" && escolhaComputador == "tesoura") {
        resultado = "Você venceu!";
        explicacao = "Pedra quebra tesoura.";
        pontosUsuario++;
    } else if (escolhaUsuario == "tesoura" && escolhaComputador == "papel") {
        resultado = "Você venceu!";
        explicacao = "Tesoura corta papel.";
        pontosUsuario++;
    } else if (escolhaUsuario == "papel" && escolhaComputador == "pedra") {
        resultado = "Você venceu!";
        explicacao = "Papel cobre a pedra.";
        pontosUsuario++;
    } else {
        resultado = "O computador venceu!";
        pontosComputador++;

        if (escolhaComputador == "pedra") {
            explicacao = "Pedra quebra tesoura.";
        } else if (escolhaComputador == "tesoura") {
            explicacao = "Tesoura corta papel.";
        } else {
            explicacao = "Papel cobre a pedra.";
        }
    }

    document.getElementById("escolhaUsuario").innerHTML = escolhaUsuario;
    document.getElementById("escolhaComputador").innerHTML = escolhaComputador;
    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("explicacao").innerHTML = explicacao;

    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById("pontosUsuario").innerHTML = pontosUsuario;
    document.getElementById("pontosComputador").innerHTML = pontosComputador;
    document.getElementById("empates").innerHTML = empates;
}

function reiniciar() {
    let confirmar = confirm("Deseja zerar o placar?");

    if (confirmar) {
        pontosUsuario = 0;
        pontosComputador = 0;
        empates = 0;
        atualizarPlacar();

        document.getElementById("escolhaUsuario").innerHTML = "-";
        document.getElementById("escolhaComputador").innerHTML = "-";
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("explicacao").innerHTML = "";
    }
}
