function soma(x,y){
    return x + y;
}
function sub(x,y){
    return x - y;
}
function multi(x,y){
    return x * y;
}
function divi(x,y){
    return x / y;
}

let opcao = prompt('Escolha a operação \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Sair');

do {
    

    while (opcao != '1' && opcao != '2' && opcao != '3' && opcao != '4' && opcao != '5') {
        alert('Opção Inválida');
        opcao = prompt('Escolha a operação \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Sair');
    }

    if (opcao == '5') {
        break;
    }

    let x = parseFloat(prompt('Insira seu primeiro valor: '));
    let y = parseFloat(prompt('Insira seu segundo valor: '));

    switch (opcao) {
        case '1' :
            var res = soma(x, y);
            alert(res);
            break;

        case '2' :
            var res = sub(x, y);
            alert(res);
            break;

        case '3' :
            var res = multi(x, y);
            alert(res);
            break;

        case '4' :
            var res = divi(x, y);
            alert(res);
            break;

   
    }
    opcao = prompt('Escolha a operação \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Sair');
} while(opcao == '1' || opcao !=  '2' || opcao != '3' || opcao != '4')
alert("That's all folks!!")