//Adicionar número
var list = []

function adicionar(){
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('addtab')
    
    if(txtnum.value <= 0 || txtnum.value > 100){
        window.alert('[ERRO] Valor adicionado não permitido!')
    }else {
        var num = Number(txtnum.value)
        list.push(num)
        var pos = list.indexOf(num)
        var item = document.createElement('option')

        item.text = `Número ${list[pos]} adicionado`  
        
        tab.appendChild(item)
        txtnum.innerHTML = ' '
    }
}
