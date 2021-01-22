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

    

}

//Total de Números cadastrados
function totalcad(n){
    return n.length()
}
//O maior valor
function maiorn(n){
    return n[totalcad(n)-1]
}

//O menor valor
function menorn(n){
    return n[0]
}

//A soma dos valores
function soma(n){
    let vlrsoma = 0
    for(let c in n){
        vlrsoma += n[c]
    }
    return vlrsoma
}

//A média dos valores
