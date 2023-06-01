const lado = prompt('Você deseja seguir: 1 para FRONT-END ou 2 para BACK-END');

if (lado == '1') {
    var linguagem = prompt('Você deseja aprender: 1 para REACT ou 2 para VUE');
    if (linguagem == '1') {
        var destino = prompt('Você deseja: 1 se ESPECIALIZAR ou 2 se tornar FULLSTACK');
        if (destino == '1') {
            alert('Você se especializou em React');
        }
        if (destino == '2') {
            alert('Você se tornou Fullstack com forte em React');
        }
    }
    if (linguagem == '2') {
        var destino = prompt('Você deseja: 1 se ESPECIALIZAR ou 2 se tornar FULLSTACK');
        if (destino == '1') {
            alert('Você se especializou em Vue');
        }
        if (destino == '2') {
            alert('Você se tornou Fullstack com forte em Vue');
        }
    }
}

if (lado == '2') {
    var linguagem = prompt('Você deseja aprender: 1 para C# ou 2 para JAVA');
    if (linguagem == '1') {
        var destino = prompt('Você deseja: 1 se ESPECIALIZAR ou 2 se tornar FULLSTACK');
        if (destino == '1') {
            alert('Você se especializou em C#');
        }
        if (destino == '2') {
            alert('Você se tornou Fullstack com forte em C#');
        }
    }
    if (linguagem == '2') {
        var destino = prompt('Você deseja: 1 se ESPECIALIZAR ou 2 se tornar FULLSTACK');
        if (destino == '1') {
            alert('Você se especializou em JAVA');
        }
        if (destino == '2') {
            alert('Você se tornou Fullstack com forte em JAVA');
        }
    }
}


let msg = prompt('Você gostaria de aprender mais alguma nova linguagem? Digite "ok" em caso de positivo');
while (msg == 'ok') {
    let nova_linguagem = prompt('Qual?');
    alert(`${nova_linguagem} é realmente uma boa linguagem!`)
    msg = prompt('Tem mais alguma que você gostaria de aprender? Se sim, digite "ok".');
}

