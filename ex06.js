let resposta = prompt('Você deseja adicionar um item a lista sim ou não? \n Ou você deseja remover um item da lista, se sim digite "remover"?').toLocaleLowerCase();
var arr_cong = [];
var arr_fruta = [];
var arr_lati = [];
var arr_doce = [];

while (resposta != 'não'){

    resposta = prompt('Você deseja adicionar um item a lista sim ou não? \n Ou você deseja remover um item da lista, se sim digite "remover"?').toLocaleLowerCase();
    
    if (resposta != 'sim' && resposta != 'não' && resposta != 'remover') {
        alert('Opção inválida');
    }
    
    if (resposta == 'remover') {
        if (arr_cong === 0 && arr_doce === 0 && arr_fruta === 0 && arr_lati === 0 && arr_geral === 0) {
            alert('Não existe produtos nessa lista');
        } else {
            let remover_produto = prompt(`Qual produto você quer remover? \n Lista: \n Congelados ${arr_cong} \n Frutas ${arr_fruta} \n Laticíneos ${arr_lati} \n Doces ${arr_doce}`);
            if (arr_cong.indexOf(remover_produto) != -1){
                arr_cong.splice(arr_cong.indexOf(remover_produto), 1);
                alert(remover_produto);
            } else if(arr_fruta.indexOf(remover_produto) != -1){
                arr_fruta.splice(arr_fruta.indexOf(remover_produto), 1);
                alert(remover_produto);
            } else if(arr_lati.indexOf(remover_produto) != -1){
                arr_lati.splice(arr_lati.indexOf(remover_produto), 1);
                alert(remover_produto);
            } else if(arr_doce.indexOf(remover_produto) != -1){
                arr_doce.splice(arr_doce.indexOf(remover_produto), 1);
                alert(remover_produto);
            } else {
                alert('Item inexistente');
            }
        }
    }

    if (resposta == 'não') {
        break;
    }
    
    if (resposta == 'sim') {
        let produto = prompt('Insira o nome do produto');
    
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

alert(`Lista: \n Congelados: ${arr_cong}; \n Frutas: ${arr_fruta}; \n Laticíneos: ${arr_lati}; \n Doces: ${arr_doce};`);