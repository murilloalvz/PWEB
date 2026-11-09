function maiorNumero(a, b, c) {
    return Math.max(a, b, c);
}

function ordemCrescente(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort(function (x, y) {
        return x - y;
    });
    return numeros;
}

function ehPalindromo(texto) {
    let limpo = texto.toLowerCase().split(" ").join("");
    let invertido = limpo.split("").reverse().join("");

    if (limpo == invertido) {
        return "é um palíndromo";
    }
    return "não é um palíndromo";
}

function subconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
        return "erro";
    }

    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    }
    return "não é um subconjunto";
}

function diaDaSemana(data) {
    let dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    return dias[data.getDay()];
}

document.getElementById("resultado").innerHTML =
    "1) Maior de 3, 9 e 5: " + maiorNumero(3, 9, 5) + "<br>" +
    "2) Ordem crescente de 10, 2 e 5: " + ordemCrescente(10, 2, 5).join(", ") + "<br>" +
    "3) \"Socorram me subi no onibus em Marrocos\" " + ehPalindromo("Socorram me subi no onibus em Marrocos") + "<br>" +
    "4) \"programa\" em \"programação\": " + subconjunto("programação", "programa") + "<br>" +
    "5) 22/04/2026 é " + diaDaSemana(new Date(2026, 3, 22));
