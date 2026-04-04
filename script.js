// Exercício 1 - for: exibe números de 1 a 10
function ex1() {
    for (let i = 1; i <= 10; i++) {
        document.writeln(i);
        document.writeln('<br>');
    }
}

// Exercício 2 - for: tabuada de um número
function ex2() {
    let numero;
    numero = parseInt(prompt('Digite um número para ver a tabuada'));
    document.writeln('Tabuada do ' + numero + ':');
    document.writeln('<br>');
    for (let i = 1; i <= 10; i++) {
        document.writeln(numero + ' x ' + i + ' = ' + (numero * i));
        document.writeln('<br>');
    }
}

// Exercício 3 - while: soma de 1 a 100
function ex3() {
    let soma = 0;
    let i = 1;
    while (i <= 100) {
        soma += i;
        i++;
    }
    document.writeln('Soma de 1 a 100: ' + soma);
}

// Exercício 4 - while: números pares de 0 a 20
function ex4() {
    let i = 0;
    document.writeln('Números pares de 0 a 20:');
    document.writeln('<br>');
    while (i <= 20) {
        document.writeln(i);
        document.writeln('<br>');
        i += 2;
    }
}

// Exercício 5 - do...while: contagem regressiva de 10 até 1
function ex5() {
    let i = 10;
    document.writeln('Contagem regressiva:');
    document.writeln('<br>');
    do {
        document.writeln(i);
        document.writeln('<br>');
        i--;
    } while (i >= 1);
}

// Exercício 6 - for...in: percorrer objeto
function ex6() {
    let usuario = {
        nome: 'Caio Vinicius',
        curso: 'ADS',
        semestre: 3,
        cidade: 'Salvador'
    };
    for (const chave in usuario) {
        document.writeln(chave + ': ' + usuario[chave]);
        document.writeln('<br>');
    }
}

// Exercício 7 - array: média das notas
function ex7() {
    let nota1, nota2, nota3, nota4, soma, media;
    nota1 = parseFloat(prompt('Digite a nota 1'));
    nota2 = parseFloat(prompt('Digite a nota 2'));
    nota3 = parseFloat(prompt('Digite a nota 3'));
    nota4 = parseFloat(prompt('Digite a nota 4'));
    let notas = [nota1, nota2, nota3, nota4];
    soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    media = soma / notas.length;
    document.writeln('Média: ' + media.toFixed(2));
}

// Exercício 8 - for: números ímpares de 1 a 50
function ex8() {
    document.writeln('Números ímpares de 1 a 50:');
    document.writeln('<br>');
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            document.writeln(i);
            document.writeln('<br>');
        }
    }
}

// Exercício 9 - while: contador regressivo até 0
function ex9() {
    let contador = 10;
    while (contador >= 0) {
        if (contador === 0) {
            document.writeln('Sistema encerrado!');
        } else {
            document.writeln('Encerrando em ' + contador + '...');
        }
        document.writeln('<br>');
        contador--;
    }
}