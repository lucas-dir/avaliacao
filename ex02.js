const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');
const msg = alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`);

const gostar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (gostar == '1') {
    alert('1 > Muito bom! Continue estudando e você terá muito sucesso.');
}
if (gostar == '2') {
    alert('2 > Ahh que pena... Já tentou aprender outras linguagens?');
}

/*

switch (gostar) {

    case '1' :
        alert('1 > Muito bom! Continue estudando e você terá muito sucesso.');
    case '2' :
        alert('2 > Ahh que pena... Já tentou aprender outras linguagens?');
    default :
        alert('Insira um valor válido');
}

*/