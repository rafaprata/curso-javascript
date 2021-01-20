function contar(){

    //Variáveis
    var txtini = window.document.getElementById("txtini")
    var txtfim = window.document.getElementById("txtfim")
    var txtpas = window.document.getElementById("txtpas")
    var ini = Number(txtini.value)
    var fim = Number(txtfim.value)
    var pas = Number(txtpas.value)
    var res = window.document.getElementById("res")

    //Condições
    if(ini == 0 || fim == 0){
        res.innerHTML = `Impossível contar`
        window.alert(`[ERRO] Não é possível contar sem um valor inicial ou final!`)
    }
    if(pas == 0){
        window.alert(`Considerando passo de 1`)
        pas = 1
    }
    res.innerHTML = "Contando: "
    
    //Repetição
    if(ini < fim){ 
        for(var c = ini; c <= fim; c += pas){ //Caso o valor inicial seja menor que o final
            res.innerHTML += `${c} -> `       //O comando += ele sempre adiciona o valor na variável.
        }
      
    }else {
        for(var c = ini; c <= ini; c -= pas){ //Caso o Valor Final seja menor que o inicial
            res.innerHTML += `${c} -> `
        }
    }
    res.innerHTML += `FIM`
}