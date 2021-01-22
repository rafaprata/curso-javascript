//Adicionar número
var list = []

function adicionar(){
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('addtab')
    
    if(txtnum.value <= 0 || txtnum.value > 100){
        window.alert('[ERRO] Valor adicionado não permitido!')
    }else {
        var num = Number(txtnum.value)
        if(numrep(num) == 0){
            alert(`[ERRO] Número ${num}, já foi utilizado.`)
        } else{
            list.push(num)
            var pos = list.indexOf(num)
            var item = document.createElement('option')
    
            item.text = `Número ${list[pos]} adicionado`  
            
            tab.appendChild(item)
        }
    }
}

function numrep(n){
    if(list.indexOf(n) != -1){
        return 0
    } else{
        return 1
    }    
}

//Analizar os números

function analisar(){
    if(list == 0){
        window.alert(`[ERRO] Adicione algum número para poder analisar.`)
    }else{
        list.sort((a,b)=>a-b)                       //Para cada a, b em lista retornará a-b
        
        alert(`A lista tem ${ftot(list)} números.`)
        alert(`O maior valor é ${fmaior(list)}`)
        alert(`O menor valor é ${fmenor(list)}`)
        alert(`Somando todos os valores temos, ${fsoma(list)}`)
    }

}

//Total de Números cadastrados
function ftot(n){
    return n.length
}

//O maior valor
function fmaior(n){
    return n[ftot(n)-1]
}

//O menor valor
function fmenor(n){
    return n[0]
}

//A soma dos valores
function fsoma(n){
    var soma = 0
    for (let i=0; i< ftot(n); i++){
        soma += n[i]
    }
    return soma
}

//A média dos valores
