let ponto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let tentativa = 3;
let vitoria = false;

console.log(ponto);

while (tentativa > 0 && vitoria == false) {
    let resposta = parseInt(prompt('Tente adivinhar um número entre 0 e 10'));
    if (resposta == ponto) {  
        vitoria = true; 
        alert('Você ganhou');
    } else {
        tentativa = tentativa - 1;
        alert(`Você errou, tente novamente, tentativas: ${tentativa}`);
    }
}
if (tentativa == 0 && vitoria == false) {
    alert(`Você perdeu, o número era ${ponto}`);
}