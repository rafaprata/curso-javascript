//Adicionar número
var list = []

function adicionar(){
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('addtab')
    res.innerHTML = ` `
    
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
    var res = document.getElementById('res')
    if(list == 0){
        window.alert(`[ERRO] Adicione algum número para poder analisar.`)
    }else{
        list.sort((a,b)=>a-b)                       //Para cada a, b em lista retornará a-b
        
/*        
        var total = document.getElementById('idtotal')
        var maior = document.createElement('p')
        var menor = document.createElement('p')
        var soma = document.createElement('p')
        var media = document.createElement('p')

        total.text = `A lista tem ${ftot(list)} números.`
        maior.text = `O maior valor é ${fmaior(list)}`
        menor.text = `O menor valor é ${fmenor(list)}`
        soma.text = `Somando todos os valores temos, ${fsoma(list)}`
        media.text = `A média dos valores digitados é ${fmedia(list)}`
        
        res.appendChild(maior)
        res.appendChild(menor)
        res.appendChild(soma)
        res.appendChild(media)
*/

       res.innerHTML += `<p>A lista tem ${ftot(list)} números.</p>`
       res.innerHTML += `<p>O maior valor é ${fmaior(list)}.</p>`
       res.innerHTML += `<p>O menor valor é ${fmenor(list)}.</p>`
       res.innerHTML += `<p>Somando todos os valores temos, ${fsoma(list)}.</p>`
       res.innerHTML += `<p>A média dos valores digitados é ${fmedia(list)}.</p>`
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
function fmedia(n){
    var media = fsoma(n)/ftot(n)
    return media
}