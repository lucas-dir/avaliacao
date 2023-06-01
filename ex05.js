let resposta = prompt('Você deseja adicionar um item a lista sim ou não?').toLocaleLowerCase();
var arr_geral = []
var arr_cong = [];
var arr_fruta = [];
var arr_lati = [];
var arr_doce = [];

while (resposta != 'não'){

    if (resposta != 'sim' && resposta != 'não') {
        alert('Opção inválida');
        resposta = prompt('Você deseja adicionar um item a lista sim ou não?').toLocaleLowerCase();
    }
    
    if (resposta == 'não') {
        break;
    }
    
    if (resposta == 'sim') {
        let produto = prompt('Insira o nome do produto');
        arr_geral.push(produto);
        console.log(arr_geral);
    
        let opcao = prompt('1 - Congelados \n 2 - Frutas \n 3 - Laticínios \n 4 - Doces')
    
        
        
        switch (opcao) {
            case '1' :
                
                arr_cong.push(produto);
                console.log(arr_cong);
                break;
            case '2' :
                
                arr_fruta.push(produto);
                console.log(arr_fruta);
                break;
            case '3' :
                
                arr_lati.push(produto);
                console.log(arr_lati);
                break;
            case '4' :
                
                arr_doce.push(produto);
                console.log(arr_doce);
                break;
            default :
                
                alert('Insira uma opção válida.');
        }
    }
    
    resposta = prompt('Deseja continuar, sim ou não?').toLocaleLowerCase();
}

alert(`Lista geral: \n ${arr_geral}; \n Congelados: ${arr_cong}; \n Frutas: ${arr_fruta}; \n Laticíneos: ${arr_lati}; \n Doces: ${arr_doce};`);